import * as types from './actionTypes';
import axios from 'axios';
import { fillNote } from './actionNote';
import { fillCalendar } from './action';


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

export const fetchDataSuccess = ( currentMonth ) => dispatch => {
    dispatch(fetchData());
    return axios.get('https://swapi.co/api/people/').then(function (response) {

        // handle success
        dispatch(fetchDataComplete(response.data.results));
        // fill note
        var promise = dispatch(fillNote(response.data.results, currentMonth ));
        promise.then( function(value){
                value.map( data => dispatch(fillCalendar(data.date, data.note)))
            }
        )

      })
      .catch(function (error) {
        dispatch(fetchError());
        console.log(error);
      })
}