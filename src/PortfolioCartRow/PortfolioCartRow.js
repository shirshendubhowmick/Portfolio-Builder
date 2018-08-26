import React from 'react';
import QuantityWidget from '../QuantityWidget/QuantityWidget';
import classes from './PortfolioCartRow.css';
import RemoveCircle from '../images/remove_circle - material.png';

const portfolioCartRow = (props) => {
    return (
        <div className={classes.portfolioCartRow} onMouseOver={props.rowMouseEnterHandler.bind(this, props.stockName)} 
            onMouseOut={props.rowMouseOutHandler.bind(this, props.stockName)}>
            <span>{props.stockName}</span>
            <span>{"₹" + props.stockPrice}</span>
            <span><QuantityWidget index={props.index} value={props.stockQuantity} quantityOnChangeHandler={props.quantityOnChangeHandler} 
                buttonCLickHandler={props.buttonCLickHandler} stockName={props.stockName}/></span>
            <span>{props.stockWeight}<p>%</p></span>
            <span onClick={props.rowOnDeleteHandler.bind(this, props.stockName)}><img src={RemoveCircle} alt="Remove Circle" className={props.removeCircleClassName}/></span>
        </div>
    );
}

export default portfolioCartRow;