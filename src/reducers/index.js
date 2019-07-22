import { combineReducers } from 'redux';
import bookList from './reducers_bookList'

const rootReducer = combineReducers({
  books: bookList
});

export default rootReducer;