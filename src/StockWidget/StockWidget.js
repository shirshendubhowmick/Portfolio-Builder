import React from 'react';
import AddCircle from '../images/add_circle - material.png'
import classes from './StockWidget.css'

const stockWidget = (props) => {
    let widgetContent;
    if (props.stockPrice === "IMG") {
        widgetContent = (
            <div className={classes['box_StockWidget']}  onMouseOut={props.mouseOutHandler.bind(this, props.index)} >
                <img src={AddCircle} alt="AddCircle" className={classes['img_StockWidget']} onClick={() => props.addStockHandler(props.stockName)}/>
            </div>
        );
    }
    else {
        widgetContent = <span onMouseOver={props.mouseOverHandler.bind(this, props.index)} >{"₹" + props.stockPrice}</span>;
    }
    const dragStartHandler = (e) => {
        e.dataTransfer.setData("text/plain", props.stockName);
        e.dataTransfer.dropEffect = "copy";
    }
    return (
        <div className={classes.stockWidget} draggable="true" onDragStart={dragStartHandler}>
            <div className={classes['name_StockWidget']}>{props.stockName}</div>
            <div className={classes['category_StockWidget']}>{props.stockCategory}</div>
            {widgetContent}
        </div>
    );
}

export default stockWidget;