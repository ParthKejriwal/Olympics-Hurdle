class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
   
    runner1 = createSprite(100,200);
    runner2 = createSprite(300,200);
    runner3 = createSprite(500,200);
    runner4 = createSprite(700,200);
   /* runner1.addImage("runner1", runnerImg1);
    runner2.addImage("runner2", runnerImg1);
    runner3.addImage("runner3", runnerImg1);
    runner4.addImage("runner4", runnerImg1);*/
    runners = [runner1, runner2, runner3, runner4];
  }

  play(){
   /* form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      //background(groundImg);
     // image(trackImg, 0,-displayHeight*4,displayWidth, displayHeight*5);
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 180;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x =  displayHeight - allPlayers[plr].distance;
        //use data form the database to display the cars in y direction
        y =y+200;
        runners[index-1].x = x;
        runners[index-1].y = y;

        if (index === player.index){
          runners[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = runners[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if (player.distance>3850) {
      game.update(2);

  }
  drawSprites();*/
  }
  end(){
      console.log("Game Over");
  }
}

