class Player {
  constructor() {
    this.name=null;
    this.index=null;
    this.positionX=0;
    this.positionY=0;
  }

  addPlayer(){
    var addplayer = "players/player"+this.index;

    if(this.index===1){
      this.positionX=width/2-100;
    }
    else{
      this.positionX=width/2+100;
    }

    database.ref(addplayer).set({
      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY
    })
  }

  getPlayerCount(){
    //.ref = locate the things in the database and read them
    var gameStateRef = database.ref("playerCount");
    //.on = listener , keeps on listing to the database
    gameStateRef.on("value", function(data) {
      //.val()= refers the value present inside the given .ref()
      playerCount = data.val();
  })
  }

  updatePlayerCount(count){
    database.ref("/").update({
      playerCount: count
    });
  }

  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }
}
