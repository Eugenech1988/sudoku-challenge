import React, { useEffect } from 'react';
import 'normalize.css'
import './styles/index.scss'
import Grid from './components/Grid'
import { setGridValuesArray } from './redux/actions/gridActions'
import { createGridArray, NUMBER_OF_ROWS, NUMBER_OF_COLUMNS } from './utils'
import { useDispatch } from 'react-redux'

const App = () => {
  // function that passing arguments for array dimensions
  const dispatch = useDispatch()
  const gridArray = createGridArray(NUMBER_OF_COLUMNS, NUMBER_OF_ROWS)
  useEffect(() => {
    dispatch(setGridValuesArray(gridArray))
  }, [])
  return (
      <div className='app'>
        <div className='app-container'>
          <Grid />
        </div>
      </div>
  );
}

export default App
