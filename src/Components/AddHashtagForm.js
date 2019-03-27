import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHashtag } from '../actions/albumsActions';

class AddHashtagForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = { 
      search: ''
    };
  }

  onChange(e) {    
    this.setState({ search: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const search = this.state.search,
      id = this.props.id,
      hashtagObj = { 
        hashtag: search, 
        photoId: id
      };

    this.props.addHashtag(hashtagObj);
  }

  render() {
    return (
      <div className="hashtags-form">
        <form onSubmit={this.onSubmit}>
          <input className="hashtags-form__input" onChange={ this.onChange } name="search" placeholder="Search photos"/> 
          <button className="hashtags-form__btn" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addHashtag })(AddHashtagForm);