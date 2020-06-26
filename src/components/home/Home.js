import React from 'react';
import { Link } from 'react-router-dom';
import './home-styles.css'

const Home = () => {
    return (
        <div className='home-container'>
            <h1>Apps collection</h1>
            <div className='apps-container'>

                <div className='app'>
                    <Link to='/apps-collection/accordion'>
                        <h2>FAQ page</h2>
                    </Link>
                    <ul>
                        <li>Using the accordion approach</li>
                        <li>The questions are local</li>
                    </ul>
                </div>

                <div className='app'>
                    <Link to='/apps-collection/basic-todo'>
                        <h2>Basic Todo</h2>
                    </Link>
                    <ul>
                        <li>Functional Components</li>
                        <li>Add, Remove and Mark a TASK as completed </li>
                    </ul>
                </div>

                <div className='app'>
                    <Link to='/apps-collection/pomodoro-timer'>
                        <h2>Pomodoro Timer</h2>
                    </Link>
                    <ul>
                        <li>Implementing constructor and componentDidMount</li>
                    </ul>
                </div>

                <div className='app'>
                    <Link to='/apps-collection/chart'>
                        <h2>Basic Chart</h2>
                    </Link>
                    <ul>
                        <li>Using C3.js</li>
                        <li>Implementing <code>componentDidUpdate()</code></li>
                        <li>using local cryptocurrencies data</li>
                    </ul>
                </div>

                <div className='app'>
                    <Link to='/apps-collection/sum-all'>
                        <h2>Sum of All Numbers</h2>
                    </Link>
                    <ul>
                        <li>Pure Components</li>
                        <li>Sum of entered numbers</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Home;