//DOM variables
const gridCont = document.querySelector(".grid");
const scoreBoard = document.getElementById("score");
const highScoreBoard = document.getElementById("highScore");

//variables
const width = 28;
const layout = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  3,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  3,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  1,
  1,
  2,
  2,
  1,
  1,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  4,
  4,
  4,
  4,
  4,
  4,
  0,
  0,
  0,
  4,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  4,
  0,
  0,
  0,
  4,
  4,
  4,
  4,
  4,
  4,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  3,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  3,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
];
let squares = [];
let pacmanClasses = [
  "pacman",
  "pacman-right",
  "pacman-left",
  "pacman-up",
  "pacman-down",
];
let otherLayoutClasses = ["pacdots", "powerpills"];
let score = 0;
let highScore = [localStorage.getItem("highscore")];
highScoreBoard.textContent = highScore[0];
let pacmanTimerid = 750;

//initializing grids
function createLayout() {
  for (let i = 0; i < Math.pow(width, 2); i++) {
    const square = document.createElement("div");
    square.classList.add("squares");
    gridCont.appendChild(square);
    squares.push(square);
    if (layout[i] === 0) {
      square.classList.add("pacdots");
    } else if (layout[i] === 1) {
      square.classList.add("walls");
    } else if (layout[i] === 2) {
      square.classList.add("ghostlair");
    } else if (layout[i] === 3) {
      square.classList.add("powerpills");
    }
  }
}
createLayout();

//getting pacman and ghosts to appear
let pacmanCurrentIndex = 490;
squares[pacmanCurrentIndex].classList.add("pacman", "pacman-right");

//control pacman
function pacmanControl({ keyCode }) {
  switch (keyCode) {
    case 40: //down
      if (
        pacmanCurrentIndex < Math.pow(width, 2) &&
        !squares[pacmanCurrentIndex + width].classList.contains("walls") &&
        !squares[pacmanCurrentIndex + width].classList.contains("ghostlair")
      ) {
        squares[pacmanCurrentIndex].classList.remove(...pacmanClasses);
        pacmanCurrentIndex += width;
        squares[pacmanCurrentIndex].classList.add("pacman", "pacman-down");
      }
      break;
    case 38: //up
      if (
        pacmanCurrentIndex - width >= 0 &&
        !squares[pacmanCurrentIndex - width].classList.contains("walls") &&
        !squares[pacmanCurrentIndex - width].classList.contains("ghostlair")
      ) {
        squares[pacmanCurrentIndex].classList.remove(...pacmanClasses);
        pacmanCurrentIndex -= width;
        squares[pacmanCurrentIndex].classList.add("pacman", "pacman-up");
      }
      break;
    case 37: //left
      if (
        pacmanCurrentIndex % width !== 0 &&
        !squares[pacmanCurrentIndex - 1].classList.contains("walls") &&
        !squares[pacmanCurrentIndex - 1].classList.contains("ghostlair")
      ) {
        squares[pacmanCurrentIndex].classList.remove(...pacmanClasses);
        pacmanCurrentIndex -= 1;
        squares[pacmanCurrentIndex].classList.add("pacman", "pacman-left");
      }
      if (pacmanCurrentIndex === 364) {
        squares[pacmanCurrentIndex].classList.remove(...pacmanClasses);
        pacmanCurrentIndex = 391;
        squares[pacmanCurrentIndex].classList.add("pacman", "pacman-left");
      }
      break;
    case 39: //right
      if (
        pacmanCurrentIndex % width < width - 1 &&
        !squares[pacmanCurrentIndex + 1].classList.contains("walls") &&
        !squares[pacmanCurrentIndex + 1].classList.contains("ghostlair")
      ) {
        squares[pacmanCurrentIndex].classList.remove(...pacmanClasses);
        pacmanCurrentIndex += 1;
        squares[pacmanCurrentIndex].classList.add("pacman", "pacman-right");
      }
      if (pacmanCurrentIndex === 391) {
        squares[pacmanCurrentIndex].classList.remove(...pacmanClasses);
        pacmanCurrentIndex = 364;
        squares[pacmanCurrentIndex].classList.add("pacman", "pacman-right");
      }
      break;
  }
  squares[pacmanCurrentIndex].classList.add("pacman");
  eatPacdots();
  checkForWin();
  checkForGameOver();
  scoreBoard.textContent = score;
}

//creating ghosts
class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.timerID = NaN;
  }
}

const ghosts = [
  new Ghost("blinky", 407, 250),
  new Ghost("pinky", 404, 400),
  new Ghost("inky", 351, 300),
  new Ghost("clyde", 348, 500),
];

ghosts.forEach((ghost) => {
  squares[ghost.currentIndex].classList.add(ghost.className);
  squares[ghost.currentIndex].classList.add("ghosts");
});

//move ghosts
ghosts.forEach((ghost) => moveGhost(ghost));

//eat pacdots
function eatPacdots() {
  if (squares[pacmanCurrentIndex].classList.contains("pacdots")) {
    score += 10;
    squares[pacmanCurrentIndex].classList.remove(otherLayoutClasses[0]);
  } else if (squares[pacmanCurrentIndex].classList.contains("powerpills")) {
    score += 100;
    squares[pacmanCurrentIndex].classList.remove(otherLayoutClasses[1]);
    //scared ghosts
    ghosts.forEach((ghost) => {
      ghost.isScared = true;
    });
    setTimeout(eatPowerpills, 10000);
  }
}

//eat powerpills
function eatPowerpills() {
  ghosts.forEach((ghost) => (ghost.isScared = false));
}

function moveGhost(ghost) {
  const directions = [-1, 1, -width, width];
  let direction = directions[Math.floor(Math.random() * directions.length)];
  ghost.timerID = setInterval(() => {
    if (
      !squares[ghost.currentIndex + direction].classList.contains("ghosts") &&
      !squares[ghost.currentIndex + direction].classList.contains("walls")
    ) {
      squares[ghost.currentIndex].classList.remove(ghost.className);
      squares[ghost.currentIndex].classList.remove("ghosts", "afraidGhosts");
      ghost.currentIndex += direction;
      squares[ghost.currentIndex].classList.add(ghost.className);
      squares[ghost.currentIndex].classList.add("ghosts");
    } else {
      direction = directions[Math.floor(Math.random() * directions.length)];
    }
    //if ghosts are afraid
    if (ghost.isScared) {
      squares[ghost.currentIndex].classList.add("afraidGhosts");
    }

    //if afraid ghost gets eaten by pacman
    if (
      ghost.isScared &&
      squares[ghost.currentIndex].classList.contains("pacman")
    ) {
      squares[ghost.currentIndex].classList.remove(
        ghost.className,
        "ghosts",
        "afraidGhosts"
      );
      ghost.currentIndex = ghost.startIndex;
      score += 200;
      squares[ghost.currentIndex].classList.add(ghost.className, "ghosts");
    }
    checkForGameOver();
  }, ghost.speed);
}

//check for game over
function checkForGameOver() {
  if (
    squares[pacmanCurrentIndex].classList.contains("ghosts") &&
    !squares[pacmanCurrentIndex].classList.contains("afraidGhosts")
  ) {
    calcScore();
    scoreBoard.textContent = "You Lost!";
  }
}

//check for win
function checkForWin() {
  if (score >= 2000) {
    scoreBoard.textContent = "You Win!";
    calcScore();
  }
}

//win or gameover
function calcScore() {
  ghosts.forEach((ghost) => clearInterval(ghost.timerID));
  document.removeEventListener("keyup", pacmanControl);
  highScore.push(score);
  highScoreBoard.textContent = Math.max(...highScore);
  localStorage.setItem("highscore", JSON.stringify(Math.max(...highScore)));
}

//eventlisteners
document.addEventListener("keyup", pacmanControl);
