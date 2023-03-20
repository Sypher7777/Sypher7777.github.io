/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEYS = {
    left: 37 ,
    down: 40 ,
    up: 38 ,
    right: 39 ,
  }
  var positionX = 0;
  var positionY = 0;
  var speedX = 0;
  var speedY = 0;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if(event.which === KEYS.up){
      speedY = 5;
      console.log("Up pressed.")
    }
    else if(event.which === KEYS.down){
      speedY = -5;
      console.log("Down pressed.")
    }
    else if(event.which === KEYS.right){
      speedX = 5;
      console.log("Right pressed.")
    }
    else if(event.which === KEYS.left) {
      speedX = -5;
      console.log("Left pressed.")
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repositionGameItem() {
    positionX += speedX;
    positionY += speedY;
  }
  function redrawGameItem() {
    $("#box").css("left", positionX);
    $("#box").css("top", positionY);
  }
  
}
