(function (window, createjs, opspark, _) {
  // Variable declarations for libraries and the game engine
  const draw = opspark.draw, // library for drawing using createJS
    physikz = opspark.racket.physikz, // library for defining physics properties like velocity
    engine = opspark.V6().activateResize(), // game engine for actively rendering + running the game's mechanics
    canvas = engine.getCanvas(), // object for referencing the height / width of the window
    stage = engine.getStage(); // object to hold all visual components

  // load some sounds for the demo - play sounds using: createjs.Sound.play("wall");
  createjs.Sound.on("fileload", handleLoadComplete);
  createjs.Sound.alternateExtensions = ["mp3"];
  createjs.Sound.registerSounds(
    [
      { src: "hit.ogg", id: "hit" },
      { src: "wall.ogg", id: "wall" },
    ],
    "assets/sounds/"
  );

  function handleLoadComplete(event) {
    console.log("sounds loaded");
  }

  engine
    .addTickHandlers(update) // establish the update function as the callback for every timer tick
    .activateTick();

  // Variable declarations for the paddles and the ball which are drawn using createJS (see bower_components/opspark-draw/draw.js)
  const paddlePlayer = createPaddle(),
    paddleCPU = createPaddle({ x: canvas.width - 20, y: canvas.height - 100 }),
    ball = draw.circle(20, "#CCC");

  // set initial properties for the paddles
  paddlePlayer.yVelocity = 0;
  paddleCPU.yVelocity = 3;

  // set initial properties for the ball
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.xVelocity = 7;
  ball.yVelocity = -5;

  var playerText = draw.textfield(
    "Score: 0",
    "bold 36px Arial",
    "purple",
    "center",
    "middle",
    canvas.width / 2,
    canvas.height / 4
  );
  console.log(playerText);
  // add the paddles and the ball to the view
  stage.addChild(paddlePlayer, paddleCPU, ball, playerText);

  document.addEventListener("keyup", onKeyUp);
  document.addEventListener("keydown", onKeyDown);

  // when an Arrow key is pressed down, set the paddle in motion
  function onKeyDown(event) {
    if (event.key === "ArrowUp") {
      paddlePlayer.yVelocity = -5;
    } else if (event.key === "ArrowDown") {
      paddlePlayer.yVelocity = 5;
    }
  }

  // when either the Arrow Up or Arrow Down key are released, stop the paddle from moving
  function onKeyUp(event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      paddlePlayer.yVelocity = 0;
    }
  }

  var sc = 0;

  function update(event) {
    const boundsCPU = paddleCPU.getBounds(),
      widthCPU = boundsCPU.width,
      heightCPU = boundsCPU.height,
      midCPU = heightCPU / 2,
      boundsPlayer = paddlePlayer.getBounds(),
      widthPlayer = paddlePlayer.width,
      heightPlayer = paddlePlayer.height;

    // Ball movement: the xVelocity and yVelocity is the distance the ball moves per update
    ball.x = ball.x + ball.xVelocity;
    ball.y = ball.y + ball.yVelocity;

    // Player movement //
    paddlePlayer.y += paddlePlayer.yVelocity;
    if (paddlePlayer.y < 0) {
      paddlePlayer.y = 0;
    }
    if (paddlePlayer.y > canvas.height - paddlePlayer.height) {
      paddlePlayer.y = canvas.height - heightPlayer;
    }

    // AI movement: CPU follows ball //
    if (paddleCPU.y + midCPU < ball.y - 14) {
      paddleCPU.y += paddleCPU.yVelocity;
    } else if (paddleCPU.y + midCPU > ball.y + 14) {
      paddleCPU.y -= paddleCPU.yVelocity;
    }
    // DO NOT CHANGE OR ELSE CPU PADDLE WIL BREAK

    //vars
    ball.left = ball.x - ball.radius;
    ball.right = ball.x + ball.radius;
    ball.up = ball.y - ball.radius;
    ball.down = ball.y + ball.radius;

    paddlePlayer.left = paddlePlayer.x;
    paddlePlayer.right = paddlePlayer.x + paddlePlayer.width;
    paddlePlayer.up = paddlePlayer.y;
    paddlePlayer.down = paddlePlayer.y + paddlePlayer.height;

    paddleCPU.left = paddleCPU.x;
    paddleCPU.right = paddleCPU.x + boundsCPU.width;
    paddleCPU.up = paddleCPU.y;
    paddleCPU.down = paddleCPU.y + boundsCPU.height;

    // TODO 1: bounce the ball off the top
    if (ball.y < 0) {
      createjs.Sound.play("wall");
      ball.yVelocity = -ball.yVelocity;
    }

    // TODO 2: bounce the ball off the bottom
    if (ball.y > canvas.height) {
      createjs.Sound.play("wall");

      ball.yVelocity = -ball.yVelocity;
    }

    // TODO 3: bounce the ball off each of the paddles
    if (
      (ball.left < paddlePlayer.right &&
        ball.y > paddlePlayer.up &&
        ball.y < paddlePlayer.down) ||
      (ball.right > paddleCPU.left &&
        ball.y > paddleCPU.up &&
        ball.y < paddleCPU.down)
    ) {
      createjs.Sound.play("hit");
      ball.xVelocity = -ball.xVelocity;
    }

    if (ball.left < 0) {
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
      sc = sc - 1;
      playerText.text = `Score: ${sc}`;
    }

    if (ball.right > canvas.width) {
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
      sc = sc + 1;
      playerText.text = `Score: ${sc}`;
    }
  }

  // helper function that wraps the draw.rect function for easy paddle making
  function createPaddle({
    width = 20,
    height = 100,
    x = 0,
    y = 0,
    color = "#CCC",
  } = {}) {
    const paddle = draw.rect(width, height, color);
    paddle.x = x;
    paddle.y = y;
    return paddle;
  }
})(window, window.createjs, window.opspark, window._);
