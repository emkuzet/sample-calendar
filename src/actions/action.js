import * as types from './actionTypes';
import  { createMonthCalendar } from './helpers';

export const createCalendar = (inputMonth, inputYear) => ({
    type: types.CREATE_CALENDAR,
    calendarItem: createMonthCalendar(inputMonth, inputYear)
});

export const editCalendar = (date, singleNote) => ({
    type: types.EDIT_CALENDAR,
    date: date,
    note: singleNote
});

export const updateCalendar = (noteList) => dispatch => {
    noteList.map((singleNote) => dispatch(editCalendar(singleNote.date, singleNote.note))
    )
};

