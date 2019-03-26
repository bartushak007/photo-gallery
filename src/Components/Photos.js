import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/albumsActions';

class Photos extends Component {
  componentDidMount() {
    this.props.fetchPhotos(1);
  }

  render() {
    return (
      <div className="photos-block">
        <h2>{this.props.album}</h2>
        {this.props.photos.map(e => {
          const { id, url, title } = e;

          return (
            <div className="photos-block__photo-container" key={id}>
              <img className="photos-block__photo" src={url} alt={title} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.gallery.photos,
  albums: state.gallery.albums
});

export default connect(
  mapStateToProps,
  { fetchPhotos }
)(Photos);
