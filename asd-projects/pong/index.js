/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEYS = {
    down: 40,
    up: 38,
    w: 87,
    s: 83,
    d: 68,
  }
  const boardWidth = $("#board").width();
  const boardHeight = $("#board").height();
  // Game Item Objects

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleEvent);
  $(document).on('keyup', handleUpEvent);                          // change 'eventType' to the type of event you want to handle


  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function getObj(id) {
    var obj = {};
    obj.id = id;
    obj.x = parseFloat($(id).css("top"));
    obj.y = parseFloat($(id).css("left"));
    obj.width = $(id).width();
    obj.height = $(id).height();
    obj.speedX = 0;
    obj.speedY = 0;
    return obj;
  }

  //VARIABLE DECLARATIONS
  var $paddleOne = getObj("#paddle1");
  var $paddleTwo = getObj("#paddle2");
  var $ball = getObj("#ball");



  startBall($ball);

  /* 
  On each "tick" of the timer, a  frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    moveObj($paddleOne);
    moveObj($paddleTwo);
    moveObj($ball);
    wallCollision($paddleOne);
    walleCollision($paddleTwo);
    // walleCollision($ball);
  }

  /* 
  Called in response to events.
  */


  function handleEvent(event) {
    if (event.which === KEYS.d) {
      $paddleTwo.speedX += -5
      console.log("UP PRESSED.")
    }

    else if (event.which === KEYS.down) {
      $paddleTwo.speedX += 5
      console.log("DOWN PRESSED.")
    }

    else if (event.which === KEYS.w) {
      $paddleOne.speedX += -5
      console.log("W PRESSED.")
    }

    else if (event.which === KEYS.s) {
      $paddleOne.speedX += 5
      console.log("S PRESSED.");
    }
  }

  function handleUpEvent(event) {
    if (event.which === KEYS.d) {
      $paddleTwo.speedX = 0
      console.log("UP RELEASED.")
    }

    else if (event.which === KEYS.down) {
      $paddleTwo.speedX = 0
      console.log("DOWN RELEASED.")
    }

    else if (event.which === KEYS.w) {
      $paddleOne.speedX = 0
      console.log("W RELEASED.")
    }

    else if (event.which === KEYS.s) {
      $paddleOne.speedX = 0
      console.log("S RELEASED.");
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function wallCollision(walle) {
    if (walle.x <= 0) {
      walle.x = 1
      console.log("PADDLE 1 UPPER REVERSED.")
    }
    else if (walle.x + walle.height >= boardHeight) {
      walle.x = boardHeight - walle.height
      console.log("PADDLE 1 BOTTOM REVERSED.")
    }
  }

  function walleCollision(walle) {
    if (walle.x < -500) {
      walle.x = -500
      console.log("PADDLE 2 UPPER REVERSED.")
    }
    else if (walle.x >= -330) {
      walle.x = -331
      console.log("PADDLE 2 BOTTOM REVERSED.")
    }

  }

  function startBall(blass) {
    randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
    blass.speedX += randomNum;
    blass.speedY += randomNum;
  }
}

function moveObj(obj) {
  obj.x += obj.speedX;
  obj.y += obj.speedY;
  $(obj.id).css("top", obj.x);
  $(obj.id).css("left", obj.y);
}

function endGame() {
  // stop the interval timer
  clearInterval(interval);

  // turn off event handlers
  $(document).off();
}
