import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editNote, fetchNote } from '../actions/actionNote';
import { BrowserRouter as Router,  Link } from "react-router-dom";

class editSingle extends Component {

    constructor(props){
        super(props)
        this.state = {
            date: this.props.match.params.date ,
            note: ''
        }
        this.editNote = this.editNote.bind(this);
        this.submitNote = this.submitNote.bind(this);
    }

    componentWillMount(){
        this.setInput()
    }

    setInput(){
        const promise = this.props.fetchSingleNote(this.props.match.params.date)
            promise.then( (value) =>{
                this.setState((state)=>{
                    return{
                        note : this.props.editItem[0]
                    }
                })
            }     
        )
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
        this.props.editSingleNote(this.state.date, this.state.note)
    }

    render(){
        return(
                <div className="section-edit">
                    <p className="section-title">Edytuj treśc wpisu z dnia { this.props.match.params.date }</p>
                    <input className="section-input" onChange={(e) => this.editNote(e) } name="note" type="text" value={this.state.note} />
                    <Link className="section-submit" to='/search' onClick={this.submitNote}> Zapisz </Link>
                </div>
        )
    }
}

const stateToProps = state =>{
    return state
};

const actionToProps = dispatch =>({
    fetchSingleNote : (date) => dispatch(fetchNote(date)),
    editSingleNote : (date, note) => dispatch(editNote(date,note))
})

export default connect(stateToProps,actionToProps)(editSingle);