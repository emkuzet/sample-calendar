import * as types from './actionTypes';
import  { editNoteValue } from './actionNote';

export const createCalendar = (inputMonth, inputYear) => ({
    type: types.CREATE_CALENDAR,
    calendarItem: createMonthCalendar(inputMonth, inputYear)
});

export const editCalendar = (date) => ({
    type: types.EDIT_CALENDAR,
    date: date,
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
        let inputDay = calendarDay;
        let dayLength = calendarDay.toString().length;

        if( dayLength  === 1 ){
            inputDay = '0' + inputDay.toString() ;
        }

        allMonth.push({date:  inputDay + '-' + inputMonth +  '-2018', note: ''});
    } while (calendarDay < daysCount );
    return allMonth;

}


export const fillCalendar = (date, note) => ({
    type: types.EDIT_CALENDAR,
    date: date,
    note: note
});


export const updateCalendar = (sampleData) => dispatch => {
    console.log(sampleData);
    sampleData.map((single) => {
        console.log(single);
        dispatch(fillCalendar(single.date, single.note))
    })
};

