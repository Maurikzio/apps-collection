import React,  { Component } from 'react';
import Chart from './Chart';
import './main-styles.css';

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            chartType: 'line'
        };

        this.columns = [
            ['BTC', 300, 600, 10000, 15000, 13000, 11000],
            ['ETH', 2000, 3000, 5000, 4000, 3000, 940],
            ['XRP', 100, 200, 300, 500, 400, 300]
        ];
    }

    setBarChart = () => {
        this.setState({
            chartType: 'bar'
        });
    }

    setLineChart = () => {
        this.setState({
            chartType: 'line'
        });
    }

    render(){
        return(
            <div className='Main'>
                <header>
                    <h1>Chart</h1>
                </header>
                <section>
                    <Chart columns={this.columns} chartType={this.state.chartType}/>
                    <p>
                        Chart Type
                        <button className='btn-chart' onClick={this.setBarChart}>Bar</button>
                        <button className='btn-chart' onClick={this.setLineChart}>Line</button>
                    </p>
                </section>
            </div>
        )
    }
}

export default Main;