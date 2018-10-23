import React, { Component } from 'react';
import './App.css';

import GameManager from './components/GameManager';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameManager />
      </div>
    );
  }
}

export default App;
