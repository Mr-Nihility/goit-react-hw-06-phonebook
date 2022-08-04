import { createStore, combineReducers } from 'redux';
import { contactsReducer } from './contacts/contacts-reducers';
//-----------------------------------------------------//
const rootReducer = combineReducers({
  contacts: contactsReducer,
});
export const store = createStore(rootReducer, InitialState);

// export default store;
