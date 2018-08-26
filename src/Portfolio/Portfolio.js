import React, { Component } from 'react';
import Badge from '../Badge/Badge'
import PortfolioCart from '../PortfolioCart/PortfolioCart'
import classes from './Portfolio.css'

class portfolio extends Component {
    addStockHandler(stockName) {
        this.refs.portfolioCartChild.addStockHandler(stockName);
    }
    render() {
        return (
            <div className={classes.portfolio}>
                <Badge className={classes.badge_portfolio}>MANAGE PORTFOLIO</Badge>
                <PortfolioCart ref="portfolioCartChild" />
            </div>
        );
    }
};

export default portfolio;