let userscore=0;
let compscore=0;
 const choices= document.querySelectorAll(".choice");
 const gencomputerchoice= ()=>{
    const options = ["rock","paper","Scissors"];
    const randidx= math.floor(math.random()*3);
    return options[randIdx];
 };
 const drawGame = () => {
    console.log("game was draw");
 };
 const showWinner = (userWin) => {
    if(userWin){
        console.log ("you win!");
        Msg.innertext = "you win."

    } else{
        console.log("you lose");
        Msg.innertext = "you lose."
    }
 };

const playGame= (userChoice)={
    console.log("user choice = ",userchoice);

    const compChoice = genComputerChoice();
    console.log("comp choice = ",compChoice);

    if(userchoice == compuChoice) {
        drawGame();
    } else {
        let userwin = true;
        if(userChoice ==="rock") {
            //scissors, paper
            userwin= compChoice=== "paper" ? false: true;
        }
        else if(userChoice === "paper"){
            //rock,scissors
            userwin=compchoice==="scissors" ?false : true;
        }else{

        }

    }

};

 choices.foreach((choice)=> {
    choice.addeventlistener("click",() => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });

});