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
        noteList : [...state.noteList, {date: action.date , note : action.note}]
      }

      /*TODO dopisac insturkcje do dodawania ta wyswietla */
      case types.EDIT_NOTE:
      
      const toEdit = state.noteList.map((singleEvent) => singleEvent.date === action.date ?  singleEvent.note : false   )
      const toReturn = toEdit.filter((singleElement)=>{
        return singleElement !== false;
      })

      return{
        ...state,
        editItem : toReturn
      }

      case types.EDIT_CALENDAR:
      return{
        ...state,
        calendarItem : state.calendarItem.map((singleDay) => singleDay.date === action.date ? {...singleDay, note : action.note }: singleDay)
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
        calendarItem : state.calendarItem.map(
          (singleDay) => 
            singleDay.date === action.date ? 
            {...singleDay, note : action.note }: singleDay
        )         
      }

      case types.FILL_NOTE:
      return {
        ...state,
        noteList : [...state.noteList, { date: action.date , note: action.note }]
      }
      
      default:
        return state
    }
  };

  export default todos