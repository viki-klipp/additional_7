module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] == 0) {
        for (let number = 1; number <= 9; number++) {
          if (isAllowed(matrix, row,col,number)) {
            matrix[row][col] = number;
            if (solveSudoku(matrix)) {
              return matrix;
            } else {
              matrix[row][col] = 0;
            }
          }
        }
        return false;
      }
    }
  }

  return matrix;
};

function containsInCol (matrix, col, number) {
  for (let i = 0; i < 9; i++) {
    if (matrix[i][col] == number) {
      return true;
    }
  }

  return false;
};

function containsInRow (matrix, row, number) {
  for (let i = 0; i < 9; i++) {
    if (matrix[row][i] == number) {
      return true;
    }
  }

  return false;
};

function containsInBox (matrix, row, col, number) {
  let r = row - row % 3;
  let c = col - col % 3;

  for (let i = r; i < r + 3; i++) {
    for (let j = c; j < c + 3; j++) {
      if (matrix[i][j] == number) {
        return true;
      }
    }
  }

  return false; 
};

function isAllowed (matrix, row, col, number) {
  return !(containsInRow(matrix, row, number) || containsInCol(matrix, col, number) || containsInBox(matrix, row, col, number));
};