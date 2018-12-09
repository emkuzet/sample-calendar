import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCalendar, fillCalendar, updateCalendar } from '../actions/action';
import CalendarSingle from './calendarSingle';
import './calendar.scss';

class Calendar extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentMonth : new Date().getMonth(),
            currentYear : new Date().getFullYear()
        }
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

    componentDidMount(){
        let currentMonth = new Date().getMonth();
        let currentYear= new Date().getFullYear();

        this.props.createCalendarOnInit(currentMonth, currentYear)
        this.props.updateCalendar(this.props.noteList )
    }

    
    render() {
 
        return(
            <div>
                 <ul className="Navigation">
                    <li className="nextMonth" onClick={this.createCalendarNext}> Następny miesiąc </li>
                    <li className="prevMonth" onClick={this.createCalendarPrev}> Wcześniejszy miesiąc </li>
                </ul>

                 <div className="Calendar">
                    {this.props.calendarItem.map((days, index )  => 
                        <CalendarSingle key={index} number={days.date} note={days.note} /> , this
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
    createCalendarOnInit : (inputMonth, inputYear) => dispatch(createCalendar(inputMonth, inputYear)),
    FillCalendar : (sampleData) => dispatch(fillCalendar(sampleData)),
    updateCalendar : (sampleData ) => dispatch(updateCalendar(sampleData))
})

export default connect(stateToProps,actionToProps)(Calendar);