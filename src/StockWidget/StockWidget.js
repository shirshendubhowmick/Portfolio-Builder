import React from 'react';
import AddCircle from '../images/add_circle - material.png'
import classes from './StockWidget.css'

const stockWidget = (props) => {

    const mouseOverHandler = (e) => {
        e.target.style.visibility = "hidden";
        document.getElementById(e.target.id.slice(0, 1) + "imgBox").style.visibility = "visible";
    };
    const mouseOutHandler = (e) => {
        if(e.target.tagName === "IMG") {
            e.target.parentElement.style.visibility = "hidden";
            document.getElementById(e.target.parentElement.id.slice(0, 1) + "priceBox").style.visibility = "visible";
        }
        else {
            e.target.style.visibility = "hidden";
            document.getElementById(e.target.id.slice(0, 1) + "priceBox").style.visibility = "visible";
        }
    };
    const dragStartHandler = (e) => {
        e.dataTransfer.setData("text/plain", props.stockName);
        e.dataTransfer.dropEffect = "copy";
    };
    return (
        <div className={classes.stockWidget} draggable="true" onDragStart={dragStartHandler}>
            <div className={classes['name_StockWidget']}>{props.stockName}</div>
            <div className={classes['category_StockWidget']}>{props.stockCategory}</div>
            <span onMouseOver={mouseOverHandler} id={props.index + "priceBox"}>{"₹" + props.stockPrice}</span>
            <div className={classes['box_StockWidget']} onMouseOut={mouseOutHandler} id={props.index + "imgBox"}>
                <img src={AddCircle} alt="AddCircle" className={classes['img_StockWidget']} onClick={() => props.addStockHandler(props.stockName)} />
            </div>
        </div>
    );
}

export default stockWidget;