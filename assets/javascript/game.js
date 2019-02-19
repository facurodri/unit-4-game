// wireframe -

// list the functions that i will need- based on the requirements 
// generate function to create random number, check random  
// function assigned to event handler
// function to compare random number and gems numbers

// html frame
var computerRandom = Math.floor((Math.random() * 101) +19);
var wins = 0;
var loses = 0;
var stoneMath = 0;
var mathShow =0;

var ruby=0;
var gem=0; 
var diamond=0;
var pearl=0;

function gemFoo (){
    ruby = Math.floor((Math.random() * 12) +1);
    gem = Math.floor((Math.random() * 12) +1);
    diamond = Math.floor((Math.random() * 12) +1);
    pearl = Math.floor((Math.random() * 12) +1);

}
gemFoo();
gamePlay();

  $("#compRandom1").text(computerRandom);
  $("#ruby").text(ruby);
  $("#gem").text(gem);
  $("#diamond").text(diamond);
  $("#pearl").text(pearl);

  
  

  function gamePlay() {

  $("#ruby").on("click", function (){
      console.log(ruby);
      mathAdd(ruby);
      checkScore();
  })
  $("#gem").on("click", function (){
    console.log(gem);
    mathAdd(gem);
    checkScore();
  })
  $("#diamond").on("click", function (){
    console.log(diamond);
    mathAdd(diamond);
    checkScore();
  })
  $("#pearl").on("click", function (){
    console.log(pearl);
    mathAdd(pearl);
    checkScore();
  })
}
function checkScore() {
    if (mathShow === computerRandom) {
      wins ++;
      console.log("Congratulations You win!");
      $("#wins").text(wins);
      resetGame();
    } else if (mathShow > computerRandom) {
      loses ++;
      console.log("Congratulations You SUCK!");
      $("#loses").text(loses);
      resetGame();
  }
}

function mathAdd (stone){
      mathShow = mathShow + stone;
      console.log(mathShow);
      $("#mathMachine").text(mathShow);
  }

function resetGame(){
    computerRandom = Math.floor((Math.random() * 101) +19);
    setTimeout(function(){ $("#compRandom1").text(computerRandom);}, 3000)
    gemFoo();
    mathShow = 0;
}


