const board = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];

const moves = [];
const colLength = board[0].length;
// Start at A (0,0) -> [row][col]

let row = 0;
let col = 0;
moves.push(board[row][col]); // A

// Define movement functions
function moveRight() {
  if (col < board[row].length - 1) {
    col++;
    moves.push(board[row][col]);
  } else {
    console.log(`Out of bound at ${board[row][col]}`);
  }
}

function moveLeft() {
  if (col > 0) {
    col--;
    moves.push(board[row][col]);
  } else {
    console.log(`Out of bound at ${board[row][col]}`);
  }
}

function moveUp() {
  if (row > 0) {
    row--;
    moves.push(board[row][col]);
  } else {
    console.log(`Out of bound at ${board[row][col]}`);
  }
}

function moveDown() {
  if (row < colLength - 1)
  {
    row++;
    moves.push(board[row][col]);
  } else {
    console.log(`Out of bound at ${board[row][col]}`);
  }
}

// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E


console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);
