import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import Home from './components/home/Home';
import FAQ from './components/faq/FAQ';
import Todo from './components/basicTodo/Todo';
import Timer from './components/pomodoroTimer/Timer';
import Main from './components/chart/Main';

const routes = [
  {
    path: "/apps-collection",
    exact: true,
    name: "Home",
    component: <Home/>
  },
  {
    path: "/apps-collection/accordion",
    name: "FAQ page",
    component: <FAQ/>
  },
  {
    path: "/apps-collection/basic-todo",
    name: "Basic Todo",
    component: <Todo/>
  },
  {
    path: "/apps-collection/pomodoro-timer",
    name: "Pomodoro Timer",
    component: <Timer/>
  },
  {
    path: "/apps-collection/chart",
    name: "Basic Chart",
    component: <Main/>
  }
]

function App() {
  return (
    <div className="App">
      <Router>
        <div className='inner-container'>
          <section className="sidebar">
            <h1>Apps 💪</h1>
            <ul>
              {
                routes.map((route, index) => (
                  <li key={index}>
                    <Link to={route.path}>{route.name}</Link>
                  </li>
                ))
              }
            </ul>
          </section>
          <section className='content'>
            <Switch>
                {
                  routes.map((route, index) => (
                    <Route exact={route.exact} key={index} path={route.path} children={route.component}/>
                  ))
                }
              </Switch>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
