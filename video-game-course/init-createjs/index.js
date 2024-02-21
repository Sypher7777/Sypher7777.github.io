
/*
 * TODO 4: Create a modularized index.js, 
 * pass in window and createjs
 */
(function(window, createjs) {
  // TODO 5: Initialize CreateJS //
  const canvas = document.getElementById("canvas")
  const stage = new createjs.Stage(canvas)
  // TODO 6: Set the framerate of the Ticker
  createjs.Ticker.framerate = 60


  /*
   * TODO 7:CREATE AND CONFIGURE ANY DISPLAY 
   * OBJECTS AND ADD THEM TO THE DISPLAY LIST HERE
   */
  
  // INIT CREATEJS //
const radius = 25
const margin = 125
  
const circleContainer = new createjs.Container()
    
  // CREATE A BACKGROUND //
const background = new createjs.Shape()
background.graphics.beginFill("purple").drawRect(0,0,canvas.width,canvas.height)
    
  // CREATE A CIRCLE //
const circle1 = new createjs.Shape()
const circle2 = new createjs.Shape()
const rect1 = new createjs.Shape()

circle1.graphics.beginFill("orange").drawCircle(0,0, radius)
circle2.graphics.beginFill("black").drawCircle(0,0, radius)
rect1.graphics.beginFill("orange").drawRect(0,0,canvas.width,canvas.height)

circle1.x = radius * 2 + margin
circle2.x = canvas.width - radius * 2 - margin - 300
circle1.y = circle2.y = canvas.height / 2
rect1.x = circle1.x + 30
rect1.y = circle1.y + 30
  // ADD DISPLAY OBJECTS TO STAGE //
  circleContainer.addChild(circle1,circle2,rect1)
  stage.addChild(background, circleContainer)


  // TODO 8: Listen to the 'tick' event  //
  let tickHandler = createjs.Ticker.on("tick", onTick)
  

  // TODO 9: Handle the 'tick' event //
  function onTick(event){
    update(event);
  }
  
let eyeSpeed = 1
let bounds = 20
  /*
   * TODO 10: Implement an update Function, after making 
   * changes to assets, it must call stage.update(); 
   */
  function update(event){
    stage.update()
    console.log(circleContainer.x)
    circleContainer.x += eyeSpeed
    if(circleContainer.x > bounds){
      eyeSpeed = -eyeSpeed
    }
    if(circleContainer.x < 0){
      eyeSpeed = -eyeSpeed
    }
    //update the stage after changing modifiying displayObjects
  }
  

}(window, window.createjs));
