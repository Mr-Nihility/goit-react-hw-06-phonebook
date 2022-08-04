// const import { reducerName } from './reducer'
import { createStore } from 'redux';
const reducer = (state = {}, { type, payload }) => state;
const store = createStore(reducer);

export default store;
