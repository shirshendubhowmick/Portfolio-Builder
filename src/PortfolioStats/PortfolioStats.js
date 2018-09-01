import React, { Component } from 'react';
import classes from './PortfolioStats.css';
import BuildPortfolioButton from '../BuildPortfolioButton/BuildPortfolioButton'
import stocksData from '../data.json';

class portfolioStats extends Component {
    constructor(props) {
        super(props);
        this.state = {netWorth: "0", noOfStocks: 0, pByERatio: 0};
    }
    updateStats(portfolioCartStateData) {
        console.log(portfolioCartStateData);
        let netWorth = 0;
        let pByEDeno = 0;
        for(let stock in portfolioCartStateData) {
            netWorth += Math.round(portfolioCartStateData[stock].price * portfolioCartStateData[stock].quantity);
            pByEDeno += (stocksData.eps[stock] * portfolioCartStateData[stock].quantity);
        }
        this.setState({netWorth: netWorth, noOfStocks: Object.keys(portfolioCartStateData).length, 
                        pByERatio: netWorth === 0 ? 0 : (netWorth/pByEDeno).toFixed(2)})
    }
    render() {
        return (
            <div className={classes.portfolioStatsDiv}>
                <div>
                    <div>Stocks</div>
                    <div>Net Worth</div>
                </div>
                <div>
                    <div>{this.state.noOfStocks}</div>
                    <div>{"₹" + this.state.netWorth.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                </div>
                <div>
                    <div>P/E Ratio</div>
                    <div>P/B Ratio</div>
                </div>
                <div>
                    <div>{this.state.pByERatio}</div>
                    <div>12.4</div>
                </div>
                <BuildPortfolioButton />
            </div>
        )
    }
}

export default portfolioStats;