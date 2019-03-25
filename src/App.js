import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Hey from './Components/Hey';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          hello
          <Hey/>
        </div>
      </Provider>
      
    );
  }
}

export default App;
