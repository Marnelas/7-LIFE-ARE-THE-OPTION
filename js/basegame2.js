let basegame2 = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  index:undefined,
sound: undefined,
counterpos:0,
  counterSong: 0,
  booleanoHard: false,
  winH: undefined,
  counter:0,
  winW: undefined,
  init: function(Id) {
    this.canvas = document.getElementById(Id);
    this.ctx = this.canvas.getContext("2d");
    this.setDimensions();
    this.setHandlers();
    this.start();
    this.setEventListeners();
    this.colission();
  },
  setDimensions: function() {
    this.canvas.setAttribute("width", window.innerWidth);
    this.canvas.setAttribute("height", window.innerHeight);
    this.winH = window.innerHeight;
    this.winW = window.innerWidth; 
    this.reset();

  },
  setHandlers: function() {
    window.onresize = () => this.setDimensions();
  },
  start: function() {
    this.fps = 60;

    this.reset();

    this.interval = setInterval(() => {
      this.framesCounter++
      this.clear();
      if (this.player.contador == 15) this.gameOver();
      this.player.gravity();
      this.drawAll();
      this.colission();
    }, 1000 / this.fps);
  },
  reset: function() {
    this.player = new player(this.ctx, this.winW, this.winH, this.keys);
    this.background = new Background(this.winW, this.winH, this.ctx);
    this.obstacles = [];
    this.traps = [];
    this.createObstacle(new Obstacle(this.ctx, this.winW, this.winH, 200, 550));
    this.createObstacle(new Obstacle(this.ctx, this.winW, this.winH, 300, 200));
    this.createObstacle(new Obstacle(this.ctx, this.winW, this.winH, 500, 350));
    this.createObstacle(new Obstacle(this.ctx, this.winW, this.winH, 700, 150));
     this.createObstacle(new Obstacle(this.ctx, this.winW, this.winH, 800, 150));
 
     this.createObstacle(new Obstacle(this.ctx, this.winW, this.winH, 1200, 350));

    
 
 
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 100, 20))    
     this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 300, 350))  
     this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 300, 450))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 300, 550))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 300, 650))
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 400, 650))        
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 500, 450))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 500, 550))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 500, 650))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 500, 50))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 600, 450))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 600, 550))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 600, 650))
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 700, 250))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 700, 350))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 700, 450))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 700, 550))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 700, 650)) 
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 800, 250))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 800, 350))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 800, 450))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 800, 550))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 800, 650))   
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 900, 350))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 900, 450))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 900, 550))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 900, 650))
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 1000, 450))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 1000, 550))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 1000, 650))
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 1100, 450))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 1100, 550))    
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 1100, 650))    
    
    
 
   

    

  


    



    this.framesCounter = 0;
  },
  ezmode: function(){
    if(this.booleanoHard){
    this.booleanoHard = false;
    this.ctx.clearRect(1100, 250, 100, 100,);
    this.traps.pop();

    }
  },
  hardMode: function(){
  if (this.counterpos == 0){
    this.createTrap(new Obstacle(this.ctx, this.winW, this.winH, 1100, 250));
  this.booleanoHard = true;
this.counterpos++
  }
  },
  
  createTrap: function(trap){
    this.traps.push(trap);

  },
  createObstacle: function(obs) {
    this.obstacles.push(obs);
  },
  drawAll: function() {
    this.background.draw();
    this.obstacles.forEach(obstacle => {
      obstacle.draw();
    });
    this.traps.forEach(trap => {
      trap.draw()
    });
    this.player.draw(this.framesCounter);
  },
  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  setEventListeners: function() {
    document.onkeydown = e => {

      if (e.keyCode === 37) this.player.moveLeft();
      if (e.keyCode === 39) this.player.moveRight();
      if (e.keyCode === 32) this.player.jump();
      if (e.keyCode===40) this.ezmode();
    };
  },
  stop: function() {
    clearInterval(this.interval);
  },
  gameOver: function() {
    this.gameOverSound()
    this.stop();
    let lose = document.getElementById("loseScreen")

    lose.classList.remove("bloqueo")
    let canvas = document.getElementById("nivel")
    canvas.className = "bloqueo"
  },
  colission: function() {
    let index = this.obstacles.findIndex(obstacle => {
      return (
           this.player.x <= obstacle.posX + obstacle.width - 25 &&
           this.player.x + this.player.w - 50 >= obstacle.posX &&
          this.player.y <= obstacle.posY - 30 &&  
        this.player.y + this.player.h >= obstacle.posY
      );
    });
    if (index != -1) {
      if(index == 4)this.hardMode()
      if (index == 0 && this.counterSong == 0) {


        this.background.Sound()
        this.counterSong++
      }

      this.winCondition(index);
      this.colissionAction(index);
    } else {
      this.player.floor = false;
    }
    let condition = this.traps.some(trap => {
      return (
        this.player.x <= trap.posX + trap.width - 25 &&
        this.player.x + this.player.w - 50 >= trap.posX &&
        this.player.y <= trap.posY + trap.height - 15 &&
        this.player.y + this.player.h >= trap.posY
      );
    });
    if(condition)this.goBack()
  
  },
  colissionAction: function(i) {
    

    
    this.player.positionF = this.obstacles[i].posY - this.player.h;
    this.player.floor = true;
    if (i == 4 && this.counter==0) {
    this.endComming()
    this.counter++
  
    }
    
  },
  goBack: function() {
 
  this.colissionSound()
    this.player.x = this.winW * 0.08
    this.player.y = this.player.y0;
  },
  colissionSound: function(){
    this.player.contador = 0
    this.sound = new Audio();
    this.sound.src = "songs/desvanecido.wav"
    this.sound.play()
  },
  gameOverSound:function(){
    this.sound = new Audio();
    this.sound.src = "songs/explotido.wav"
    this.sound.play()
  },
  endComming:function(){
    this.sound = new Audio();
    this.sound.src = "songs/Llegando-fin.wav"
    this.sound.play()

  },

  winCondition: function(index) {
    if (index == 5) {
      this.stop();
      this.winPlay()
      let win = document.getElementById("winScreen")
      win.classList.remove("bloqueo")
      let canvas = document.getElementById("nivel")
      canvas.className = "bloqueo"


      
    
    }
  },
   winPlay: function () {
    this.winSound = new Audio()
    this.winSound.src = "songs/winSong.mp3"
    this.winSound.play()
  }
};
