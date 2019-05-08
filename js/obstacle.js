class Obstacle {
  constructor(ctx, w, h, posX, posY) {
    this.ctx = ctx;
    this.canW = w;
    this.img = new Image();
    this.img.src = "img/platform-skin.png"
    this.canH = h;
    this.posX = posX;
    this.posY = posY;
    this.width = 100;
    this.height = 100;
  }
  draw() {
    this.ctx.drawImage(this.img, this.posX, this.posY, 100, 100);
  }
}
