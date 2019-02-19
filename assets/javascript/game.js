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

var ruby = Math.floor((Math.random() * 12) +1);
var gem = Math.floor((Math.random() * 12) +1);
var diamond = Math.floor((Math.random() * 12) +1);
var pearl = Math.floor((Math.random() * 12) +1);

  $("#compRandom1").text(computerRandom);
  $("#ruby").text(ruby);
  $("#gem").text(gem);
  $("#diamond").text(diamond);
  $("#pearl").text(pearl);

  $("#wins").text(wins);
  $("#loses").text(loses);

  $("#ruby").on("click", function (){
      console.log(ruby);
      mathAdd(ruby);
  })
  $("#gem").on("click", function (){
    console.log(gem);
    mathAdd(gem);
  })
  $("#diamond").on("click", function (){
    console.log(diamond);
    mathAdd(diamond);
  })
  $("#pearl").on("click", function (){
    console.log(pearl);
    mathAdd(pearl);
  })


    if (mathShow === computerRandom) {
      wins ++;
      console.log("Congratulations You win!");
      resetGame();
    } 
    if (mathShow > computerRandom) {
      loses ++;
      console.log("Congratulations You SUCK!");
      resetGame();
  }


function mathAdd (stone){
      mathShow = mathShow + stone;
      console.log(mathShow);
      $("#mathMachine").text(mathShow);
  }

function resetGame(){
    computerRandom;
}


