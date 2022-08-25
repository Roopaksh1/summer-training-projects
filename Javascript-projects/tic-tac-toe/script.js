// MODEL
const board = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
];
const PLAYER1 = "X";
const PLAYER2 = "O";
let draw = false;

const setPlayerSelection = (indexOne, indexTwo, player) => {
  if (player % 2 === 1) {
    board[indexOne][indexTwo] = PLAYER1;
  } else board[indexOne][indexTwo] = PLAYER2;
};

const setComputerSelection = () => {
  let done = false;
  while (!done) {
    const indexOne = Math.floor(Math.random() * 3);
    const indexTwo = Math.floor(Math.random() * 3);
    if (isGridEmpty(indexOne, indexTwo)) {
      board[indexOne][indexTwo] = PLAYER2;
      done = true;
      return [indexOne, indexTwo];
    }
  }
}

const setBoardEmpty = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board[i][j] = "-";
    }
  }
}

const isBoardFull = () => {
  return !board.some((d) => d.some((f) => f === "-"));
};

const isGridEmpty = (indexOne, indexTwo) => {
  if (board[indexOne][indexTwo] === "-") return true;
};

const gameOver = () => {
  if (
    (board[0][0] === board[0][1] &&
      board[0][0] === board[0][2] &&
      board[0][0] != "-") ||
    (board[1][0] === board[1][1] &&
      board[1][0] === board[1][2] &&
      board[1][0] != "-") ||
    (board[2][0] === board[2][1] &&
      board[2][0] === board[2][2] &&
      board[2][0] != "-")
  ) {
    return true;
  } else if (
    (board[0][0] === board[1][0] &&
      board[0][0] === board[2][0] &&
      board[0][0] != "-") ||
    (board[0][1] === board[1][1] &&
      board[0][1] === board[2][1] &&
      board[0][1] != "-") ||
    (board[0][2] === board[1][2] &&
      board[0][2] === board[2][2] &&
      board[0][2] != "-")
  ) {
    return true;
  } else if (
    (board[0][0] === board[1][1] &&
      board[0][0] === board[2][2] &&
      board[0][0] != "-") ||
    (board[0][2] === board[1][1] &&
      board[0][2] === board[2][0] &&
      board[0][2] != "-")
  ) {
    return true;
  } else if (isBoardFull()) {
    draw = true;
    return true;
  } else return false;
};

const checkWinner = (mode, turn) => {
  if (draw) {
    return showResult(0, "Draw");
  }
  if (mode === "two-players")
    turn % 2 === 0 ? showResult(2, "Win") : showResult(1, "Win");
  else 
    turn % 2 === 0 ? showResult(0, "Win") : showResult(1, "Win");
};

// CONTROLLER
let turn = 1;
let mode = "";
let prevMode = "";

const bindEvents = () => {
  // Menu Screen Buttons
  const buttons = document.querySelectorAll(".menu-screen button");
  buttons.forEach((button) => button.addEventListener("click", handleEvent));
  // Grids
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => grid.addEventListener("click", playGame));
  //Restart Button
  document.querySelector(".play-again").addEventListener("click", restart);
};

const restart = () => {
  if (prevMode) {
    mode = prevMode;
  }
  draw = false;
  document.querySelector(".play-again").classList.add("hidden");
  const showTurn = document.querySelector(".show-turn");
  showTurn.classList.remove("hidden");
  showTurn.textContent = "";
  document.querySelector(".result-screen").textContent = "";
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => grid.textContent = "");
  addGridEvents();
  setBoardEmpty();
  turn = 1;
}

const addGridEvents = () => {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => grid.addEventListener("click", playGame));
}

const removeGridEvents = () => {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => grid.removeEventListener("click", playGame));
}

window.addEventListener("load", bindEvents);

const showGameScreen = () => {
  document.querySelector(".menu-screen").classList.add("hidden");
  document.querySelector(".game-screen").classList.remove("hidden");
};

const handleEvent = (e) => {
  showGameScreen();
  mode = e.target.className;
};

const displaySelection = (e, index) => {
  if (mode === "computer"){
    if ((turn % 2 === 0)) {
      const gridIndex = getGridIndex(index);
      return document.querySelector(`div[data-index="${gridIndex}"]`).innerHTML = '<i class="fa-solid fa-o fa-2xl"></i>';
    } else
      return e.target.innerHTML = '<i class="fa-solid fa-x fa-2xl"></i>';
  }
  if (turn % 2 === 0) {
    e.target.innerHTML = '<i class="fa-solid fa-o fa-2xl"></i>';
  } else e.target.innerHTML = '<i class="fa-solid fa-x fa-2xl"></i>';
};

const displayTurn = () => {
  const screen = document.querySelector(".show-turn");
  if (turn % 2 === 0) {
    screen.textContent = "Player 2 turn";
  } else {
    screen.textContent = "Player 1 turn";
  }
};

const showResult = (player, result) => {
  if (result === "Win") {
    // player 0 for Computer
    if (player) {
      document.querySelector(
        ".result-screen"
      ).textContent = `Player ${player} Wins`;
    } else {
      document.querySelector(".result-screen").textContent = `Computer Wins`;
    }
  } else {
    document.querySelector(".result-screen").textContent = `DRAW`;
  }
};

const getBoardIndex = (e) => {
  switch (e.target.getAttribute("data-index")) {
    case "zero-zero":
      return [0, 0];
    case "zero-one":
      return [0, 1];
    case "zero-two":
      return [0, 2];
    case "one-zero":
      return [1, 0];
    case "one-one":
      return [1, 1];
    case "one-two":
      return [1, 2];
    case "two-zero":
      return [2, 0];
    case "two-one":
      return [2, 1];
    case "two-two":
      return [2, 2];
  }
};

const getGridIndex = (index) => {
  let gridClass = "";
  switch (index[0]) {
    case 0: 
      gridClass = "zero";
      break;
    case 1: 
      gridClass = "one";
      break;
    case 2: 
      gridClass = "two";
  }
  switch (index[1]) {
    case 0: 
      gridClass += "-zero";
      break;
    case 1: 
      gridClass += "-one";
      break;
    case 2: 
      gridClass += "-two";
  }
  return gridClass;
};

const playGame = (e) => {
  if (isGridEmpty(...getBoardIndex(e))) {
    setPlayerSelection(...getBoardIndex(e), turn);
    displaySelection(e);
    if (gameOver()) {
      checkWinner(mode, turn);
      document.querySelector(".show-turn").classList.add("hidden");
      removeGridEvents();
      document.querySelector(".play-again").classList.remove("hidden");
      prevMode = mode;
      mode = "";
    }
    if (mode === "computer") {
      turn = turn + 1;
      displaySelection(0, setComputerSelection());
      if (gameOver()) {
        checkWinner(mode, turn);
        document.querySelector(".show-turn").classList.add("hidden");
        removeGridEvents();
        document.querySelector(".play-again").classList.remove("hidden");
      }
    }
    turn = turn + 1;
    displayTurn();
  }
};
