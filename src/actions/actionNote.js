import * as types from './actionTypes';
import { getRandomInt } from './helpers';

export const addNote = (date , noteValue) => ({
    type: types.ADD_NOTE,
    date: date, 
    note: noteValue
});

export const editNote = (date , noteValue) => ({
    type: types.EDIT_NOTE,
    date: date, 
    note: noteValue
});

export const fetchNote = (date) => dispatch => {  

    return new Promise (function(resolve) {
        resolve( 
            dispatch({
                type: types.FETCH_NOTE,
                date: date,
            })
        )
    })
}

export const fillSingleNote = (dataFromApi, eventDate) => ({
    type: types.FILL_NOTE,
    date: eventDate, 
    note: dataFromApi
  })

export const fillNote = (dataFromApi, currentMonth) => dispatch => {
    return new Promise( function(resolve){
        const allNotes = [];
        let singleNote;
        let currentItem = 0;
        const itemLimit = 10;
        
        do{
            singleNote = dispatch(
                fillSingleNote(
                            dataFromApi[getRandomInt(9)].name, 
                            new Date(2018, 11, getRandomInt(28))
                            )  
                        )
            allNotes.push(singleNote)
            currentItem = currentItem + 1;
    
        }while(currentItem < itemLimit)

        resolve(
            allNotes
        )
})};