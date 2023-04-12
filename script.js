const pcWin = "Computer wins";
const humanWin = "Human wins";
const tie = "Its a Tie !";
let roundcounter =["One" , "Two" , "Three" , "four" , "Five"]


let loseCounter = 0;
let winCouneter = 0;
let tieCounter = 0;


const getComputerChoice = () => {
  let pc; 
  switch(Math.floor(Math.random() * 3) + 1)
{
  case 1:
    pc = "Rock";
    break;
  case 2:
    pc = "Papper";
    break;
  case 3:
    pc = "Scissors";
    break;

};
return pc;
}



const playRound = (player , pc) => 
{
 


  player = player. toLowerCase();
  pc = pc. toLowerCase();
 console.log(`You picked ${player}`)
 console.log(`Your Computer picked ${pc}`)

if ( player === pc ) {console.log(tie), tieCounter++}
else if  (player === "rock" && pc === "papper") {console.log(pcWin) , loseCounter++ }
else if  (player === "papper" && pc === "scissors") {console.log(pcWin) , loseCounter++}
else if  (player === "scissors" && pc === "rock") {console.log(pcWin) , loseCounter++ }

else if  (pc === "rock" && player === "papper") {console.log(humanWin) , winCouneter++ }
else if  (pc === "papper" && player === "scissors") {console.log(humanWin) , winCouneter++}
else if  (pc === "scissors" && player === "rock") {console.log(humanWin) , winCouneter++ }


else (console.log("man wtff ?"))}


//here i made aloop thats call my playround function 5 times declare how is the winner !
const game = () =>
{

  for (let i = 0; i < 5; i++) {
  let pc = getComputerChoice();
  let player = prompt();
  playRound(player , pc);
  console.log(`round ${roundcounter[i]}`)

    }  
 if (loseCounter > winCouneter && tieCounter){console.log("pc win killyourself")}
 else if ( winCouneter > loseCounter && tieCounter){console.log("human wins")}
 else if (tieCounter > loseCounter && winCouneter ){console.log(" TIE! ")}
 console.log(`tie = ${tieCounter} ,,,, win = ${winCouneter} ,,,, lose = ${loseCounter}`)

}



game() 
