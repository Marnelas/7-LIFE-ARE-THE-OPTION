let baseGame = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  winH: undefined,
  winW: undefined,
  init: function(Id) {
    this.canvas = document.getElementById(Id);
    this.ctx = this.canvas.getContext("2d");
    this.setDimensions();
    this.setHandlers();
    this.start();
    this.setEventListeners();
  },
  setDimensions: function() {
    this.canvas.setAttribute("width", window.innerWidth);
    this.canvas.setAttribute("height", window.innerHeight);
    this.winH = window.innerHeight;
    this.winW = window.innerWidth;
  },
  setHandlers: function() {
    window.onresize = () => this.setDimensions();
  },
  start: function() {
    this.fps = 60;

    this.reset();

    this.interval = setInterval(() => {
      this.clear();
      this.player.gravity();
      this.drawAll();
    }, 1000 / this.fps);
  },
  reset: function() {
    this.player = new Player(this.ctx, this.winW, this.winH, this.keys);
    this.background = new Background(this.winW, this.winH, this.ctx);
    this.obstacle = new Obstacle(this.ctx, this.winW, this.winH);
  },
  drawAll: function() {
    this.background.draw();
    this.obstacle.draw();
    this.player.draw();
  },
  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  setEventListeners: function() {
    document.onkeydown = e => {
      if (e.keyCode === 37) this.player.moveLeft();
      if (e.keyCode === 39) this.player.moveRight();
      if (e.keyCode === 38) this.player.jump();
    };
  },
  colission: function() {
    // Si(x1 > x2 + w2) ==> No hay colisión
    // Si(x1 + w1 < x2) ==> No hay colisión
    // Si(y1 > y2 + h2) ==> No hay colisión
    // Si(y1 + h1 < y2) ==> No hay colisión
    // En otro caso ==> Hay colisión
  }
};
