import * as types from './actionTypes';
import axios from 'axios';
import { fillNote } from './actionNote';

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
        dispatch(fillNote(response.data.results, currentMonth ));
      })
      .catch(function (error) {
        dispatch(fetchError());
        console.log(error);
      })
}