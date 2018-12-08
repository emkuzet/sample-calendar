import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCalendar } from '../actions/action';


class SearchSingle extends Component{

    constructor(props){
        super(props)
        this.editItem = this.editItem.bind(this);
    }

    editItem(id){
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
               <div className="single-day-number">
                    {this.props.number}
               </div>
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