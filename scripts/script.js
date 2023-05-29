const pcWin = "You Lose !";
const humanWin = "You Won !";
const tie = "Its a Tie !";
let loseCounter = 0;
let winCounter = 0;
let displyWin = document.querySelector(".winCounter")
let displyLose = document.querySelector(".loseCounter")
let rock = "rock"
let paper = "paper"
let scissors = "scissors"
let allScore = [displyLose , displyWin ]
let Judgment = document.querySelector(".judgment")
let gameState = document.querySelector(".gameState")
let playAgin = document.querySelectorAll(".playAgin")
let caseLoseModal = document.querySelector(".theModalCaseLose")
let caseWinModal = document.querySelector(".theModalCaseWin")
let blurBackground = document.querySelector(".blurBackground")


//round end 
function roundEnd(){ 
 
   loseCounter = 0, winCounter = 0 , tieCounter = 0
  allScore.forEach( score => score.innerText = 0)
 
}

// win function
function getWin(){
  if (winCounter === 4){
    roundEnd()
    showTheModalWin()
  }else{  gameState.innerHTML = humanWin 
    winCounter+= 1 
    displyWin.innerText = winCounter
    }
 


}

// lose function
function getLose(){
  if (loseCounter === 4){
    roundEnd()
    showTheModalLose()
  }else{ gameState.innerHTML = pcWin 
    loseCounter+= 1 
    displyLose.innerText = loseCounter}
 
}

// tie function
function getTie() {

 {  gameState.innerHTML = tie 
 }
}

//play round take the two arguments and decides the winner 
function playRound (player) 
{  // here i got the pc choice 
  pcChocies = ["rock" , "paper" , "scissors" ]
 let pcnum = Math.floor(Math.random() * pcChocies.length) 
 let pc = pcChocies[pcnum]
 Judgment.innerText = `You picked ${player} Darklord picked ${pc}`
//tie condition
if ( player === pc ) {getTie()}
//lose condition
else if  (player === "rock" && pc === "paper") {getLose()}
else if  (player === "paper" && pc === "scissors") {getLose()}
else if  (player === "scissors" && pc === "rock") {getLose()}
//win condition
else if  (pc === "rock" && player === "paper") {getWin() }
else if  (pc === "paper" && player === "scissors") {getWin()}
else if  (pc === "scissors" && player === "rock") {getWin()}
} 

playAgin.forEach(button => button.addEventListener("click" ,e=>{
  blurBackground.style.display = "none"
  caseWinModal.style.display = "none"
  caseLoseModal.style.display = "none"


 }))

function showTheModalWin()
{
  caseWinModal.style.display = "block"
  blurBackground.style.display = "block"
}
function showTheModalLose()
{
  caseLoseModal.style.display = "block"
  blurBackground.style.display = "block"
}

