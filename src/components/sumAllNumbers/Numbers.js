import React, { Component } from 'react';
import Result from './Result';
import './numbers-style.css';

class Numbers extends Component {

    state = {
        numbers: '', //to save the input value 
        results: [] //to save the results of the sums
    };

    handleNumberChange = e => {
        const { target: { value } } = e;

        //converting the string value to array: '1234' => ['1', '2', '3', '4'];
        const numbers = Array.from(value);

        //summing all the numbers from the array; ['1', '2', '3', '4'] => 10
        const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);

        //updating the local state
        this.setState({
            numbers: value,
            results: [...this.state.results, result]
        })
    }

    render(){
        return(
            <div className='Numbers'>
                <input
                    type='number'
                    value={this.state.numbers}
                    onChange={this.handleNumberChange}
                />
                <ul>
                    {
                        this.state.results.map((result, i) => (
                            <Result key={i} result={result}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Numbers;