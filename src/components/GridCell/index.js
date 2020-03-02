import React from 'react'
import { useSelector } from 'react-redux'

const GridCell = (props) => {
  const gridValues = useSelector(state => state.grid.gridValues)
  console.log(gridValues[0][15]);
  const handleClick = () => {
    console.log();
  }
  return (
    <div onClick={handleClick} className={props.className}/>
  )
}

export default GridCell
