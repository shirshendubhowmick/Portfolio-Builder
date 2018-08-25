import React, { Component } from 'react';
import Badge from '../Badge/Badge'
import classes from './Portfolio.css'

class portfolio extends Component {
    render() {
        return (
            <div className={classes.portfolio}>
                <Badge className={classes.badge_portfolio}>MANAGE PORTFOLIO</Badge>
            </div>
        );
    }
};

export default portfolio;