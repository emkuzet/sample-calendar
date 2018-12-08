import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCalendar } from '../actions/action';
import { BrowserRouter as Router,  Link } from "react-router-dom";

class SearchSingle extends Component{

    constructor(props){
        super(props)
        this.editItem = this.editItem.bind(this);
    }

    editItem(id){
        console.log(id);
        this.props.EditCalendar(id);
    }   

    render() {

        let button;  
        
        if(this.props.note){
            button = this.props.note
        }else{
            button = null;
        }

        return(
            <div className="single-day" onClick={(e) => this.editItem(this.props.number)}>
               <Link to={'../add/' + this.props.number } className="single-day-number">
                    {this.props.number}
               </Link>
               <div className="single-note">
                    {button}
                </div>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return state
};

const actionToProps =  dispatch => ({
    EditCalendar : (id) => dispatch(editCalendar(id))
})

export default connect(stateToProps,actionToProps)(SearchSingle);