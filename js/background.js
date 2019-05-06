//esta función mantiene el fondo del juego
class Background {
  constructor(w, h, ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "img/bg.png";
    this.h = h;
    this.w = w;

    this.x = 0;
    this.y = 0;

    this.dx = 10;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);
  }
}
