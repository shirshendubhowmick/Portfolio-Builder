import React, { Component } from 'react';
import classes from './PortfolioGraph.css'
import {Line} from 'react-chartjs-2';
import data from '../data.json'

class portfolioGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {graphData: [], displayGraph: false};
        this.chartData = {
            labels: data.historical.KALE.point.map(dateObj => new Date(dateObj.date).toLocaleDateString("en-IN", {day: 'numeric', month: 'numeric'})),
            datasets: [
              {
                label: 'Net Worth',
                fill: true,
                lineTension: 0,
                backgroundColor: 'rgba(130, 176, 228, 0.8)',
                borderColor: 'rgba(130, 176, 228, 1)',
                borderCapStyle: 'butt',
                borderJoinStyle: 'miter',
                borderWidth: 1,
                pointBorderColor: 'rgba(130, 176, 228, 1)',
                pointBackgroundColor: 'rgba(130, 176, 228, 1)',
                pointHoverRadius: 2,
                pointHoverBackgroundColor: '#1D70CA',
                pointHoverBorderColor: '#1D70CA',
                pointHoverBorderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 10,
                data: []
              }
            ]
        };
        this.options = {
            scales: {
                xAxes: [{
                  gridLines: {
                    display: false
                  }
                }]
            },
            legend: {
                display: false
            }
        }
    }
    updateGraph(portfolioCartStateData) {
        if (Object.getOwnPropertyNames(portfolioCartStateData).length) {
            let netWorthArray = Array(data.historical.KALE.point.length);
            netWorthArray.fill(0);
            netWorthArray = netWorthArray.map((value, index) => {
                let dayNetWorth = 0;
                for(let stock in portfolioCartStateData) {
                    dayNetWorth += Math.round(data.historical[stock].point[index].price * portfolioCartStateData[stock].quantity);
                }
                return dayNetWorth;
            });
            this.setState({graphData: netWorthArray, displayGraph: true});
        }
        else {
            this.setState({graphData: [], displayGraph: false});
        }
    }
    render() {
        let graphDivContent = <div className={classes.noStocksMessageDiv}>No stocks in portfolio</div>;
        if(this.state.displayGraph) {
            this.chartData.datasets[0].data = this.state.graphData;
            graphDivContent = <div className={classes.chartContainerDiv}><span>VALUE</span><span>TIME</span><Line data={this.chartData} options={this.options}/></div>
        }
        return (
            <div className={classes.portfolioGraphDiv}>
                <span>Portfolio Overview</span>
                <div className={classes.chartDiv}>
                    {graphDivContent}
                </div>
            </div>
        );
    }
};

export default portfolioGraph;