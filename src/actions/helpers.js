import * as types from './actionTypes';

export function getRandomInt(max) {

    const number = Math.floor(Math.random() * Math.floor(max));
    return number;   
  }


export const fillSingleData = (sampleData, id) => ({
  type: types.FILL_DATA,
  id: id, 
  note: sampleData[getRandomInt(10)].name
})