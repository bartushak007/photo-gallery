import { FETCH_ALBUMS } from './types';

export const fetchActions = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then(resp => resp.json())
    .then( albums => {
      dispatch({
        type: FETCH_ALBUMS,
        albums: albums
      })
    })
}