import React, { Component } from 'react';
import c3 from 'c3';
import './chart-styles.css';

class Chart extends Component {
    componentDidMount(){
        //when the component mounts the first time we update the chart
        this.updateChart();
    }

    //
    componentDidUpdate(){
        //when we receive a new prop o the prop changes then we update the chart again
        this.updateChart();
    }

    updateChart(){
        c3.generate({
            bindto: '#chart',
            data: {
                columns: this.props.columns,
                type: this.props.chartType
            }
        });
    }

    render(){
        return (
            <div id='chart'></div>
        )
    }
}

export default Chart;