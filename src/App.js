import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import Home from './components/home/Home';
import FAQ from './components/faq/FAQ';
import Todo from './components/basicTodo/Todo';
import Timer from './components/pomodoroTimer/Timer';
import Main from './components/chart/Main';
import SumAll from './components/sumAllNumbers/SumAll';
import Pagination from './components/pagination/Pagination';
import InfiniteScrolling from './components/infiniteScrolling/InfiniteScrolling';
import BasicRouter from './components/basicRouter/BasicRouter';
import SimpleForm from './components/simple-form/SimpleForm';
import ProductsList from './components/votingApp/ProductsList';

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
    exact: true,
    component: <FAQ/>
  },
  {
    path: "/apps-collection/basic-todo",
    name: "Basic Todo",
    exact: true,
    component: <Todo/>
  },
  {
    path: "/apps-collection/pomodoro-timer",
    name: "Pomodoro Timer",
    exact: true,
    component: <Timer/>
  },
  {
    path: "/apps-collection/chart",
    name: "Basic Chart",
    exact: true,
    component: <Main/>
  },
  {
    path: "/apps-collection/sum-all",
    name: "Sum all Numbers",
    exact: true,
    component: <SumAll/>
  },
  {
    path: "/apps-collection/pagination",
    name: "Pagination",
    exact: true,
    component: <Pagination/>
  },
  {
    path: "/apps-collection/infinite-scrolling",
    name: "Infinite Scrolling",
    exact: true,
    component: <InfiniteScrolling/>
  },
  {
    path: "/apps-collection/basic-router",
    name: "Basic Router",
    // exact: true,
    component: <BasicRouter/>
  },
  {
    path: "/apps-collection/simple-form",
    name: "Simple Form",
    // exact: true,
    component: <SimpleForm/>
  },
  {
    path: "/apps-collection/voting-app",
    name: "Voting App",
    // exact: true,
    component: <ProductsList/>
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
