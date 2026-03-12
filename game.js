let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreNum=document.querySelector("#user-score");
const compScoreNum=document.querySelector("#comp-score");
const resetBtn=document.querySelector("button");

const genCompChoice=() => {
    const options=["stone","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
};

const drawGame=() => {
    msg.innerText="Game Was Draw😐";
    msg.style.backgroundColor="#1B263B";
};

const showWinner=(userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        msg.innerText=`Yaa!! You Win👍,Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScoreNum.innerText=userScore;
    }
    else{
        compScore++;
        msg.innerText=`You Lose😒Better Luck Next Time,${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScoreNum.innerText=compScore;
    }
};

const playGame=(userChoice) => {
    //Generate Computer Choice
    const compChoice=genCompChoice();
    //Draw Game
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="stone"){
            //paper,scissors
            userWin = compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //stone,scissors
            userWin = compChoice==="stone"?true:false;
        }
        else{
            //stone,paper
            userWin = compChoice==="stone"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {                            // the argument choice not have to be same as class name                                            
        choice.addEventListener("click",()=>{            //So i can use "choic" instead of "choice" 
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

resetBtn.addEventListener("click",() => {
    userScore=0;
    compScore=0;
    userScoreNum.innerText=userScore;
    compScoreNum.innerText=compScore;
    msg.innerText="Play Your Move";
    msg.style.backgroundColor="#1B263B";
});
