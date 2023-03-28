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
  function wallCollision() {
    if (ball.x >= board_width) {
      ball.speedX = -ball.speedX
    }
    if (ball.y >= board_height) {
      ball.speedY = -ball.speedY
    }
    if (ball.x >= board_width) {
      ball.speedX = -ball.speedX
    }
    if (ball.x >= board_width) {
      ball.speedX = -ball.speedX
    }
  }

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('eventType', handleEvent);                           // change 'eventType' to the type of event you want to handle
  startBall();

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function getBall(ball, speedX, speedY, id) {
    var ballObj = {};
    ballObj.x = parseFloat($(ball).css("left"));
    ballObj.y = parseFloat($(ball).css("top"));
    ballObj.width = $(id).width();
    ballObj.height = $(id).height();
    ballObj.speedX = speedX;
    ballObj.speedY = speedY;
    ballObj.id = $("#ball").css(id);
    return ballObj;
  }

  $(document).on('keydown', handleEvent);
  $(document).on('keyup', handleEvent2);

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    // box.x += box.speedX;              // update the position of the box along the x-axis
    // $(box.id).css("left", box.x);  // draw the box in the new location, positionX pixels away from the "left"

  }

  /* 
  Called in response to events.
  */


  function handleEvent(event) {
    if (event.which === KEYS.up) {
      console.log("UP PRESSED.")
    }

    else if (event.which === KEYS.down) {
      console.log("DOWN PRESSED.")
    };
  }

  function handleEvent2(event) {
    if (event.which === KEYS.w) {
      console.log("W PRESSED.")
    }

    else if (event.which === KEYS.s) {
      console.log("S PRESSED.");
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function startBall() {
    randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
    ball.x = 100;
    ball.y = 100;
    ball.speedX = randomNum;
    ball.speedY = randomNum;
  }
}
function moveObject(movement) {
  movement.x += movement.speedX;
  movement.y += movement.speedY;
  movement.id = $(movement).css(id);
  $("movement.id").css("left", movement.x);
  $("movement.id").css("top", movement.y);
}

function endGame() {
  // stop the interval timer
  clearInterval(interval);

  // turn off event handlers
  $(document).off();
}
