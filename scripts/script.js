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

//event lisnter that decides if its win or lose or tie every time i playround()
let btns = document.querySelectorAll("[data-button]")
// here afor loop named play round takes two parameters player and pc 
// waiting 2 parametrs player and pc and its detarmnate the winner 
const playRound = (player) => 
{  // here i got the pc choice 
  pcChocies = ["rock" , "papper" , "scissors" ]
 let pcnum = Math.floor(Math.random() * pcChocies.length) 
 let pc = pcChocies[pcnum]


    

 console.log(`You picked ${player}`)
 console.log(`Your Computer picked ${pc}`)

if ( player === pc ) {console.log(tie), tieCounter+= 1 , displytie.innerText = `ties = ${tieCounter}` }
else if  (player === "rock" && pc === "papper") { console.log(pcWin) , loseCounter+= 1 , displyLose.innerText = `loses = ${loseCounter}` }
else if  (player === "papper" && pc === "scissors") {console.log(pcWin) , loseCounter+= 1 , displyLose.innerText = `loses = ${loseCounter}`}
else if  (player === "scissors" && pc === "rock") {console.log(pcWin) , loseCounter+= 1 , displyLose.innerText = `loses = ${loseCounter}`}

else if  (pc === "rock" && player === "papper") {console.log(humanWin) , winCouneter+= 1 , displyWin.innerText = `wins = ${winCouneter}` }
else if  (pc === "papper" && player === "scissors") {console.log(humanWin) , winCouneter+= 1 , displyWin.innerText = `wins = ${winCouneter}`  }
else if  (pc === "scissors" && player === "rock") {console.log(humanWin) , winCouneter+= 1 , displyWin.innerText = `wins = ${winCouneter}`}


else (console.log("man wtff ?"))} 




//here i made aloop thats call my playround function 5 times declare how is the winner !
 const game = (player , ) =>
{
  
 
  for (let i = 0; i < 5; i++) {

   
  
  
  let pc = getComputerChoice();
  playRound(player , pc);
  console.log(`round ${roundcounter[i]}`)
  

    }  
 if (loseCounter > winCouneter && tieCounter){console.log("pc win killyourself")}
 else if ( winCouneter > loseCounter && tieCounter){console.log("human wins")}
 else if (tieCounter > loseCounter && winCouneter ){console.log(" TIE! ")}
 console.log(`tie = ${tieCounter} ,,,, win = ${winCouneter} ,,,, lose = ${loseCounter}`)

}

const elements = document.querySelectorAll(".button")





document.addEventListener('click', function(e){
  
  if(e.target.className == "rock"){ playRound("rock") 
}else if (e.target.className == "paper"){playRound("papper") 
}else if (e.target.className == "scissors") {playRound("scissors")
}


})



// btns.forEach(buttons =>(buttons.addEventListener("click" , e=> {
//   winCouneter+=1
//   displyWin.innerText = `wins = ${winCouneter}`
//   displyLose.innerText = `loses = ${loseCounter}`
//   displytie.innerText = `ties = ${tieCounter}`
  
 
  

// })))

