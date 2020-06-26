import React, { Component } from 'react';
import Numbers from './Numbers';

const headerStyle = {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    fontSize: '30px',
    padding: '10px'
}

class SumAll extends Component {
    render(){
        return(
            <div>
                <h1 style={headerStyle}>Sum of all Numbers</h1>
                <Numbers/>
            </div>
        ) 

    }
}

export default SumAll;