import React, { Component } from 'react';
import ApplyFilter from '../ApplyFilter/ApplyFilter'
import Badge from '../Badge/Badge'
import StockWidget from '../StockWidget/StockWidget'
import data from '../data.json'
import classes from './StockPicker.css'


class stockPicker extends Component {
    constructor(props) {
        super(props)
        this.tempStockPrice = [];
        this.state = {
            totalStocksDataLength: Object.keys(data.price).length,
            startIndex: 0,
            endIndex: 8,
            stockNames: (Object.keys(data.price)).slice(0, 8),
            stockPrices:(Object.values(data.price)).slice(0, 8),
            prevButtonClassNames: classes["row_nextPrevDisabled"],
            nextButtonCLassNames: ""
        };
    }
    nextClickHandler = () => {
        let tempNextButtonCLassNames;
        let tempPrevButtonClassNames;
        if(!this.state.nextButtonClassNames) {
            if(this.state.endIndex + 8 >= this.state.totalStocksDataLength) {
                tempNextButtonCLassNames = classes["row_nextPrevDisabled"];
            }
            if(this.state.startIndex === 0) {
                tempPrevButtonClassNames = "";
            }
            this.setState({startIndex: this.state.endIndex,
                    endIndex: this.state.endIndex + 8,
                    stockNames: (Object.keys(data.price)).slice(this.state.endIndex, this.state.endIndex + 8),
                    stockPrices:(Object.values(data.price)).slice(this.state.endIndex, this.state.endIndex + 8),
                    nextButtonClassNames: tempNextButtonCLassNames,
                    prevButtonClassNames: tempPrevButtonClassNames
            });
        }
    }
    prevClickHandler = () => {
        let tempNextButtonCLassNames;
        let tempPrevButtonClassNames;
        if(!this.state.prevButtonClassNames) {
            if(this.state.endIndex + 8 < this.state.totalStocksDataLength) {
                tempNextButtonCLassNames = ""
            }
            if(this.state.startIndex - 8 <= 0) {
                tempPrevButtonClassNames = classes["row_nextPrevDisabled"];
            }
            this.setState({startIndex: this.state.startIndex - 8,
                    endIndex: this.state.startIndex,
                    stockNames: (Object.keys(data.price)).slice(this.state.startIndex - 8, this.state.startIndex),
                    stockPrices: (Object.values(data.price)).slice(this.state.startIndex - 8, this.state.startIndex),
                    nextButtonClassNames: tempNextButtonCLassNames,
                    prevButtonClassNames: tempPrevButtonClassNames
            });
        }
    }
    render() {
        let stockWidgetsRow1 = [];
        let stockWidgetsRow2 = [];
        for(let i = 0; i<4; i++) {
            if(this.state.stockNames[i]) {
                stockWidgetsRow1.push(<StockWidget stockName={this.state.stockNames[i]} stockCategory="Financial Services" stockPrice={this.state.stockPrices[i]} 
                                addStockHandler= {this.props.addStockHandler} index={i} key={i}/> )
            }
            if(this.state.stockNames[i + 4]) {
                stockWidgetsRow2.push(<StockWidget stockName={this.state.stockNames[i + 4]} stockCategory="Financial Services" stockPrice={this.state.stockPrices[i + 4]} 
                                addStockHandler= {this.props.addStockHandler} index={i + 4} key={i}/> )
            }
        }
        return (
            <div className={classes.stockPicker}>
                <Badge className={classes['badge_stockPicker']}>PICK STOCKS</Badge>
                <span>
                    Showing {this.state.startIndex + 1} - {this.state.endIndex >= this.state.totalStocksDataLength ? this.state.totalStocksDataLength : this.state.endIndex} of {this.state.totalStocksDataLength} matching stocks
                </span>
                <ApplyFilter />
                <div className={classes['row_stockPicker']}>
                    {stockWidgetsRow1}
                </div>
                <div className={classes['row_stockPicker']}>
                    {stockWidgetsRow2}
                </div>
                <div className={classes['row_nextPrev']}>
                    <span className={this.state.prevButtonClassNames} onClick={this.prevClickHandler}>PREV</span>
                    <span className={this.state.nextButtonClassNames} onClick={this.nextClickHandler}>NEXT</span>
                </div>
            </div>
        )
    }
}

export default stockPicker;