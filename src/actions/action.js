import * as types from './actionTypes';

export const createCalendar = (inputMonth, inputYear) => ({
    type: types.CREATE_CALENDAR,
    calendarItem: createMonthCalendar(inputMonth, inputYear)
});

export const editCalendar = (id) => ({
    type: types.EDIT_CALENDAR,
    id: id, 
    note: 'TEST'
});

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

export const fillNote = (sampleData) => dispatch => {
    dispatch(fillSingleData(sampleData, getRandomInt(30)))
    dispatch(fillSingleData(sampleData, getRandomInt(30)))
    dispatch(fillSingleData(sampleData, getRandomInt(30)))
    dispatch(fillSingleData(sampleData, getRandomInt(30)))
}

export const fillCalendar = (sampleData) => dispatch => {
    dispatch(fillSingleData(sampleData, getRandomInt(30)))
    dispatch(fillSingleData(sampleData, getRandomInt(30)))
    dispatch(fillSingleData(sampleData, getRandomInt(30)))
    dispatch(fillSingleData(sampleData, getRandomInt(30)))
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

export const fillSingleData = (sampleData, id) => ({
    type: types.FILL_DATA,
    id: id, 
    note: sampleData[getRandomInt(10)].name
})