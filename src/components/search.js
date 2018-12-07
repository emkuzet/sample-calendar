import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDataSuccess, createCalendar, fillCalendar } from '../actions/action';
import SearchSingle from './searchSingle';
import PropTypes  from 'prop-types';
import './search.scss';

class Search extends Component {

    constructor(props){
        super(props)
        this.FillCalendar = this.FillCalendar.bind(this);
        this.createCalendar = this.createCalendar.bind(this);
    }

    createCalendar(){
        this.props.CreateCalendar()
    }

    FillCalendar(){
        this.props.FillCalendar(this.props.sampleData);
    }

    componentDidMount(){
        this.props.CreateCalendar()
        this.props.PullApi();
    }

    
    render() {

        return(
            <div className="Container">
                 <div className="Navigation">
                    <div className="nextMonth"> NextMonth </div>
                    <div className="resetData" onClick={this.createCalendar}> Reset </div>
                    <div className="fetchData"  onClick={this.FillCalendar}> Fetch Data </div>
                    <div className="prevMonth"> PrevMonth </div>
                </div>

                 <div className="Calendar">
                    {this.props.calendarItem.map((days, index )  => 
                        <SearchSingle key={index} number={days.id} note={days.note} /> , this
                    )}
                </div>
            </div>
           
        );
    }
};

const stateToProps = (state) => {
       return state
};

const actionToProps =  dispatch => ({
    PullApi : () => dispatch(fetchDataSuccess()),
    CreateCalendar : () => dispatch(createCalendar()),
    FillCalendar : (sampleData) => dispatch(fillCalendar(sampleData))
})

Search.propTypes = {
    PullApi: PropTypes.func.isRequired,
    CreateCalendar: PropTypes.func.isRequired
}

export default connect(stateToProps,actionToProps)(Search);