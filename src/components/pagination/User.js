import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const User = ({username, name, userId}) => {
    return (
        <React.Fragment>
                    <p>{name}</p>
        </React.Fragment>
    )
}

export default User;