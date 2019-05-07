class Obstacle {
  constructor(ctx, w, h, posX, posY) {
    this.ctx = ctx;
    this.canW = w;
    this.canH = h;
    this.posX = posX;
    this.posY = posY;
    this.width = 100;
    this.height = 100;
  }
  draw() {
    this.ctx.fillStyle = "blue"; // cambia los colores de relleno
    this.ctx.fillRect(this.posX, this.posY, 100, 100);
  }
}
