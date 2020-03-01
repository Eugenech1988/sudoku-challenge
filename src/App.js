import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import 'normalize.css'
import './styles/index.scss'
import Grid from './components/Grid'
import { setGridValuesArray } from './redux/actions/gridActions'
import { createGridArray, NUMBER_OF_ROWS, NUMBER_OF_COLUMNS } from './utils'

const App = () => {
  // function that passing arguments for array dimensions
  const gridArray = createGridArray(NUMBER_OF_COLUMNS, NUMBER_OF_ROWS)
  useEffect(() => {
    this.props.setGridValuesArray(gridArray)
  }, [])
  return (
      <div className='app'>
        <div className='app-container'>
          <Grid />
        </div>
      </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setGridValuesArray: (payload) => dispatch(setGridValuesArray(payload))
})

export default connect(null, mapDispatchToProps)(App)
