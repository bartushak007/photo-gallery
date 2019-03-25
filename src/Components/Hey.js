import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchActions } from '../actions/albumsActions';

class Hey extends Component {
  render() {
    return (<div onClick={this.props.fetchActions}>hello my darlin</div>)
  }
}

export default connect(null, { fetchActions })(Hey)