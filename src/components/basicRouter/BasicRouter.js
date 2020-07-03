import React from 'react';
import { Switch, Route, useRouteMatch} from 'react-router-dom';
import Posts from './Posts.js';
import Users from './Users.js';

import './basic-rputer-styles.css';

const BasicRouter = () => {
    let { path, url } = useRouteMatch();
    // console.log(path) //=> /apps-collection/basic-router
    return (
        <>
            <Switch>
                <Route exact path={`${path}/`} component={Users}/>
                <Route path={`${path}/my-posts/:id`} component={Posts}/>
            </Switch>
        </>
    )
}

export default BasicRouter;