(function(window, opspark, gamey) {
  // todo still trying to find a way to find out game state using
  //    "if((game.getStateName()) != 'lobby'){
  //      console.log(game.getStateName())
  //    }"

  const
    map = {
      // used to hold view/mediator factories for the concrete game //
      factories: {
        lobby: {
          mediator: opspark.playa.lobbyMediator,
          view: opspark.playa.lobby,
        },
        initializing: {
          mediator: opspark.playa.initializingMediator,
          view: opspark.playa.initializing,
        },
        playing: {
          mediator: opspark.playa.playingMediator,
          view: opspark.playa.playing,
        },
        paused: {
          mediator: opspark.playa.pausedMediator,
          view: opspark.playa.paused,
        },
        settings: {
          mediator: opspark.playa.settingsMediator,
          view: opspark.playa.settings,
        },
        end: {
          mediator: opspark.playa.endMediator,
          view: opspark.playa.end,
        }
      },
      // used by gamey to hold references to instances of mediators //
      mediators: {
      },
    },
    game = gamey.make(map);
    
  game.lobby();

  const fps = opspark.draw.fps('#000');
  game.hud.addChild(fps);
  game.addUpdateable(fps);
        

  function getState(){ 
    if((game.getStateName()) != 'lobby'){
        console.log(game.getStateName())
    }
  }
  setInterval(getState,1000)



}(window, window.opspark, window.opspark.gamey));
