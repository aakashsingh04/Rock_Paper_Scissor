let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userChoicePara = document.querySelector("#user-score");
const compChoicePara = document.querySelector("#comp-score");

const gencompChoice = () => {
    let option = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);  //FLOOR function converts decimal no. to whole number AND random function print no. betn 0-1 so we multiply by 3 so that it will print no. betn 0-2
    return option[randIdx];
}

const drawGame = () => {
    // console.log("Game was draw");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userChoicePara.innerText = userScore;
        // console.log("You Win");
        msg.innerText = "Your Win! ";
        msg.style.backgroundColor = "Green";
    }
    else {
        compScore++;
        compChoicePara.innerText = compScore;
        // console.log("You lose");
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red"
    }
};

const playGame = (userChoice) => {
    console.log("user choice is", userChoice);
    const compChoice = gencompChoice();
    console.log("computer choice is", compChoice);
    
    if(userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "scissor" ? true:false ;
        }
        else if (userChoice === "paper") {
            //rock, scissor
            userWin = compChoice === "rock" ? true:false ;
        }
        else {
            //paper, rock
            userWin = compChoice === "paper" ? true:false; 
        }
        showWinner(userWin,userChoice.compChoice);
    }
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
});