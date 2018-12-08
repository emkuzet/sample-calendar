import * as types from '../actions/actionTypes';

const todos = (state = [], action) => {
    switch (action.type) {
      case types.CREATE_CALENDAR:
        return{
          ...state,
          calendarItem: action.calendarItem
        }

      case types.ADD_NOTE:
      return{
        ...state,
        noteList : [...state.noteList, action.payload]
      }

      case types.EDIT_NOTE:
      return{
        ...state,
        noteList :  state.noteList.map((singleNote) => singleNote.id === action.id ? {...singleNote,  note : action.note }: singleNote)
      }

      case types.EDIT_CALENDAR:
      return{
        ...state,
        calendarItem : state.calendarItem.map((singleDay) => singleDay.id === action.id ? {...singleDay, note : action.note }: singleDay)
      }

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

      case types.FILL_DATA:
      return {
        ...state,
        calendarItem : state.calendarItem.map((singleDay) => singleDay.id === action.id ? {...singleDay, note : action.note }: singleDay)
      }
      
      default:
        return state
    }
  };

  export default todos