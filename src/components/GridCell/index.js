import React from 'react'

const GridCell = (props) => {
  const handleClick = () => {
    console.log(props.rowIndex, props.cellIndex);
  }
  return (
    <div onClick={handleClick} className={props.className}/>
  )
}

export default GridCell
