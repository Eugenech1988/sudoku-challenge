import flatMap from 'lodash/flatMap'
import identity from 'lodash/identity'

// for this case we can set constants in real components or render functions we need to use props
// or input or api call etc to render our grid
export const NUMBER_OF_ROWS = 50
export const NUMBER_OF_COLUMNS = 50

// creating 2 dimensional array, in JS we don't have functions for it so we need a trick
export const createGridArray = (rows, columns) => (
  Array.from({length: rows})
    .map(() => Array.from({length: columns})
      .map(() => Math.random() >= .5))
)

// tick function for behaviour of components
export const cellTick = (gridValues, row, cell) => {
  const upperPrevSibling = gridValues[row - 1][cell - 1]
  const upperSibling = gridValues[row - 1][cell]
  const upperNextSibling = gridValues[row - 1][cell + 1]
  const prevSibling = gridValues[row][cell - 1]
  const self = gridValues[row][cell]
  const nextSibling = gridValues[row][cell + 1]
  const downPrevSibling = gridValues[row + 1][cell - 1]
  const downSibling = gridValues[row + 1][cell]
  const downNextSibling = gridValues[row + 1][cell + 1]
  console.log({ upperPrevSibling }, { upperSibling }, { upperNextSibling })
  console.log({ prevSibling }, { self }, { nextSibling })
  console.log({ downPrevSibling }, { downSibling }, { downNextSibling })
}
export const tickCell = (matrix, x, y) => {
  const siblingsPattern = [-1, 0, 1];
  const siblingsAlive = flatMap(
    siblingsPattern.map(xShift => siblingsPattern.map(yShift => {
      const xShifted = x + xShift;
      const yShifted = y + yShift;

      if (xShifted > 0 && yShifted > 0 && xShifted < 50 && yShifted < 50 && xShift && yShift) {
        return matrix[x + xShift][y + yShift];
      }
    }))
  ).filter(identity).length;

  if (siblingsAlive < 2) {
    return false;
  }

  if (siblingsAlive === 3) {
    return true;
  }

  if (siblingsAlive > 3) {
    return false;
  }

  return matrix[x][y];
}


export const tickWorld = (matrix) => {
  return matrix.map((row, x) => row.map((_, y) => tickCell(matrix, x, y)));
}
