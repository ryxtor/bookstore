import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/Books';
import categoriesReducer from './Categories/Categories';

const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
