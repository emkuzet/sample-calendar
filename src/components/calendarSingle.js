import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router,  Link } from "react-router-dom";

class CalendarSingle extends Component{
    constructor(props){
        super(props)
    }


    render() {
        let singleNote;  
        
        if(this.props.note){
            singleNote = <div className="single-note">{this.props.note}</div>
        }else{
            singleNote = null;
        }

        return(
            <div>
                <Link to={'../add/' + this.props.date }>
                    <div className="single-day">
                    <div className="single-day-number">
                            {this.props.date}
                    </div>
                        {singleNote}
                    </div>
                </Link>
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