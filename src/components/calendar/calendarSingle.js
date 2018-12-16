import React, { Component } from 'react';
import { BrowserRouter as Router,  Link } from "react-router-dom";

export class CalendarSingle extends Component{
    constructor(props){
        super(props)
    }

    render() {
        let singleNote;  
        
        if(this.props.note){
            singleNote = 
            <Link to={'../add/' }>
                <div className="single-day">
                <div className="single-day-number">
                    {(this.props.date.getDate()) + '-' +(this.props.date.getMonth()) + '-' + (this.props.date.getFullYear())}    
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
            <Link to={'../add/' + this.props.date }>
                <div className="single-day">
                <div className="single-day-number">
                    {(this.props.date.getDate()) + '-' +(this.props.date.getMonth()) + '-' + (this.props.date.getFullYear())}                       
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

export default CalendarSingle;