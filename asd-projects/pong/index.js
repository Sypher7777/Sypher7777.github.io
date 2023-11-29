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

  var score1 = 0;
  var score2 = 0;
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

  // console.log($ball.y)
  // console.log($paddleTwo.y)
  // console.log($paddleOne.y)


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
    whaleCollision($ball);
    doCollide($ball, $paddleOne);
    doCollide($ball, $paddleTwo);

    // console.log($ball.y)
    // console.log($paddleTwo.y)
    // console.log($paddleOne.y)

    if (score1 || score2 === 4) {
      endGame()
    }
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
  
  
  
  
  
  
  function doCollide(obj1, obj2) {
    if (obj1.y === obj2.y) {
      obj1.speedY = -obj1.speedY;
      return true;
    }
    else {
      return false
    }
  }

  


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

  function whaleCollision(whale) {
    if (whale.y <= 3) {
      whale.speedY = -whale.speedY
      console.log("BALL LEFT REVERSED.")
      score2 += 1
      $("#score2").text(score2)
      startBall($ball)
    }

    else if (whale.y >= 1850) {
      whale.speedY = -whale.speedY
      console.log("BALL RIGHT REVERSED.")
      score1 += 1
      $("#score1").text(score1)
      startBall($ball)
    }

    if (whale.x <= -1000) {
      whale.speedX = -whale.speedX
      console.log("BALL UPPER REVERSED.")

    }

    else if (whale.x >= -380) {
      whale.speedX = -whale.speedX
      console.log("BALL BOTTOM REVERSED.")
    }
  }


  function startBall(blass) {
    blass.x = -500;
    blass.y = 950;
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
