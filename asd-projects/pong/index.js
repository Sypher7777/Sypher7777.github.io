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
  }
  const board_width = $("#board").width();
  const board_height = $("#board").height();
  // Game Item Objects

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleEvent);
  $(document).on('keyup', handleUpEvent);                          // change 'eventType' to the type of event you want to handle
  startBall();

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

  var $paddleOne = getObj("#paddle1");
  var $paddleTwo = getObj("#paddle2");
  var $ball = getObj("#ball");



  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    moveObj($paddleOne);
    moveObj($paddleTwo);
  }

  /* 
  Called in response to events.
  */


  function handleEvent(event) {
    if (event.which === KEYS.up) {
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
    if (event.which === KEYS.up) {
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
  function wallCollision() {
    if ($ball.x >= board_width) {
      $ball.speedX = -ball.speedX
    }
    else if ($ball.y >= board_height) {
      $ball.speedY = -ball.speedY
    }
    else if ($ball.x >= board_width) {
      $ball.speedX = -ball.speedX
    }
    else if ($ball.x >= board_width) {
      $ball.speedX = -ball.speedX
    }
  }

  function startBall() {
    // startingPos = $("#ball").css("left": , "top": );
    // startingSpeed = ;
    randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
    $ball.x = 100;
    $ball.y = 100;
    $ball.speedX = randomNum;
    $ball.speedY = randomNum;
  }
}

function moveObj(obj) {
  obj.x += obj.speedX;
  console.log(obj.id);
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
