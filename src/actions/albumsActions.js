import { FETCH_ALBUMS, FETCH_PHOTOS, ADD_HASHTAG } from './types';

export const fetchAlbums = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/albums?userId=1')
    .then(resp => resp.json())
    .then( albums => {
      dispatch({
        type: FETCH_ALBUMS,
        albums: albums
      })
    })
}

export const fetchPhotos = albumId => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
    .then(resp => resp.json())
    .then( photos => {
      photos.forEach(e => e.hashtagArr = []);

      dispatch({
        type: FETCH_PHOTOS,
        photos: photos
      })
    })
}

export const addHashtag = tagObj => dispatch => {
  const { hashtag, photoId } = tagObj;
  
  dispatch({
    type: ADD_HASHTAG,
    hashtag: hashtag,
    photoId: photoId
  })
}