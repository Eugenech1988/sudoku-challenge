import * as types from '../actionTypes/grindActionTypes'

const initialState = {
  gridValues: null
}

// if we'll need to get values array from api request we need to add loading state,
// loaded state etc, to handle errors and loading and useMemo on component to prevent
// rerender and useless requests

const gridReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_GRID_VALUES_ARRAY:
      return { ...state, gridValues: action.payload }
    default:
      return { ...state }
  }
}

export default gridReducer
