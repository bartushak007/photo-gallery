import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/albumsActions';

class Photos extends Component {
  componentDidMount(){
    this.props.fetchPhotos(1)
  }

  render() {
    return (    
      <>
        { this.props.photos.map(e => {
          const { id } = e;
          return (<div key ={id}>{ e.id }</div>)
        }) } 
      </>
    )
  }
}

const mapStateToProps = state => ({  
  photos: state.gallery.photos
})

export default connect(mapStateToProps, { fetchPhotos })(Photos);