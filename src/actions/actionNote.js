import * as types from './actionTypes';
import {getRandomInt } from './helpers';
import { fillCalendar} from './action'

export const addNote = (date ,sampleData) => ({
    type: types.ADD_NOTE,
    date: date, 
    note: sampleData
});




export const editNoteValue = (date) => ({
    type: types.EDIT_NOTE,
    date: date,
});


export const editNote = (date ) => dispatch => {
    return new Promise (function(resolve, reject) {
          resolve(
            dispatch(editNoteValue(date))
          );
        
      })};

export const fillSingleNote = (sampleData, eventDate) => ({
    type: types.FILL_NOTE,
    date: eventDate, 
    note: sampleData[getRandomInt(9)].name
  })

export function addZero( singleDay){

    let defaultValue = singleDay;
    singleDay = singleDay.toString().length;

    if (singleDay === 1 ){
        return defaultValue =  '0' + defaultValue  
    }else{
        return defaultValue;
    }
}



export const fillNote = (sampleData, currentMonth) => dispatch => {

    let allNote = []
    let i = 0
    
    do{
        i = i + 1;
       
        allNote.push(dispatch(fillSingleNote(sampleData, addZero(getRandomInt(28)) + '-' + currentMonth)))
    }while( i < 8)
       
    return new Promise(function(resolve, reject) {
        resolve(
            allNote
        );
    })};