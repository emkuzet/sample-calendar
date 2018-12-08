import * as types from './actionTypes';
import {getRandomInt } from './helpers';

export const addNote = (date ,sampleData) => ({
    type: types.FILL_DATA,
    date: date, 
    note: sampleData[getRandomInt(10)].name
});

export const editNote = (date, payload) => ({
    type: types.EDIT_NOTE,
    date: date,
    note: payload
});

export const fillSingleNote = (sampleData, eventDate) => ({
    type: types.FILL_NOTE,
    date: eventDate, 
    note: sampleData[getRandomInt(9)].name
  })

function addZero( singleDay){

    let defaultValue = singleDay;
    singleDay = singleDay.toString().length;

    if (singleDay === 1 ){
        return defaultValue =  '0' + defaultValue  
    }else{
        return defaultValue;
    }
}



export const fillNote = (sampleData, currentMonth) => dispatch => {
    dispatch(fillSingleNote(sampleData, addZero(getRandomInt(28)) + '-' + currentMonth))
    dispatch(fillSingleNote(sampleData, addZero(getRandomInt(28)) + '-' + currentMonth))
    dispatch(fillSingleNote(sampleData, addZero(getRandomInt(28)) + '-' + currentMonth))
    dispatch(fillSingleNote(sampleData, addZero(getRandomInt(28)) + '-' + currentMonth))
    dispatch(fillSingleNote(sampleData, addZero(getRandomInt(28)) + '-' + currentMonth))
}
