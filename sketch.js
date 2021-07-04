var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img,obstacles,s,f;
//var xVel,yVel;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
  s = loadSound("sound/sliding.mp3");
  f = loadImage("images/f1.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();

  obstacles = createGroup();
  xVel = 0;
  yVel= 0;

  game = new Game();
  game.getState();
  game.start();

  for(var i=0;i<5;i++){
    w=random(200,950);
    h = random(-height*4,height-300);
    f1 = createSprite(w,h);
    f1.addImage("obstacle",f);
    obstacles.add(f1);

  }
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
