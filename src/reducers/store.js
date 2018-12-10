import { createStore, applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import calendarReducer from './calendarReducer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initStore = {
    fetchStatus: false,
    sampleData : [],
    calendarItem: [],
    noteList: [],
    editItem: {},

}

export const store = createStore(
    calendarReducer,
    initStore,
    devTools(
        applyMiddleware(thunk)
    )
);

export default store;