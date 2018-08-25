import React from 'react';
import AddCircle from '../images/add_circle - material.png'

const stockWidget = (props) => {
    let widgetContent;
    if (props.stockPrice === "IMG") {
        widgetContent = (
            <div className="box_StockWidget"  onMouseOut={props.mouseOutHandler.bind(this, props.index)} >
                <img src={AddCircle} alt="AddCircle" className="img_StockWidget" />
            </div>
        );
    }
    else {
        widgetContent = <span onMouseOver={props.mouseOverHandler.bind(this, props.index)} >{"₹" + props.stockPrice}</span>;
    }
    return (
        <div className="stockWidget">
            <div className="name_StockWidget">{props.stockName}</div>
            <div className="category_StockWidget">{props.stockCategory}</div>
            {widgetContent}
        </div>
    );
}

export default stockWidget;