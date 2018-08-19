import React from 'react';
import ApplyFilter from '../ApplyFilter/ApplyFilter'
import Badge from '../Badge/Badge'


const stockPicker = () => {
    return (
        <div className="stockPicker">
            <Badge className="badge_stockPicker">Pick Stocks</Badge>
            <span>Showing 6 - 12 of 23 matching stocks</span>
            <ApplyFilter />
        </div>
    )
}

export default stockPicker;