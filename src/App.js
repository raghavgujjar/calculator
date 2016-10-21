import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Calculator</h2>
        </div>
        <Calculator/>
      </div>
    );
  }
}

export default App;
