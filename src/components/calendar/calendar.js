import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCalendar, editCalendar, updateCalendar } from '../../actions/action';
import CalendarSingle from './calendarSingle';
import './calendar.scss';
import PropTypes from 'prop-types';

export class Calendar extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentMonth : new Date().getMonth(),
            currentYear : new Date().getFullYear()
        }
        this.createCalendarOnInit = this.createCalendarOnInit.bind(this);
        this.increaseMonth = this.increaseMonth.bind(this);
        this.decreaseMonth = this.decreaseMonth.bind(this);
    }

    createCalendarOnInit(){
        this.props.createCalendarOnInit(this.state.currentMonth, this.state.currentYear)
    }

    increaseMonth(){
        this.setState((state) => {
            this.props.createCalendarOnInit(state.currentMonth + 1, this.state.currentYear)
            this.props.updateCalendar(this.props.noteList )
            return {  currentMonth: state.currentMonth + 1  }
        })
    }

    decreaseMonth(){
        this.setState((state) => {
            this.props.createCalendarOnInit(state.currentMonth - 1, this.state.currentYear)
            this.props.updateCalendar(this.props.noteList )
            return {  currentMonth: state.currentMonth - 1  }
        })
    }

    componentDidMount(){
        this.props.createCalendarOnInit(this.state.currentMonth, this.state.currentYear)
        this.props.updateCalendar(this.props.noteList )
    }

    render() {
        return(
                <div>
                    <div className="navigation">
                        <ul className="main-nav">
                            <li className="main-nav-item" onClick={this.increaseMonth}> Zwiększ </li>
                            <li className="main-nav-item" onClick={this.decreaseMonth}> Zmniejsz </li>
                        </ul>
                      
                    </div>
                    <div className="calendar">
                        {this.props.calendarItem.map((days, index)  => 
                            <CalendarSingle key={index} date={days.date} note={days.note} />
                        )}
                    </div>    
                </div>       
        );
    }
};


Calendar.propTypes = {
    createCalendarOnInit: PropTypes.func,
    increaseMonth: PropTypes.func,
    decreaseMonth: PropTypes.func,
    editCalendar: PropTypes.func,
    updateCalendar: PropTypes.func
}


const stateToProps = (state) => {
       return state
};

const actionToProps =  dispatch => ({
    createCalendarOnInit : (inputMonth, inputYear) => dispatch(createCalendar(inputMonth, inputYear)),
    editCalendar : (sampleData) => dispatch(editCalendar(sampleData)),
    updateCalendar : (sampleData ) => dispatch(updateCalendar(sampleData))
})

export default connect(stateToProps,actionToProps)(Calendar);