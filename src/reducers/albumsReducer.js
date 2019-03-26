import { FETCH_ALBUMS, FETCH_PHOTOS } from '../actions/types';

const initialState = { albums: [], photos: [] };

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ALBUMS:
      return {
        ...state,
        albums: action.albums
      }
    case FETCH_PHOTOS:
      return{
        ...state,
        photos: action.photos
      }
      default:
      return state
  }
}

 
