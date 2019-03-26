import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAlbums, fetchPhotos } from '../actions/albumsActions';
import Photos from './Photos';

class Gallery extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }
  render() {
    return (
      <div>
        {this.props.albums.map((e) => {
          const { id, title } = e;
          return <div key={id} onClick={this.props.fetchPhotos.bind(null, id)}>{ title }</div>
        })}
        <Photos/>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  albums: state.gallery.albums,
  photos: state.gallery.photos
})

export default connect(mapStateToProps, { fetchAlbums, fetchPhotos })(Gallery)