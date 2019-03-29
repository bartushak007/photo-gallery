import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/albumsActions';
import Hashtags from '../containers/Hashtags';
import AddHashtagForm from './AddHashtagForm';

class Photos extends Component {
  componentDidMount() {
    this.props.fetchPhotos(1);
  }

  render() {
    return (
      <div className="photos-block">       
        {this.props.photos.map(e => {
          const { id, url, title, hashtagArr } = e;
          
          return (
            <div className="photos-block__photo-container" key={ id }>
              <img className="photos-block__photo" src={ url } alt={ title }/>
              <p className="photos-block__paragraph">{ title }</p>
              <Hashtags setKey={ id } hashtags={ hashtagArr }/>
              <AddHashtagForm id={ id }/>        
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.gallery.photos  
});

export default connect( mapStateToProps, { fetchPhotos })(Photos);
