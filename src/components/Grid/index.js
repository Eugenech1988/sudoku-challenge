import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGridValuesArray } from '../../redux/actions/gridActions'
import GridCell from '../GridCell'
import { tickWorld } from '../../utils'

const Grid = () => {
  // functions that returns our jsx for our grid using dimensions for render it
  const gridValues = useSelector(state => state.grid.gridValues)
  const dispatch = useDispatch()
  useEffect(() => {
    const interval = setInterval(() => dispatch(setGridValuesArray(tickWorld(gridValues))), 1000)
    return () => clearInterval(interval)
  }, []);
  const renderGrid = (array) => (
    array.map(
      (arr, i) => {
        // for our case we don't need to handle keys on rendering arrays, so we can use index property
        return (
          <div key={i} className={`grid-row row-${i}`}>
            {arr.map((arri, j) => {
              // adding random behaviour for active cells
              return (
                <GridCell rowIndex={i} cellIndex={j} key={j} className={'grid-cell cell-' + j + (arr[j] ? ' active' : '')}/>
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
