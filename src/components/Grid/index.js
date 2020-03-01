import React from 'react'
import { useSelector } from 'react-redux'
import GridCell from '../GridCell'

const Grid = (props) => {
  // functions that returns our jsx for our grid using dimensions for render it
  const gridValues = useSelector(state => state.grid.gridValues)
  const renderGrid = (array) => (
    array.map(
      (arr, i) => {
        return (
          <div className={`grid-row row-${i}`}>
            {arr.map((arri, j) => {
              // adding random behaviour for active cells
              const active = Math.random() >= 0.5
              return (
                <GridCell rowIndex={i} cellIndex={j} className={'grid-cell cell-' + j + (active ? ' active' : '')}/>
              )
            })}
          </div>
        )
      }
    )
  )
  return (
    <div className='grid-wrapper'>
      {gridValues && renderGrid(gridValues)}
    </div>
  )
}

export default Grid
