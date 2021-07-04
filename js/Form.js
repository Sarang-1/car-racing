class Form {

  constructor() {
 this.input = document.getElementById("name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton("RESET");
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.style.display = "none";
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.reset.position(width-100,20);
    this.input.style.display = "inline-block";

    //this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    
    this.button.mousePressed(()=>{
      player.name = this.input.value;
      
      if(player.name.length >= 0){
      this.input.style.display = "none";
      this.button.hide();
      playerCount+=1;
      player.updateCount(playerCount);
      player.index = playerCount;
      player.update();
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      } else {
    this.input.style.border = "2px solid red";
  }
    });
  

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      player.zero();
      Player.updateCarsAtEnd(0);
    });

  }
}
