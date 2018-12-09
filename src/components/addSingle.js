import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNote } from '../actions/actionNote';

class addSingle extends Component{
    constructor(props){
        super(props)
        this.state = {
            date: this.props.match.params.date ,
            note: ''
        }

        this.editNote = this.editNote.bind(this);
        this.submitNote = this.submitNote.bind(this);
    }

    editNote(e){
        let input = e.target.value;
        this.setState((state)=>{
            return {
                note: input
            }
        })
    }

    submitNote(){
       this.props.addSingle(this.state.date, this.state.note);
    }

    render(){
        return(
                <div>
                    <div className="menu-title">Dodaj nowy wpis { this.props.match.params.date }</div>
                    <input onChange={(e) => this.editNote(e) } name="note" type="text" />
                    <button onClick={this.submitNote}> Zapisz </button>
                </div>
        )
    }
}

const stateToProps = state =>{
    return state
};

const actionToProps = dispatch =>({
    addSingle:(date, note) => dispatch(addNote(date,note))
})


export default connect(stateToProps,actionToProps)(addSingle);