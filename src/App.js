import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "./components/search";
import Calendar from "./components/calendar";
import './App.scss';

const Index = () => <h2>Home</h2>;


class App extends Component {
  render() {
    return (
        <Router>
           <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/search/">search</Link>
                </li>
                <li>
                  <Link to="/calendar/">calendar</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/Search/" component={Search} />
            <Route path="/Calendar/" component={Calendar} />
          </div>
        </Router>
    );
  }
}

export default App;
