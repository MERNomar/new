const pcWin = "Computer wins";
const humanWin = "Human wins";
const tie = "Its a Tie !";
let roundcounter =["One" , "Two" , "Three" , "four" , "Five"]
let loseCounter = 0;
let winCouneter = 0;
let tieCounter = 0;
let displyWin = document.querySelector(".winCounter")
let displyLose = document.querySelector(".loseCounter")
let displytie = document.querySelector(".tieCounter")
let rock = "rock"
let paper = "paper"
let scissors = "scissors"
let btns = document.querySelectorAll("[data-button]")

function getWin(){
  console.log(humanWin) 
   winCouneter+= 1 
   displyWin.innerText = `wins = ${winCouneter}`

}
function getLose(){
  console.log(pcWin) 
  loseCounter+= 1 
  displyLose.innerText = `loses = ${loseCounter}`
}
function getTie() {
  console.log(tie)
   tieCounter+= 1 
   displytie.innerText = `ties = ${tieCounter}`

}






function playRound (player) 
{  // here i got the pc choice 
  pcChocies = ["rock" , "paper" , "scissors" ]
 let pcnum = Math.floor(Math.random() * pcChocies.length) 
 let pc = pcChocies[pcnum]
 console.log(`You picked ${player}`)
 console.log(`Your Computer picked ${pc}`)
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


else (console.log("man wtff ?"))} 










