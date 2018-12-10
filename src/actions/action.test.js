import * as types from './actionTypes';
import { editCalendar, createCalendar } from './action';

describe('actions',  () => {
    it('should create action', () => {

    const expectedAction = {
        type: types.EDIT_CALENDAR,
        date: 11,
        note: 'Obi'
    }

    expect(editCalendar(11, 'Obi')).toEqual(expectedAction)
    })
})

describe('createCalendar', () => {
    it('should create calendar', () => {
        
    const calendar = createCalendar(11, 2018);
    
    expect(calendar.calendarItem[0]).toHaveProperty('date' && 'note');
    })
})
