import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export class CalendarSingle extends Component{
    
    render() {

        let singleNote;  
        let singleDate = this.props.date.getDate() + '-' + this.props.date.getMonth() + '-' + this.props.date.getFullYear();
        
        if(this.props.note){
            singleNote = 
            <Link to={'../add/' + singleDate }>
                <div className="single-day">
                <div className="single-day-number">
                    {singleDate}    
                </div>
                    <div className="single-box">
                        {this.props.note.map((single,index) =>
                            <div key={index} className="single-note">{single.note}</div>
                        )}
                    </div>
               
                </div>
            </Link>
        }else{
            singleNote = 
            <Link to={'../add/' + singleDate }>
                <div className="single-day">
                <div className="single-day-number">
                    {singleDate}                       
                </div>
                </div>
            </Link>
        }

        return(
            <div>
                {singleNote}
            </div>

        )
    }
}

CalendarSingle.propTypes = {
    note: PropTypes.array,
    date: PropTypes.object
}

export default CalendarSingle;