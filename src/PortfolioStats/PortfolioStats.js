import React, { Component } from 'react';
import classes from './PortfolioStats.css';
import BuildPortfolioButton from '../BuildPortfolioButton/BuildPortfolioButton'

class portfolioStats extends Component {
    render() {
        return (
            <div className={classes.portfolioStatsDiv}>
                <div>
                    <div>Stocks</div>
                    <div>Net Worth</div>
                </div>
                <div>
                    <div>6</div>
                    <div>₹12,346</div>
                </div>
                <div>
                    <div>P/E Ratio</div>
                    <div>P/B Ratio</div>
                </div>
                <div>
                    <div>23.2</div>
                    <div>12.4</div>
                </div>
                <BuildPortfolioButton />
            </div>
        )
    }
}

export default portfolioStats;