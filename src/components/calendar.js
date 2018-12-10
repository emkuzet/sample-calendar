import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCalendar, editCalendar, updateCalendar } from '../actions/action';
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
                 <div className="Calendar">
                    {this.props.calendarItem.map((days, index )  => 
                        <CalendarSingle key={index} date={days.date} note={days.note} /> , this
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
    editCalendar : (sampleData) => dispatch(editCalendar(sampleData)),
    updateCalendar : (sampleData ) => dispatch(updateCalendar(sampleData))
})

export default connect(stateToProps,actionToProps)(Calendar);