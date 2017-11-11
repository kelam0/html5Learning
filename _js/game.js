

var BubbleShoot = window.BubbleShoot || {};

BubbleShoot.Game = (function($){
  var Game = function(){};
<<<<<<< HEAD
    var curBubble;
=======
>>>>>>> 9fa6914ada67dff5b889661fc8d3c126aa07b5a3
    this.init = function(){
      $(".but_start_game").bind("click",startGame);
    };
    var startGame = function(){
<<<<<<< HEAD
      $(".but_start_game").unbind("click");
      BubbleShoot.ui.hideDialog();
      curBubble = getNextBubble();
    };
    var getNextBubble = function(){
    var bubble = BubbleShoot.Bubble.create();
    bubble.getSprite().addClass("cur_bubble");
    $("#board").append(bubble.getSprite());
    return bubble;
=======
>>>>>>> 9fa6914ada67dff5b889661fc8d3c126aa07b5a3
    };
  };
  return Game;
})(jQuery);
