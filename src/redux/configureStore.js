import { createStore, combineReducers } from 'redux';
import booksReducer from './books/Books';
import categoriesReducer from './Categories/Categories';

const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = createStore(reducer);

export default store;
