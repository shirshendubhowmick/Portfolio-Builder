import React, { Component } from 'react';
import Badge from '../Badge/Badge';
import PortfolioCart from '../PortfolioCart/PortfolioCart'
import classes from './Portfolio.css';
import PortfolioGraph from '../PortfolioGraph/PortfolioGraph';
import PortfolioStats from '../PortfolioStats/PortfolioStats';

class portfolio extends Component {
    addStockHandler(stockName) {
        this.refs.portfolioCartChild.addStockHandler(stockName);
    }
    passPortfolioCartState(stateData) {
        this.refs.portfolioGraphChild.updateGraph(stateData);
        this.refs.portfolioStatsChild.updateStats(stateData);
    }
    render() {
        return (
            <div className={classes.portfolio}>
                <Badge className={classes.badge_portfolio}>MANAGE PORTFOLIO</Badge>
                <PortfolioCart ref="portfolioCartChild" passPortfolioCartState={this.passPortfolioCartState.bind(this)} />
                <PortfolioGraph ref="portfolioGraphChild" />
                <PortfolioStats ref="portfolioStatsChild" />
            </div>
        );
    }
};

export default portfolio;