import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchDataSuccess } from './actions/actionsFetch';
import Search from "./components/search";
import Calendar from "./components/calendar";
import editSingle from "./components/editSingle";
import addSingle from "./components/addSingle";
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
              <ul className="main-nav">
                <li className="main-nav-item">
                  <Link to="/">Kalendarz</Link>
                </li>
                <li className="main-nav-item">
                  <Link to="/search/">Przeglądaj</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={Calendar} />
            <Route path="/search/" component={Search} />
            <Route path="/edit/:date" component={editSingle} />
            <Route path="/add/:date" component={addSingle} />
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
