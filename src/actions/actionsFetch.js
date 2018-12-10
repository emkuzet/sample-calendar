import * as types from './actionTypes';
import axios from 'axios';
import { fillNote } from './actionNote';
import { editCalendar } from './action';

export const fetchData = () => ({
    type: types.FETCH_DATA,
});

export const fetchDataComplete = (dataFromApi) => ({
    type: types.FETCH_DATA_SUCCESS,
    dataFromApi
});

export const fetchError = () => ({
    type: types.FETCH_ERROR,
});

export const fetchInit = ( currentMonth ) => dispatch => {

    // store change status
    dispatch(fetchData());

    return axios.get('https://swapi.co/api/people/').then(function (response) {

        // store success & update store
        dispatch(fetchDataComplete(response.data.results));

        // fill store with all adata
        const actionCompleted = dispatch(fillNote(response.data.results, currentMonth ));

        actionCompleted.then( function(noteList){
            noteList.map( singleNote => dispatch(editCalendar(singleNote.date, singleNote.note)))
            }
        )

      })
      .catch(function (error) {
        dispatch(fetchError());
      })
}