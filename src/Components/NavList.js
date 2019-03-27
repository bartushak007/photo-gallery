import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/albumsActions';

class NavList extends Component {
  render() {
    return (
      <ul className="nav-list">
        <li className="nav-list__elem">
          Albums list
          <ul className="nav-list__embed-albums-list">
            { this.props.albums.map(e => {
              const { id, title } = e;
              return (
                <li
                  className="nav-list__embed-albums-list-elem"
                  key={ id }
                  onClick={ this.props.fetchPhotos.bind(null, id) }
                >
                  <button className="nav-list__embed-albums-list-link" href="#">{ title }</button>
                </li>
              );
            }) }
          </ul>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.gallery.albums,
  photos: state.gallery.photos
});

export default connect( mapStateToProps, { fetchPhotos })(NavList);
