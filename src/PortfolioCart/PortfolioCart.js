import React, { Component } from 'react';
import classes from './PortfolioCart.css';
import PortfolioCartRow from '../PortfolioCartRow/PortfolioCartRow.js';
import data from '../data.json'


class portfolioCart extends Component {
    state = {}
    addStockHandler(stockName) {
        if(Object.keys(this.state).length < 5) {
            let tempQuantity = this.state.hasOwnProperty(stockName) ? this.state[stockName].quantity : 0;
            this.setState({[stockName]: {price: data.price[stockName], quantity: tempQuantity + 1, removeCircleClassName: classes.portfolioCartRowDeleteButton}});
        }
   };
   quantityOnChangeHandler(event, stockName) {
       this.setState({[stockName]: {price: data.price[stockName], quantity: event.target.value == 0 ? 1 : event.target.value, removeCircleClassName: classes.portfolioCartRowDeleteButton}});
   }
   buttonCLickHandler(type, stockName) {
       if(type === "-") {
            this.setState({[stockName]: {price: data.price[stockName], quantity: this.state[stockName].quantity == 1 ? 1 : this.state[stockName].quantity - 1, removeCircleClassName: classes.portfolioCartRowDeleteButton}});
        }
        else if(type === "+") {
            this.setState({[stockName]: {price: data.price[stockName], quantity: this.state[stockName].quantity + 1, removeCircleClassName: classes.portfolioCartRowDeleteButton}});
        }
   }
   rowMouseEnterHandler(stockName) {
       this.setState({[stockName]: {price: data.price[stockName], quantity: this.state[stockName].quantity, removeCircleClassName: ""}});
   }
   rowMouseOutHandler(stockName) {
       this.setState({[stockName]: {price: data.price[stockName], quantity: this.state[stockName].quantity, removeCircleClassName: classes.portfolioCartRowDeleteButton}});
   }
   rowOnDeleteHandler(stockName) {
       let copyOfState = Object.assign(this.state);
       delete copyOfState[stockName];
       this.setState(copyOfState);
   }
   render() {
       let temp = [];
       let netWorth = 0;
       for(let data in this.state) {
           netWorth += this.state[data].price * this.state[data].quantity;
       }
       for(let data in this.state) {
           temp.push(<PortfolioCartRow stockName={data} stockPrice={this.state[data].price} stockQuantity={this.state[data].quantity} 
               quantityOnChangeHandler = {this.quantityOnChangeHandler.bind(this)} key={data} 
               stockWeight={((this.state[data].price * this.state[data].quantity * 100) / netWorth).toFixed(2)} 
               removeCircleClassName={this.state[data].removeCircleClassName} rowMouseEnterHandler={this.rowMouseEnterHandler.bind(this)} 
               rowMouseOutHandler={this.rowMouseOutHandler.bind(this)} buttonCLickHandler={this.buttonCLickHandler.bind(this)}
               rowOnDeleteHandler={this.rowOnDeleteHandler.bind(this)} />)
       }
       return (
           <div className={classes.portfolioCart}>
               <div>
                   <span>STOCK</span>
                   <span>PRICE</span>
                   <span>SHARES</span>
                   <span>WEIGHT</span>
               </div>
               {temp}
           </div>
       );
   }
}

export default portfolioCart;