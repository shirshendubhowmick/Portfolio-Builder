import React, { Component } from 'react';
import './App.css';
import TopBar from './TopBar/TopBar'
import Title from './Title/Title'
import StockPicker from './StockPicker/StockPicker'
import Portfolio from './Portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <div className="App_main-body">
          <Title />
          <StockPicker />
          <Portfolio />
        </div>
      </div>
    );
  }
}

export default App;
