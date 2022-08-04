import { ADD, DELETE, FILTER } from './contacts-types';

import { combineReducers } from 'redux';

const itemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];
    case DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;
    default:
      return state;
  }
};

export const contactsReducer = combineReducers({
  item: itemReducer,
  filter: filterReducer,
});
