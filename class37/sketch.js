var bg;
var form;
var player;
var game;
var playerCount;
var gameState;
var allPlayers, car1, car2;
var cars = [];
var backgroundImage, bgImg, car1_img, car2_img, track;

function preload(){
bg=loadImage("assets/background.png")

  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");
}

function setup(){
createCanvas(windowWidth,windowHeight);
database=firebase.database();

game= new Game()
game.start();
game.getGameState();
}
function draw(){
background(bg);

if (playerCount === 2) {
  game.updateGameState(1);
}

if (gameState === 1) {
  game.play();
}

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}