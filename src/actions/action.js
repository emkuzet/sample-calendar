import * as types from './actionTypes';
import {getRandomInt, fillSingleData } from './helpers';

export const createCalendar = (inputMonth, inputYear) => ({
    type: types.CREATE_CALENDAR,
    calendarItem: createMonthCalendar(inputMonth, inputYear)
});

export const editCalendar = (id) => ({
    type: types.EDIT_CALENDAR,
    id: id, 
    note: 'TEST'
});

function daysInMonth(inputMonth, inputYear) {
    return new Date(inputYear, inputMonth, 0).getDate();
}

function createMonthCalendar(inputMonth, inputYear){
    const daysCount = daysInMonth(inputMonth, inputYear);
    let calendarDay = 0;
    let allMonth = [];
    
    do {
        calendarDay = calendarDay + 1;
        allMonth.push( new Object({ id : calendarDay , date: '2018-' + inputMonth + '-' + calendarDay  , note: ''}));
    } while (calendarDay < daysCount );
    return allMonth;

}


export const fillCalendar = (sampleData) => dispatch => {
    dispatch(fillSingleData(sampleData, getRandomInt(30)))
    dispatch(fillSingleData(sampleData, getRandomInt(30)))
    dispatch(fillSingleData(sampleData, getRandomInt(30)))
    dispatch(fillSingleData(sampleData, getRandomInt(30)))
}


