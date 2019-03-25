import { combineReducers } from 'redux';
import cardReducer from './albumsReducer';

export default combineReducers({
  gallery: cardReducer
})
