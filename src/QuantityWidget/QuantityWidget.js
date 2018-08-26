import React from 'react';
import classes from './QuantityWidget.css';

const quantityWidget = (props) => {
    return (
        <div className={classes.quantityWidget}>
            <p onClick={props.buttonCLickHandler.bind(this, "-", props.stockName)}>-</p>
            <input type="text" value={props.value} onChange={(event) => props.quantityOnChangeHandler(event, props.stockName)}/>
            <p onClick={props.buttonCLickHandler.bind(this, "+", props.stockName)}>+</p>
        </div>
    );
};

export default quantityWidget;
