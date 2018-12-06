import * as types from './actionTypes';
import axios from 'axios';

export const fetchData = () => ({
    type: types.FETCH_DATA,
    fetchStatus: true
});

export const fetchDataComplete = (sampleData) => ({
    type: types.FETCH_DATA_SUCCESS,
    sampleData
});

export const fetchError = () => ({
    type: types.FETCH_ERROR,
    fetchStatus: false
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