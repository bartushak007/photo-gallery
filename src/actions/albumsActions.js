import { FETCH_ALBUMS, FETCH_PHOTOS } from './types';

export const fetchAlbums = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/albums')
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
      dispatch({
        type: FETCH_PHOTOS,
        photos: photos
      })
    })
}