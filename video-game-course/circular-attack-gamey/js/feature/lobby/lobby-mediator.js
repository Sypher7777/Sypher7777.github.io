(function(opspark, _) {
  // create a namespace for the lobbyMediator //
  _.set(opspark, 'playa.lobbyMediator', 
  /**
   * Creates and returns the lobby mediator.
   */
  function(view, game, data) {
    const
      asset = view.asset,
      menu = view.menu;
    
    function onPlayClicked() {
      menu.btnPlay.off('click', onPlayClicked);
      // call init() when the menu-close Tween ends //
      menu.close().call(game.play);
    }

    function onQuitClicked() {
      menu.btnQuit.off('click', onQuitClicked)
      menu.close().call(game.lobby)
    }

    function onColorClicked() {
      console.log("changed")
      // var color = '#4286f4'
      let temp = Math.random()
      let color = '';
      let color2 = ''
      if((temp > 0) && (temp < 0.2)){
        color = '#0000FF'
        color2 = '#FF0000'
      }
      if((temp > 0.2) && (temp < 0.4)){
        color = '#FF0000'
        color2 = '#0000FF'
      }
      if((temp > 0.4) && (temp < 0.6)){
        color = '#000000'
        color2 = '#FFFFFF'
      }
      if((temp > 0.6) && (temp < 0.8)){
        color = '#FFFFFF'
        color2 = '#000000'
      }
      if((temp > 0.8) && (temp < 0.819999999)){
        color = '#800080'
      }
      if((temp > 0.819999999) && (temp < 1)){
        color = '#FFFF00'
        color2 = '#FFFF00'
      }
      window.color = color
      window.color2 = color2
      return color
      return color2
    }
    
    /*
     * Return the mediator API: Each mediator must expose its view,
     * a liquify() method used for repositioning components on screen 
     * resize, a destroy() method used to clean up any references, and 
     * methods enter(), exit(), which must return a Promise that 
     * resolves when the enter or exit sequence is complete.
     */
    return {
      view,
      liquify() {
        return view.liquify();
      },
      enter() {
        return new Promise(function(resolve, reject) {
          // see: https://createjs.com/docs/easeljs/classes/Stage.html#method_enableMouseOver 
          game.stage.enableMouseOver(20);
          game.view.addChild(asset);
          menu.open();
          view.open();
          menu.btnPlay.on('click', onPlayClicked)
          menu.btnQuit.on('click', onQuitClicked);
          menu.btnColor.on('click', onColorClicked)

          resolve();
        });
      },
      exit() {
        return new Promise(function(resolve, reject) {
          view.close()
          resolve();
        });
      },
      destroy() {
        game.view.removeChild(asset);
      }
    };
  });
}(window.opspark, window._));
