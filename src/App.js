import React, { Component } from 'react';
import classes from './App.css';
import TopBar from './TopBar/TopBar';
import Title from './Title/Title';
import StockPicker from './StockPicker/StockPicker';
import Portfolio from './Portfolio/Portfolio';

class App extends Component {
  addStockHandler(stockName) {
    this.refs.portfolioChild.addStockHandler(stockName)
  }
  render() {
    return (
      <div>
        <TopBar />
        <div className={classes['App_main-body']}>
          <Title />
          <StockPicker addStockHandler={this.addStockHandler.bind(this)}/>
          <Portfolio ref="portfolioChild" />
        </div>
      </div>
    );
  }
}

export default App;
