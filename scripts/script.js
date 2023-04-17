const pcWin = "Computer wins";
const humanWin = "Human wins";
const tie = "Its a Tie !";
let roundcounter =["One" , "Two" , "Three" , "four" , "Five"]
let buttons = document.querySelectorAll(".button");


let choice = () =>

{document.getElementById('tools').addEventListener('click', e => {
  const choice = e.target.getAttribute('choice');
  if (choice ) 
    return choice
})}



const newgame = document.querySelector(".newgame")

  
let loseCounter = 0;
let winCouneter = 0;
let tieCounter = 0;
const getComputerChoice = () => {
  let pc; 
  switch(Math.floor(Math.random() * 3) + 1)
{
  case 1:
    pc = "rock";
    break;
  case 2:
    pc = "papper";
    break;
  case 3:
    pc = "scissors";
    break;

};
return pc;
}




// here afor loop named play round takes two parameters player and pc 
// waiting 2 parametrs player and pc and its detarmnate the winner 
const playRound = (player , pc) => 
{
 
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


//function that takes rock or paper or scissors insted of prompting it 






//here i made aloop thats call my playround function 5 times declare how is the winner !
/* const game = () =>
{
  
 
  for (let i = 0; i < 5; i++) {
  let player = choice()
  let pc = getComputerChoice();
  playRound(player , pc);
  console.log(`round ${roundcounter[i]}`)
  

    }  
 if (loseCounter > winCouneter && tieCounter){console.log("pc win killyourself")}
 else if ( winCouneter > loseCounter && tieCounter){console.log("human wins")}
 else if (tieCounter > loseCounter && winCouneter ){console.log(" TIE! ")}
 console.log(`tie = ${tieCounter} ,,,, win = ${winCouneter} ,,,, lose = ${loseCounter}`)

}

game()*/
function test(nigger)
{
if (nigger === 1){ console.log("one")}
else if (nigger === 2){ console.log("two")}
else if (nigger === 3){ console.log("three")}
else {console.log("wtf")}

}
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    playerSelection = img.alt.toLowerCase();

    playRound(playerSelection, getComputerChoice());

    
  });
});