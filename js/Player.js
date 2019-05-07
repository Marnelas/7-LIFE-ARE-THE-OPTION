class Player {
  constructor(ctx, w, h, keys) {
    this.canvasW = w;
    this.canvasH = h;
    this.ctx = ctx;
    this.keys = keys;
    this.x = this.canvasW * 0.08;

    this.y0 = this.canvasH * 0.8;
    this.y = this.y0;

    this.img = new Image();
    this.img.src = "img/player.png";
    this.w = 100;
    this.h = 100;
    this.vy = 1;
    this.vx = 20;
    this.floor = false;
    this.positionF = undefined;
  }

  draw() {
    if (this.y <= 0 || this.y > this.canvasH - 100) this.changeY();
    if (this.x <= 0 || this.x > this.canvasW - 100) this.changeX();
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  changeY() {
    this.vy *= -1;
  }
  blockY() {
    this.vy = 0;
  }

  blockX() {
    this.vx = 0;
  }
  unblockX() {
    this.vx = 20;
  }
  changeX() {
    this.vx *= -1;
  }
  jump() {
    this.y -= 5;
    this.vy -= 10;
    this.floor = false;
  }
  gravity() {
    let gravity = 0.4;

    if (this.y >= this.y0) {
      this.vy = 2;
      this.y = this.y0;
    } else if (this.floor) {
      this.vy = 0;
      this.y = this.positionF;
    } else {
      this.vy += gravity;
      this.y += this.vy;
    }
  }

  moveLeft() {
    if (this.x > 0) this.x -= this.vx;
  }

  moveRight() {
    if (this.x < this.canvasW - this.w) this.x += this.vx;
  }
}
