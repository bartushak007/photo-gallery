import { FETCH_ALBUMS, FETCH_PHOTOS, ADD_HASHTAG } from '../actions/types';

const initialState = { albums: [], photos: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return {
        ...state,
        albums: action.albums
      };
    case FETCH_PHOTOS:
      return {
        ...state,
        photos: action.photos
      };
    case ADD_HASHTAG:
      return {
        ...state,
        photos: [
          ...state.photos.map((e, i) => {
            if (e.id === action.photoId) {
              return {
                ...e,
                hashtagArr: [...state.photos[i].hashtagArr, action.hashtag]
              };
            }

            return e;
          })
        ]
      };
    default:
      return state;
  }
};
