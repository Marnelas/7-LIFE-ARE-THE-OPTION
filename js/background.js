//esta función mantiene el fondo del juego
class Background {
  constructor(w, h, ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "img/background-final.jpg";
    this.h = h;
    this.w = w;

    this.x = 0;
    this.y = 0;

    this.dx = 10;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
  Sound() {
    this.music = new Audio()
    this.music.src = "songs/backSound.mp3"
    this.music.play()
  }
}


