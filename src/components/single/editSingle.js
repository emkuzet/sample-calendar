import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editNote, fetchNote } from '../../actions/actionNote';
import { Link } from "react-router-dom";

//Todo Rewrite //

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

    componentDidMount(){
        this.setInput()
    }

    setInput(){
        const dateBuilder = (this.state.date).split('-');
        const newDate = new Date(dateBuilder[2], dateBuilder[1], dateBuilder[0]);
        const promise = this.props.fetchSingleNote(newDate)
            promise.then( (value) =>{
                this.setState((state)=>{
                    return{
                        note : this.props.editItem[0]
                    }
                })
            }     
        )
    }


    editNote(event){
        let input = event.target.value;
        this.setState((state)=>{
            return {
                note: input
            }
        }
        )
    }

    submitNote(){
        const dateBuilder = (this.state.date).split('-');
        const newDate = new Date(dateBuilder[2], dateBuilder[1], dateBuilder[0]);
        this.props.editSingleNote(newDate, this.state.note);
    }

    render(){
        return(
                <div className="section-edit">
                    <p className="section-title">Edytuj treśc wpisu z dnia { this.props.match.params.date }</p>
                    <input className="section-input" type="text" value={this.state.note} onChange={(e) => this.editNote(e)}  />
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