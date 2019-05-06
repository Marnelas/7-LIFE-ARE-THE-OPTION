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
    this.vx = 10;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
  jump() {
    this.y -= this.vy;
  }
  moveLeft() {
    if (this.x > 0) this.x -= this.vx;
  }

  moveRight() {
    if (this.x < this.canvasW - this.w) this.x += this.vx;
  }
}
