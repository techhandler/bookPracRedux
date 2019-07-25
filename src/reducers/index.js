import { combineReducers } from 'redux';
import bookList from './reducers_bookList';
import activeBook from './reducers_active_book';

const rootReducer = combineReducers({
  books: bookList,
  activeBook: activeBook
});

export default rootReducer;