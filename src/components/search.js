import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCalendar, fillCalendar } from '../actions/action';
import { fetchDataSuccess } from '../actions/actionsFetch';
import SearchSingle from './searchSingle';
import PropTypes  from 'prop-types';
import './search.scss';

class Search extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentMonth : new Date().getMonth(),
            currentYear : new Date().getFullYear()
        }

        this.FillCalendar = this.FillCalendar.bind(this);
        this.createCalendarOnInit = this.createCalendarOnInit.bind(this);
        this.createCalendarNext = this.createCalendarNext.bind(this);
        this.createCalendarPrev = this.createCalendarPrev.bind(this);
    }

    createCalendarNext(){
        this.setState((state) => {
            return { currentMonth: state.currentMonth + 1};
        });
          
        this.props.createCalendarOnInit( this.state.currentMonth, this.state.currentYear )
    }

    createCalendarPrev(){
        this.setState((state) => {
            return { currentMonth: state.currentMonth - 1};
        });

        this.props.createCalendarOnInit( this.state.currentMonth, this.state.currentYear )
    }

    createCalendarOnInit(){

        this.props.createCalendarOnInit(this.state.currentMonth, this.state.currentYear)
    }

    FillCalendar(){
        this.props.FillCalendar(this.props.sampleData);
    }

    componentDidMount(){
        let currentMonth = new Date().getMonth() + 1;
        let currentYear= new Date().getFullYear();

        this.props.createCalendarOnInit(currentMonth, currentYear)
        this.props.PullApi();
    }

    
    render() {
        console.log(this.state.currentMonth);

        return(
            <div className="Container">
                 <div className="Navigation">
                    <div className="nextMonth" onClick={this.createCalendarNext}> NextMonth </div>
                    <div className="resetData" onClick={this.createCalendarOnInit}> Reset </div>
                    <div className="fetchData" onClick={this.FillCalendar}> Fetch Data </div>
                    <div className="prevMonth" onClick={this.createCalendarPrev}> PrevMonth </div>
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
    createCalendarOnInit : (inputMonth, inputYear) => dispatch(createCalendar(inputMonth, inputYear)),
    FillCalendar : (sampleData) => dispatch(fillCalendar(sampleData))
})

Search.propTypes = {
    PullApi: PropTypes.func.isRequired
}

export default connect(stateToProps,actionToProps)(Search);