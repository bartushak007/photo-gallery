import React, { Component } from 'react';
import './scss/main.scss';
import { Provider } from 'react-redux';
import store from './store';
import Gallery from './Components/Gallery';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>        
          <Gallery/>        
      </Provider>      
    );
  }
}

export default App;
