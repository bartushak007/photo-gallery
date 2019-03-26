import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAlbums, fetchPhotos } from '../actions/albumsActions';
import Photos from './Photos';
import NavList from './NavList';
import SearchForm from './SearchForm';

class Gallery extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="header__container">
            <nav>
              <NavList/>
            </nav>
            <SearchForm/>
          </div>
        </header>        
        <Photos />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  albums: state.gallery.albums,
  photos: state.gallery.photos
})

export default connect(mapStateToProps, { fetchAlbums, fetchPhotos })(Gallery)