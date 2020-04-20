var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var runners, runner1, runner2, runner3, runner4;

var  runnerImg1, runnerImg1, runnerImg1, runnerImg1;

var groundImg,trackImg;

function preload(){
  runnerImg1=loadImage("images/man3.jpg");
  runnerImg1=loadImage("images/man3.jpg");
  runnerImg1=loadImage("images/man3.jpg");
  runnerImg1=loadImage("images/man3.jpg");
  groundImg=loadImage("images/ground.png");
  trackImg=loadImage("images/track.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState===2) {
    game.end();
  }
}
