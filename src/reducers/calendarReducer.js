import * as types from '../actions/actionTypes';

const calendarReducer = (state = [], action) => {
    switch (action.type) {
      // calendar
      case types.CREATE_CALENDAR:
        return{
          ...state,
          calendarItem: action.calendarItem
        }

      case types.EDIT_CALENDAR:
        return{
          ...state,
          calendarItem : state.calendarItem.map(
            (singleDay) => 
                singleDay.date.toString() === action.date.toString() ? 
                {...singleDay, note : [
                  ...singleDay.note, {note: action.note }
                ]} : singleDay
            )
        }

      // fetchdata
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
        
  
      // action
      case types.ADD_NOTE:
        return{
          ...state,
          noteList : [...state.noteList, {date: action.date , note : action.note}]
        }

      case types.FILL_NOTE:
        return {
          ...state,
          noteList : [...state.noteList, { date: action.date , note: action.note }]
        }

      case types.FETCH_NOTE:
      
        const beforeFilter = state.noteList.map((singleEvent) => singleEvent.date === action.date ?  singleEvent.note : false   )
        const filteredSingleItem = beforeFilter.filter((singleElement)=>{
          return singleElement !== false;
        })

        return{
          ...state,
          editItem : filteredSingleItem
        }

      case types.EDIT_NOTE:
        return{
          ...state,
          noteList : state.noteList.map((singleDay) => singleDay.date === action.date ? {...singleDay, note : action.note }: singleDay)
  
        }
      
      default:
        return state
    }
  };

  export default calendarReducer