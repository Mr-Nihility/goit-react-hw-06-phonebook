import { createStore, combineReducers } from 'redux';
import { contactsReducer } from './contacts/contacts-reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
//-----------------------------------------------------//
const rootReducer = combineReducers({
  contacts: contactsReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
