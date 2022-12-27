/** GAME RULES **/

$(function () {
    var colors = $('#colors li');
    var mainColor = $('#main');
    var start = $('#start');
    var gameState = 'waiting';
    var gameSequence = new Array();
    var level = 1;
    var t;
    var flashNo;
    var clickedNo;
    var setupLightSequence = function () {
        var randomNum = Math.floor(Math.random() * 4);
        gameSequence[level - 1] = randomNum;
        showLightSequence();
    };
    var lightOn = function (no) {
        colors.eq(gameSequence[no]).addClass('on');
    };
    var lightOff = function () {
        colors.removeClass('on');
    };

    //Added code to cause squares to slide right then left when 'Start' is clicked
    $('#start').click(function () {
        $('li').animate({
            left: '+=50px'
        }, 800, function () {
            $('li').animate({
                left: '0px'
            }, 800);
        });
    });
    //End inserted code section

    var showLightSequence = function () {
        lightOff();

        if (flashNo < level) {
            var on = setTimeout(function () {
                var off = setTimeout(function () {
                    showLightSequence();
                    flashNo++;
                }, 500);
                lightOn(flashNo);
            }, 500);
        }
        else {
            gameState = 'playing';
            $('body').addClass('playing');
            start.text('Your turn...');
            clearTimeout(on);
        }
    };
    colors.click(function () {
        if (gameState == 'playing') {
            var selectedSquare = $(this).index();
            var selectedColor = $(this).css('background-color');

            if (gameSequence[clickedNo] == selectedSquare) {
                if (clickedNo == level - 1) {
                    gameState = 'waiting';
                    $('body').removeClass('playing');
                    start.text('WELL DONE. Go to the next level >');
                    level++;
                }
                
                /*
                //Non ideal way... and doesn't really work
                lightOn(clickedNo);
                $(this).fadeOut()
                var off = setTimeout(function () {
                    lightOff();
                    $(this).fadeIn();
                    clickedNo++;
                }, 200);
                */

                lightOn(clickedNo);
                $(this).fadeOut(1000, function () { //Added code to cause clicked square to fade out...
                    lightOff();
                    $(this).fadeIn();               //...then fade back in
                    clickedNo++;
                });
            }
            else {
                gameState = 'waiting';
                $('body').removeClass('playing');
                start.text('GAME OVER. Try again?');
                $('body').removeClass('playing').addClass('game-over');
                gameSequence = new Array();

                level = 1
            }
        }
    });
    var init = function () {
        $('#level').text('Level ' + level);
        flashNo = 0;
        clickedNo = 0;
        $(this).text('Simon says...');
        $('body').removeClass('game-over');
        setupLightSequence();
    }
    start.click(init);
});