import * as types from './actionTypes';
import axios from 'axios';

export const fetchData = () => ({
    type: types.FETCH_DATA,
});

export const fetchDataComplete = (sampleData) => ({
    type: types.FETCH_DATA_SUCCESS,
    sampleData
});

export const fetchError = () => ({
    type: types.FETCH_ERROR,
});

export const fetchDataSuccess = () => dispatch => {
    dispatch(fetchData());
    return axios.get('https://swapi.co/api/people/').then(function (response) {
        // handle success
        dispatch(fetchDataComplete(response.data.results))
      })
      .catch(function (error) {
        dispatch(fetchError());
        console.log(error);
      })
}

export const createCalendar = () => ({
    type: types.CREATE_CALENDAR,
    calendarItem: createMonthCalendar()
});

export const editCalendar = (id) => ({
    type: types.EDIT_CALENDAR,
    id: id, 
    note: 'TEST'
});



function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate() + 1 ;
}

function createMonthCalendar(){

    let currentMonth = new Date().getMonth();
    let currentYear= new Date().getFullYear();
    
    const daysCount = daysInMonth(currentMonth, currentYear);
    let calendarDay = 0;
    let allMonth = [];
    
    do {
        calendarDay = calendarDay + 1;
        allMonth.push( new Object({ id : calendarDay , note: ''}));
    } while (calendarDay < daysCount );
    return allMonth;

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