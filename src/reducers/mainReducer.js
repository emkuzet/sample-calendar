import * as types from '../actions/actionTypes';

const todos = (state = [], action) => {
    switch (action.type) {
      case types.FETCH_DATA:
        return {
          ...state,
          fetchStatus: true,
        }
      case types.FETCH_DATA_SUCCESS:
        return {
          ...state,
          fetchStatus: false,
          sampleData: action.sampleData
        }
      case types.SINGLE_EDIT:
      return state
      
      default:
        return state
    }
  };

  export default todos