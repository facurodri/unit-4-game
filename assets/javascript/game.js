// game variables
var computerRandom = Math.floor((Math.random() * 101) +19);
var wins = 0;
var loses = 0;
var mathShow = 0;
var ruby = 0;
var gem = 0; 
var diamond = 0;
var pearl = 0;

//generates random number for gems in a function
function gemFoo (){
    ruby = Math.floor((Math.random() * 12) +1);
    gem = Math.floor((Math.random() * 12) +1);
    diamond = Math.floor((Math.random() * 12) +1);
    pearl = Math.floor((Math.random() * 12) +1);

}
//calls the gem generators
gemFoo();
//calls my game operators
gamePlay();
//writes the text for each id tag
  $("#compRandom1").text(computerRandom);
  $("#ruby").text(ruby);
  $("#gem").text(gem);
  $("#diamond").text(diamond);
  $("#pearl").text(pearl);

//game operator
  function gamePlay() {
  $("#ruby").on("click", function (){
      console.log(ruby);
      mathAdd(ruby);
      checkPoints();
  })
  $("#gem").on("click", function (){
    console.log(gem);
    mathAdd(gem);
    checkPoints();
  })
  $("#diamond").on("click", function (){
    console.log(diamond);
    mathAdd(diamond);
    checkPoints();
  })
  $("#pearl").on("click", function (){
    console.log(pearl);
    mathAdd(pearl);
    checkPoints();
  })
}
//checks the points Wins/Loses
function checkPoints() {
    if (mathShow === computerRandom) {
      wins ++;
      $("#result").text(mathShow);
      $("#resultText").text("Congratulations You win!");
      $("#wins").text(wins);
      resetGame();
    } else if (mathShow > computerRandom) {
      loses ++;
      $("#result").text(mathShow);
      $("#resultText").text("Congratulations You Lose!");
      $("#loses").text(loses);
      resetGame();
  }
}
//adds the gem points
function mathAdd (stone){
      mathShow = mathShow + stone;
      console.log(mathShow);
      $("#mathMachine").text(mathShow);
  }
//resets game back
function resetGame(){
    computerRandom = Math.floor((Math.random() * 101) +19);
    gemFoo();
    mathShow = 0;
    setTimeout(function(){ $("#compRandom1").text(computerRandom);}, 3000)
    setTimeout(function(){ $("#resultText").text("");}, 3000)
    setTimeout(function(){ $("#result").text(mathShow);}, 3000)
    setTimeout(function(){ $("#mathMachine").text(mathShow);}, 3000)
}


