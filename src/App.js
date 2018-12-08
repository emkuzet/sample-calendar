import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchDataSuccess } from './actions/actionsFetch';
import { fillNote } from './actions/actionNote';
import Search from "./components/search";
import Calendar from "./components/calendar";
import './App.scss';

const Index = () => <h2>Home</h2>;


class App extends Component {

  componentWillMount(){

     const currentMonth = new Date().getMonth() + "-" +  new Date().getFullYear() 
     this.props.pullApi( currentMonth );
  }

  componentDidMount(){
   
  }

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

const stateToProps = (state) => {
  return state
};

const actionToProps =  dispatch => (
  {
    pullApi : (currentMonth) => dispatch(fetchDataSuccess(currentMonth))
  }
)

export default connect(stateToProps,actionToProps)(App);
