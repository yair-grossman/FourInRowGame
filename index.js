
var gameState = [];
var gameActive = true;
for (var i=0; i < 42; i++) {
  gameState.push(0);
}


$('[id^=column]').click(function(){
  if (gameActive){
    PlayerClick($(this).attr('id').replace('column', ''));
  }
});

var activePlayer = 1;

function PlayerClick(columnIndex){

  var startingPoint = parseInt(columnIndex);

  for(var i = startingPoint; i < startingPoint + 36; i += 7){

    if(gameState[i] === 0){

      if (activePlayer === 1){

        var img = $('<img>');
        img.attr('src', 'images/redCircle.png');
        img.appendTo('#' + i);
        $('.text').text('player 2 turn');
        $('.player1').css('color', 'black');
        $('.player2').css('color', 'blue');
        gameState[i] = activePlayer;
        chekForWin(activePlayer);
        activePlayer = 2;
        break;

      } else {

        var img = $('<img>');
        img.attr('src', 'images/blueCircle.png');
        img.appendTo('#' + i);
        $('.text').text('player 1 turn');
        $('.player1').css('color', 'red');
        $('.player2').css('color', 'black');
        gameState[i] = activePlayer;
        chekForWin(activePlayer);
        activePlayer = 1;
        break;
      }
    }
  }
}

function chekForWin(currentPlayer) {

  //Check for Horizontal winning
  for (var i = 0; i < 42; i++){
    if(i === 4 || i === 5 || i === 6 || i === 11 || i === 12 || i === 13 || i === 18
      || i === 19 || i === 20 || i === 25 || i === 26 || i === 27 || i === 32
      || i === 33 || i === 34 || i === 39 || i === 40 || i === 41)
    {
      continue;
    }

    if(CheckHorizontal(i))
    {
      if(currentPlayer === 1){
        tablePlayerRedWinColors();
        var audio = new Audio("sounds/redWin.mp3");
        audio.play();
        gameActive = false;
      } else {
        tablePlayerBlueWinColors();
        var audio = new Audio("sounds/blueWin.mp3");
        audio.play();
        gameActive = false;
      }
    }
  }

  //Check for Vertical winning...

  for(var i = 0; i < 42; i++){
    if(i === 21 || i === 22 || i === 23 || i === 24 || i === 25 || i === 26 || i === 27 || i === 28
      || i === 29 || i === 30 || i === 31 || i === 32 || i === 33 || i === 34
      || i === 35 || i === 36 || i === 37 || i === 38 || i === 39 || i === 40 || i === 41)
    {
      continue;
    }

    if(CheckVertical(i)){
      if(currentPlayer === 1) {
        tablePlayerRedWinColors();
        var audio = new Audio("sounds/redWin.mp3");
        audio.play();
        gameActive = false;
      } else {
        tablePlayerBlueWinColors();
        var audio = new Audio("sounds/blueWin.mp3");
        audio.play();
        gameActive = false;
      }
    }
  }

  //Check for אלכסון שמאלה

  for(var i = 0; i < 42; i++){
    if(i === 6 || i === 13 || i === 5 || i === 12 || i === 4 || i === 11 || !i === 0 || !i === 1 || !i === 2
      || !i === 3 || !i === 7 || !i === 8 || !i === 9 || !i === 10 || !i === 14
      || !i === 15 || !i === 16 || !i === 17)
    {
      continue;
    }

    if(CheckDiagonallyToLeft(i)) {
      if(currentPlayer === 1) {
        tablePlayerRedWinColors();
        var audio = new Audio("sounds/redWin.mp3");
        audio.play();
        gameActive = false;
      } else {
        tablePlayerBlueWinColors();
        var audio = new Audio("sounds/blueWin.mp3");
        audio.play();
        gameActive = false;
      }
    }
  }

  //Check for אלכסון ימינה

  for(var i = 0; i < 42; i++){
    if(i === 0 || i === 7 || i === 14 || i === 21 || i === 1 || i === 8 || i === 15 || i === 22 || i === 2
      || i === 9 || i === 16 || i === 23 || !i === 6 || !i === 5 || !i === 4
      || !i === 3 || !i === 13 || !i === 12 || !i === 11 || !i === 10
      || !i === 20 || !i === 19 || !i === 18 || !i === 17)
    {
        continue;
    }

    if(CheckDiagonallyToRight(i)) {
      if(currentPlayer === 1) {
        tablePlayerRedWinColors();
        var audio = new Audio("sounds/redWin.mp3");
        audio.play();
        gameActive = false;
      } else {
        tablePlayerBlueWinColors();
        var audio = new Audio("sounds/blueWin.mp3");
        audio.play();
        gameActive = false;
      }
    }
  }

}

function CheckHorizontal(currentPlace) {
  if(gameState[currentPlace] === activePlayer && gameState[currentPlace+1] === activePlayer
    && gameState[currentPlace+2] === activePlayer
    && gameState[currentPlace+3] === activePlayer)
  {
    winHorizontalBackColor(currentPlace);
    return true;
  } else {
    return false;
  }
}

function CheckVertical(currentPlace) {
  if(gameState[currentPlace] === activePlayer && gameState[currentPlace+7] === activePlayer
    && gameState[currentPlace+14] === activePlayer
    && gameState[currentPlace+21] === activePlayer)
  {
    winVerticalBackColor(currentPlace);
    return true;
  } else {
    return false;
  }
}

function CheckDiagonallyToLeft(currentPlace) {
  if(gameState[currentPlace] === activePlayer && gameState[currentPlace + 8] === activePlayer
    && gameState[currentPlace + 16] === activePlayer
    && gameState[currentPlace + 24] === activePlayer)
  {
    winDiagonallyToLeftBackColor(currentPlace);
    return true;
  } else {
    return false;
  }
}

function CheckDiagonallyToRight(currentPlace) {
  if(gameState[currentPlace] === activePlayer && gameState[currentPlace + 6] === activePlayer
    && gameState[currentPlace + 12] === activePlayer
    && gameState[currentPlace + 18] === activePlayer)
  {
    winDiagonallyToRightBackColor(currentPlace);
    return true;
  } else {
    return false;
  }
}

function tablePlayerRedWinColors() {
  $('.player1').css('color', 'black');
  $('.player2').css('color', 'black');
  $('.text').text('RED WIN!!!!!!');
  $('.text').css('color', 'red');
}

function tablePlayerBlueWinColors() {
  $('.player1').css('color', 'black');
  $('.player2').css('color', 'black');
  $('.text').text('BLUE WIN!!!!!!');
  $('.text').css('color', 'blue');
}

function winHorizontalBackColor(currentPlace) {

  var winningIndex2 = currentPlace + 1;
  var winningIndex3 = currentPlace + 2;
  var winningIndex4 = currentPlace + 3;
  $("#" + currentPlace).css('background-color', 'purple');
  $("#" + winningIndex2).css('background-color', 'purple');
  $("#" + winningIndex3).css('background-color', 'purple');
  $("#" + winningIndex4).css('background-color', 'purple');

}

function winVerticalBackColor(currentPlace) {
  var winningIndex2 = currentPlace + 7;
  var winningIndex3 = currentPlace + 14;
  var winningIndex4 = currentPlace + 21;
  $("#" + currentPlace).css('background-color', 'purple');
  $("#" + winningIndex2).css('background-color', 'purple');
  $("#" + winningIndex3).css('background-color', 'purple');
  $("#" + winningIndex4).css('background-color', 'purple');
}

function winDiagonallyToLeftBackColor(currentPlace) {
  var winningIndex2 = currentPlace + 8;
  var winningIndex3 = currentPlace + 16;
  var winningIndex4 = currentPlace + 24;
  $("#" + currentPlace).css('background-color', 'purple');
  $("#" + winningIndex2).css('background-color', 'purple');
  $("#" + winningIndex3).css('background-color', 'purple');
  $("#" + winningIndex4).css('background-color', 'purple');
}

function winDiagonallyToRightBackColor(currentPlace) {
  var winningIndex2 = currentPlace + 6;
  var winningIndex3 = currentPlace + 12;
  var winningIndex4 = currentPlace + 18;
  $("#" + currentPlace).css('background-color', 'purple');
  $("#" + winningIndex2).css('background-color', 'purple');
  $("#" + winningIndex3).css('background-color', 'purple');
  $("#" + winningIndex4).css('background-color', 'purple');
}
