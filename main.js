// Global variables
const boardSize = 3;
const gameTime = 2 * 60;

// Utility variables
let board = [];
let finalBoard = [];
let boardIndex = null;
let finalBoardIndex = null;

let selectedSquare = null;
let legalMoves = [];

let gameWon = false;
let gameOver = false;

let level = 1;
let moveCount = 0;
let totalMoveCount = 0;
let avgMovesCount = 0;

let timeRemaining = gameTime;
let timer = null;

// Selecting boards

function getRandomIndex(excludedIndex1, excludedIndex2) {
  const availableIndexes = [];

  for (let i = 0; i < cards.length; i++) {
    if (i !== excludedIndex1 && i !== excludedIndex2) {
      availableIndexes.push(i);
    }
  }

  const randomPosition = Math.floor(Math.random() * availableIndexes.length);

  return availableIndexes[randomPosition];
}

function selectCards() {
  boardIndex = getRandomIndex();
  finalBoardIndex = getRandomIndex(boardIndex);

  board = cloneBoard(cards[boardIndex]);
  finalBoard = cloneBoard(cards[finalBoardIndex]);
}

function cloneBoard(sourceBoard) {
  return sourceBoard.map((row) => [...row]);
}

function selectNextBoard() {
  const nextFinalBoardIndex = getRandomIndex(boardIndex, finalBoardIndex);

  boardIndex = finalBoardIndex;
  finalBoardIndex = nextFinalBoardIndex;
  finalBoard = cloneBoard(cards[finalBoardIndex]);

  printBoard(finalBoard, "final-board", false);
}

// Game functions

function isInsideBoard(row, column) {
  return row >= 0 && row < boardSize && column >= 0 && column < boardSize;
}

function isEmptySquare(piece) {
  return piece === null;
}

function positionsAreEqual(firstPosition, secondPosition) {
  if (!firstPosition || !secondPosition) {
    return firstPosition === secondPosition;
  }

  return (
    firstPosition.row === secondPosition.row &&
    firstPosition.column === secondPosition.column
  );
}

function getLegalMoves(currentBoard, fromRow, fromColumn) {
  const currentPiece = currentBoard[fromRow][fromColumn];
  const moves = [];

  if (currentPiece.sliding) {
    currentPiece.directions.forEach((direction) => {
      let targetRow = fromRow + direction[0];
      let targetColumn = fromColumn + direction[1];

      while (
        isInsideBoard(targetRow, targetColumn) &&
        isEmptySquare(currentBoard[targetRow][targetColumn])
      ) {
        moves.push({ row: targetRow, column: targetColumn });

        targetRow += direction[0];
        targetColumn += direction[1];
      }
    });

    return moves;
  }

  if (!currentPiece.sliding) {
    currentPiece.directions.forEach((direction) => {
      const targetRow = fromRow + direction[0];
      const targetColumn = fromColumn + direction[1];

      if (
        isInsideBoard(targetRow, targetColumn) &&
        isEmptySquare(currentBoard[targetRow][targetColumn])
      ) {
        moves.push({ row: targetRow, column: targetColumn });
      }
    });

    return moves;
  }
}

function piecesAreEqual(firstPiece, secondPiece) {
  if (isEmptySquare(firstPiece) && isEmptySquare(secondPiece)) {
    return true;
  }

  if (isEmptySquare(firstPiece) || isEmptySquare(secondPiece)) {
    return false;
  }

  return firstPiece.name === secondPiece.name;
}

function isPieceInPosition(row, column, piece) {
  return (
    !isEmptySquare(piece) && piecesAreEqual(piece, finalBoard[row][column])
  );
}

function boardsAreEqual(currentBoard, targetBoard) {
  let boardsAreEqual = true;

  currentBoard.forEach((row, rowIndex) => {
    row.forEach((piece, columnIndex) => {
      if (!piecesAreEqual(piece, targetBoard[rowIndex][columnIndex])) {
        boardsAreEqual = false;
      }
    });
  });

  return boardsAreEqual;
}

function getAvgMoves() {
  avgMovesCount = totalMoveCount / level;

  return avgMovesCount;
}

// Display pieces, board and movements

function printPiece(square, piece) {
  if (isEmptySquare(piece)) {
    return;
  }

  square.innerHTML = piece.svg;
}

function printBoard(board, boardId, isInteractive) {
  const boardElement = document.querySelector(`#${boardId}`);

  boardElement.innerHTML = "";

  board.forEach((row, rowIndex) => {
    row.forEach((piece, columnIndex) => {
      const square = document.createElement("li");

      square.dataset.row = rowIndex;
      square.dataset.column = columnIndex;
      square.classList.add("square");

      if (isPieceInPosition(rowIndex, columnIndex, piece)) {
        square.classList.add("correct-position");
      }

      printPiece(square, piece);

      if (isInteractive) {
        square.addEventListener("click", handleSquareClick);
      }

      boardElement.append(square);
    });
  });
}

function updateBoardHighlights() {
  const squares = document.querySelectorAll("#board li");

  squares.forEach((square) => {
    const squarePosition = {
      row: Number(square.dataset.row),
      column: Number(square.dataset.column),
    };

    square.classList.remove("selected");
    square.classList.remove("legal-move");

    if (positionsAreEqual(squarePosition, selectedSquare)) {
      square.classList.add("selected");
    }

    if (legalMoves.some((move) => positionsAreEqual(move, squarePosition))) {
      square.classList.add("legal-move");
    }
  });
}

// Select and move

function selectPiece(row, column) {
  selectedSquare = { row, column };
  legalMoves = getLegalMoves(board, row, column);

  updateBoardHighlights();

  if (legalMoves.length === 0) {
    updateStatus("Cannot move");
    return;
  }

  updateStatus("Move to...");
}

function clearSelection() {
  selectedSquare = null;
  legalMoves = [];
  updateBoardHighlights();
}

function movePiece(fromRow, fromColumn, toRow, toColumn) {
  board[toRow][toColumn] = board[fromRow][fromColumn];
  board[fromRow][fromColumn] = null;
}

// Updating the front-end

function updateStatus(message) {
  const statusElement = document.querySelector("#game-status");

  statusElement.textContent = message;
}

function updateMoveCount() {
  moveCount++;
  totalMoveCount++;

  const moveCountElement = document.querySelector("#move-count");
  moveCountElement.textContent = moveCount;
}

function updateAvgMoves() {
  const avgMovesElement = document.querySelector("#avg-moves-count");
  avgMovesElement.textContent = avgMovesCount.toFixed(1);
}

// Timer functions

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const secondsText = String(remainingSeconds).padStart(2, "0");

  return `${minutes}:${secondsText}`;
}

function updateTimer() {
  const timerElement = document.querySelector("#timer");
  timerElement.textContent = formatTime(timeRemaining);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function startTimer() {
  // protection to do not start a new interval in each movement
  if (timer !== null) {
    return;
  }

  timer = setInterval(() => {
    timeRemaining -= 1;
    updateTimer();

    if (timeRemaining <= 0) {
      timeRemaining = 0;
      updateTimer();
      endGameByTime();
    }
  }, 1000);
}

// End game functions

function checkWin() {
  if (boardsAreEqual(board, finalBoard)) {
    gameWon = true;
    stopTimer();
    getAvgMoves();
    updateAvgMoves();
    updateStatus("You won!");
    document.querySelector("#next-level").classList.remove("hidden");
    document
      .querySelector("#next-level")
      .addEventListener("click", startNextLevel);
    return;
  }

  updateStatus("Select a piece");
}

function resetLevelState() {
  gameWon = false;
  gameOver = false;
  moveCount = 0;

  stopTimer();
  clearSelection();
  updateTimer();
  document.querySelector("#move-count").textContent = moveCount;
}

function startNextLevel() {
  selectNextBoard();
  level += 1;
  resetLevelState();

  document.querySelector("#level").textContent = level;
  document.querySelector("#next-level").classList.add("hidden");
  updateStatus();
  renderBoard();
  updateStatus("Move to start");
}

function endGameByTime() {
  gameOver = true;
  clearSelection();
  stopTimer();
  updateStatus("Time is over!");
}

// Main actions

function handleSquareClick(clickEvent) {
  if (gameWon || gameOver) {
    return;
    // to-do: quitar cursor: pointer
  }

  const clickedRow = Number(clickEvent.currentTarget.dataset.row);
  const clickedColumn = Number(clickEvent.currentTarget.dataset.column);
  const clickedSquare = { row: clickedRow, column: clickedColumn };
  const clickedPiece = board[clickedRow][clickedColumn];

  if (positionsAreEqual(selectedSquare, clickedSquare)) {
    clearSelection();

    if (moveCount === 0) {
      updateStatus("Move to start");
      return;
    }

    updateStatus("Select a piece");
    return;
  }

  if (!isEmptySquare(clickedPiece)) {
    selectPiece(clickedRow, clickedColumn);
    return;
  }

  if (legalMoves.some((move) => positionsAreEqual(move, clickedSquare))) {
    movePiece(
      selectedSquare.row,
      selectedSquare.column,
      clickedRow,
      clickedColumn,
    );
    updateMoveCount();
    startTimer();
    clearSelection();
    renderBoard();
    checkWin();
    return;
  }

  clearSelection();
}

function renderBoard() {
  printBoard(board, "board", true);
  updateBoardHighlights();
}

// Game timeline
selectCards();
printBoard(finalBoard, "final-board", false);
renderBoard();
updateTimer();
