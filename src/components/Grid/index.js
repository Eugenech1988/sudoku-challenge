import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import GridCell from '../GridCell'

const Grid = (props) => {
  // functions that returns our jsx for our grid using dimensions for render it
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
      {renderGrid()}
    </div>
  )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Grid)
