import React, { Component } from 'react';
import classes from './App.css';
import TopBar from './TopBar/TopBar'
import Title from './Title/Title'
import StockPicker from './StockPicker/StockPicker'
import Portfolio from './Portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <div className={classes['App_main-body']}>
          <Title />
          <StockPicker />
          <Portfolio />
        </div>
      </div>
    );
  }
}

export default App;
