const game = () => {

  let pScore = 0; //player Score
  let cScore = 0; //computer Score

  //button fot start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.remove("fadeOut");
    });
  };

  //code for game
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img")

    hands.forEach(hand => {
        hand.addEventListener('animationend', function() {
            this.style.animation = "";
        })
    })

    const computerOptions = ["rock", "paper", "scissors"];

    //what is going if click options
    options.forEach((options) => {
      options.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoise = computerOptions[computerNumber];

        setTimeout(() => {
            //compare
        compareHands(this.textContent, computerChoise);

        //update image
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoise}.png`;
        }, 2000);

        //animation
        playerHand.style.animation = "shakePlayer 2s ease"
        computerHand.style.animation = "shakeComputer 2s ease"
      });
    });
  };

  //code for updating score
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  //code for compare / who wins?
  const compareHands = (playerChoise, computerChoise) => {
    const winner = document.querySelector(".winner");

    //tie cheking
    if (playerChoise === computerChoise) {
      winner.textContent = "It is a tie";
      return;
    }
    //rock cheking
    if (playerChoise === "rock") {
      if (computerChoise === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //paper cheking
    if (playerChoise === "paper") {
      if (computerChoise === "rock") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //scissors cheking
    if (playerChoise === "scissors") {
      if (computerChoise === "paper") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  //start the game / calling functions
  startGame();
  playMatch();
};

game();
