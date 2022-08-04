// const import { reducerName } from './reducer'
import { createStore } from 'redux';
//-----------------------------------------------------//
const InitialState = {
  contacts: {
    items: [],
    filter: '',
  },
};
const reducer = (state = {}, { type, payload }) => state;
const store = createStore(reducer, InitialState);

export default store;
