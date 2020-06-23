import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import Accordion from './components/accordion/Accordion';
import Home from './components/home/Home';

const App2 = () =>{
  return <h2>App2</h2>
}

const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: <Home/>
  },
  {
    path: "/accordion",
    name: "Accordion static data",
    component: <Accordion/>
  },
  {
    path: "/app2",
    name: "App 2",
    component: <App2/>
  }
]

function App() {
  return (
    <div className="App">
      <Router>
      <div className='inner-container'>
          <section className="sidebar">
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
