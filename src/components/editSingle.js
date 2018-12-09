import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editNote, addNote } from '../actions/actionNote';

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
        const promise = this.props.fetchSingle(this.props.match.params.date)
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
        console.log(this.props.addSingle(this.state.date, this.state.note))
    }

    render(){

        return(
                <div>
                    <h3>Edytuj treśc wpisu z dnia { this.props.match.params.date }</h3>
                    <input onChange={(e) => this.editNote(e) } name="note" type="text" value={this.state.note} />
                    <button onClick={this.submitNote}> Zapisz </button>
                </div>
        )
    }
}

const stateToProps = state =>{
    return state
};

const actionToProps = dispatch =>({
    fetchSingle : (date) => dispatch(editNote(date)),
    addSingle : (date, note) => dispatch(addNote(date,note))
})


export default connect(stateToProps,actionToProps)(editSingle);