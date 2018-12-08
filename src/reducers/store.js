import { createStore, applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './mainReducer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initStore = {
    fetchStatus: false,
    sampleData : [],
    calendarItem: [],
    noteList: [],
    editItem: {},

}

export const store = createStore(
    mainReducer,
    initStore,
    devTools(
        applyMiddleware(thunk)
    )
);

export default store;