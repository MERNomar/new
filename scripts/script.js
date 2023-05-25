const pcWin = "you lose";
const humanWin = "you won";
const tie = "Its a Tie !";
let loseCounter = 0;
let winCounter = 0;
let tieCounter = 0;
let displyWin = document.querySelector(".winCounter")
let displyLose = document.querySelector(".loseCounter")
let displytie = document.querySelector(".tieCounter")
let rock = "rock"
let paper = "paper"
let scissors = "scissors"
let allScore = [displyLose , displyWin , displytie]
let Judgment = document.querySelector(".judgment")


//round end 
function roundEnd(){ 
 
   loseCounter = 0, winCounter = 0 , tieCounter = 0
  allScore.forEach( score => score.innerText = 0)
 
}

// win function
function getWin(){
  if (winCounter === 5){
    alert("you won")
    roundEnd()
  }else{ console.log(humanWin) 
    winCounter+= 1 
    displyWin.innerText = winCounter
    }
 


}

// lose function
function getLose(){
  if (loseCounter === 5){
    alert("you lost")
    roundEnd()
  }else{ console.log(pcWin) 
    loseCounter+= 1 
    displyLose.innerText = loseCounter}
 
}

// tie function
function getTie() {

 { console.log(tie)
    tieCounter+= 1 
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




