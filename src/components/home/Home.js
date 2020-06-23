import React from 'react';
import { Link } from 'react-router-dom';
import './home-styles.css'

const Home = () => {
    return (
        <div className='home-container'>
            <h1>My Apps collection</h1>
            <div className='apps-container'>

                <div className='app'>
                    <Link to='/accordion'>
                        <h2>FAQ page</h2>
                    </Link>
                    <ul>
                        <li>Using the accordion approach</li>
                        <li>The questions are local</li>
                    </ul>
                </div>

                <div className='app'>
                    <h2>APP 2</h2>
                    <ul>
                        <li>Lorem impsum hety yur sec</li>
                        <li>abc defg hijk lmnops</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Home;