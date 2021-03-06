import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNote } from '../../actions/actionNote';
import { Link } from "react-router-dom";

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
       const dateBuilder = (this.state.date).split('-')
       const newDate = new Date(dateBuilder[2], dateBuilder[1], dateBuilder[0])

       this.props.addSingle(newDate, this.state.note);
    }

    render(){       
        return(
                <div className="section-add">
                    <p className="section-title">Dodaj nowy wpis { this.props.match.params.date }</p>
                    <input className="section-input" onChange={(e) => this.editNote(e) } name="note" type="text" />
                    <Link className="section-submit" to="/" onClick={this.submitNote}>Zapisz</Link>
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