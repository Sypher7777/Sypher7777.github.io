(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.collectable = window.opspark.collectable || {};
  let collectable = window.opspark.collectable;

  let type = {
    db: { assetKey: "db", points: 10 },
    max: { assetKey: "max", points: 20 },
    steve: { assetKey: "steve", points: 30 },
    grace: { assetKey: "grace", points: 40 },
    kennedi: { assetKey: "kennedi", points: 50 },
  };

  window.opspark.collectable.type = type;

  /**
   * init: Initialize all collectables.
   *
   * GOAL: Add as many collectables as necessary to make your level challenging.
   *
   * Use the createCollectable() Function to create collectables for the level.
   * See the type Object, above, for the types of collectables and their point values.
   *
   * createCollectable() takes these arguments:
   *
   *      createCollectable(type, x, y, gravity, bounce);
   *
   *      type: The type of the collectable, use the type Object above.
   *      x: The x coordineate for the collectable.
   *      y: The y coordineate for the collectable.
   *      gravity: OPTIONAL The gravitational pull on the collectable.
   *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
   */
  function init(game) {
    let createCollectable = collectable.create;
    createCollectable(type.kennedi,780,20,12,0.7 )
    createCollectable(type.max,780,500,120,0.7 )
    createCollectable(type.steve,70,229,12,0.7 )
    createCollectable(type.grace,420,300,12,1.2)
    createCollectable(type.kennedi,781,20,12,1 )
    createCollectable(type.kennedi,782,20,12,1 )
    createCollectable(type.kennedi,783,20,12,1 )
    createCollectable(type.kennedi,784,20,12,1 )
    createCollectable(type.kennedi,785,20,12,1 )
    createCollectable(type.kennedi,786,20,12,1 )
    createCollectable(type.kennedi,787,20,12,1 )
    createCollectable(type.kennedi,788,20,12,1 )
    createCollectable(type.kennedi,789,20,12,1 )
    createCollectable(type.kennedi,790,20,12,1 )
    createCollectable(type.kennedi,791,20,12,1 )
    createCollectable(type.kennedi,792,20,12,1 )
    createCollectable(type.kennedi,793,20,12,1 )


    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    // example:
    // createCollectable(type.steve, 200, 170, 6, 0.7);

    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  collectable.init = init;
})(window);
