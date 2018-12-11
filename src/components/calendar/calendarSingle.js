import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router,  Link } from "react-router-dom";

export class CalendarSingle extends Component{
    constructor(props){
        super(props)
    }


    render() {
        let singleNote;  
        
        if(this.props.note){
            singleNote = 
            <Link to={'../add/' + this.props.date }>
                <div className="single-day">
                <div className="single-day-number">
                        {this.props.date}
                </div>
                    <div className="single-box">
                    {this.props.note.map((single,index) =>
                        <div className="single-note">{single.note}</div>
                    )}
                    </div>
               
                </div>
            </Link>
        }else{
            singleNote = <Link to={'../add/' + this.props.date }>
            <div className="single-day">
            <div className="single-day-number">
                    {this.props.date}
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


const stateToProps = (state) => {
    return state
};

const actionToProps =  dispatch => ({
})

export default connect(stateToProps,actionToProps)(CalendarSingle);