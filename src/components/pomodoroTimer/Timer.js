import React, { Component } from 'react';
import './timer-styles.css';

class Timer extends Component {
    state = {
        alert: {
            type: '',
            message: ''
        },
        time: 0
    }
    times = {
        defaultTime: 1500,
        shortBreak: 300,
        longBreak: 900
    }

    componentDidMount(){
        //set default time when component mounts
        this.setDefaultTime()
    }

    setDefaultTime = () => {
        this.setState({
            time: this.times.defaultTime
        })
    }

    setTime = newTime => {
        this.restartInterval();

        this.setState({
            time: newTime
        })
    }

    restartInterval = () => {
        //clearing the interval
        clearInterval(this.interval);

        //execute countDound every second
        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        //if the time reach 0 then we diplay Buzzzzz! alert
        if(this.state.time === 0){
            this.setState({
                alert: {
                    type: 'buz',
                    message: 'Buzzzzzz!'
                }
            });
        }else {
            //we decrease the time second by second
            this.setState({
                time: this.state.time - 1
            })
        }
    }

    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work', 
                message: 'Working!'
            }
        });
        return this.setTime(this.times.defaultTime)
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak', 
                message: 'Taking a short break!'
            }
        });
        return this.setTime(this.times.shortBreak)
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak', 
                message: 'Taking a long break!'
            }
        });
        return this.setTime(this.times.shortBreak)
    }

    displayTimer = (seconds) => {
        //formatting the time into mm:ss
        const m = Math.floor(seconds % 3600 / 60);
        const s = Math.floor(seconds % 3600 % 60)

        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }

    render(){
    
        const { alert: { message, type}, time } = this.state;

        return(
            <div className='Pomodoro'>
                <div className={`alert ${type}`}>
                    {message}
                </div>

                <div className='timer'>
                    {this.displayTimer(time)}
                </div>

                <div className='types'>
                    <button className='btn start' onClick={this.setTimeForWork}>Start Working!</button>
                
                    <button className='btn short' onClick={this.setTimeForShortBreak}>Short break!</button>

                    <button className='btn long' onClick={this.setTimeForLongBreak}>longBreak!</button>
                </div>

            </div>
        )
    }
}

export default Timer;