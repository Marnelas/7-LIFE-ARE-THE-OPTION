class Obstacle {
  constructor(ctx, w, h) {
    this.ctx = ctx;
    this.canW = w;
    this.canH = h;
    this.posX = 400;
    this.posY = 500;
    this.width = 100;
    this.height = 100;
  }
  draw() {
    this.ctx.fillStyle = "blue"; // cambia los colores de relleno
    this.ctx.fillRect(this.posX, this.posY, 100, 100);
  }
}
