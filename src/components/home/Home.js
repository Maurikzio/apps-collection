import React from 'react';
import './home-styles.css'

const Home = () => {
    return (
        <div className='home-container'>
            <h1>Home</h1>
            <div className='apps-container'>
                <ul>
                    <li>
                        <h2>FAQ page</h2>
                        <div className='app-description'>
                            <p>Using the accordion approach for creating a FAQ page</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;