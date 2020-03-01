// for this case we can set constants in real components or render functions we need to use props
// or input or api call etc to render our grid
export const NUMBER_OF_ROWS = 50
export const NUMBER_OF_COLUMNS = 50

// creating 2 dimensional array, in JS we don't have functions for it so we need a trick
export const createGridArray = (rows, columns) => {
  let resultArray = new Array(rows)
  let cellIndex = 0

  for (let i = 0; i < resultArray.length; i++) {
    resultArray[i] = new Array(columns)

  }

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      resultArray[i][j] = cellIndex++;
    }
  }

  return resultArray
}
