let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let winnerText = document.querySelector("#winner");
let winDesc = document.querySelector("#winDesc");
let userchoice = document.querySelector("#userChoice");
let messageBox = document.querySelector("#mbox");
let computerChoice = document.querySelector("#computerChoice");
let newbtn = document.querySelector("#new");
let ar = ["rock", "paper", "scissor"];
let newgame = ()=>{
    userchoice.innerText="User Choice:";
    computerChoice.innerText = "Computer Choice:";
    messageBox.style.display="none";
}
let computer = () => {
   let idx = Math.floor(Math.random() * 3);
   return ar[idx];
}

let computeWinner = (comp, user) => {
    if ((comp+ 1) % 3 === user) {
        return true; // user is the winner
     }
}

let showWinner = (userWin, userOption, computerOption) => {
   if (userWin) {
      winnerText.innerText = "Congrats! You win the game";
      winDesc.innerText = ar[userOption] + " Win Over " + ar[computerOption];
      
   } else {
      if(userOption!=computerOption){
        winnerText.innerText = "Sorry! You lost the game";
        winDesc.innerText = ar[userOption] + " Lose Over " + ar[computerOption];
      }else{
        winnerText.innerText = "Game Draw!.....";
        winDesc.innerText = "";
      }
   }
   messageBox.style.display="block";
}

let playGame = (userOption) => {
   let computerOption = computer();
   let userWin = computeWinner(ar.indexOf(computerOption), userOption);
   userchoice.innerText = "User Choice: " + ar[userOption];
   computerChoice.innerText = "Computer Choice: " + computerOption;
   showWinner(userWin, userOption, ar.indexOf(computerOption));
}

rock.addEventListener("click", () => playGame(0));
paper.addEventListener("click", () => playGame(1));
scissor.addEventListener("click", () => playGame(2));
newbtn.addEventListener("click",newgame);