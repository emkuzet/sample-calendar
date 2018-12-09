import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as R from 'ramda';
import { BrowserRouter as Router,  Link } from "react-router-dom";
import './search.scss';

class Search extends Component {

    constructor(props){
        super(props)

        this.state = {
            filterStatus: false,
            filter: []
        };
        this.checkinput = this.checkinput.bind(this);
    }

    checkinput(event){
        let inputValue = event.target.value;
        

        const regex = new RegExp("(" + inputValue + ")");
        const isEven = n => R.test(regex, n.note);
        
        const filteredValue = R.filter(
                isEven , this.props.noteList
            )

        const sortByDate = R.sortBy(R.prop('date'));
        const sortedbyDate = sortByDate(filteredValue);

        this.setState((state) => {
                return {
                    filterStatus: true,
                    filter: sortedbyDate
                }
            }
        )
    }
 
    render(){
        console.log(this.state.filter);
        let dataToShow 

        if( this.state.filterStatus){
            
          dataToShow = <NoteListFilter props={this.state.filter}/>
        
        }else{

            dataToShow = <NoteList props={this.props.noteList}/>
        };


        return(
            <div className="input-container">
                <input className="input" type='text' onChange={(event) => this.checkinput(event)} />
                {dataToShow}
            </div>
        )
    }
    
}

function NoteList(props){
    
    const allNotes = props ? props : null;

    const sortByDate = R.sortBy(R.prop('date'));
    const sortedbyDate = sortByDate(allNotes.props);


    const allNoteList = sortedbyDate.map( (single , index) => 
        <li key={index}>
            <Link to={'../edit/'+ single.date} > {single.date} </Link>
            {single.note}
        </li>
     )

    return(
        <ul>{allNoteList}</ul>
    )
}

function NoteListFilter(input){
    const allNoteList = input.props.map( (single , index) => 
        <li key={index} >
            <Link to={'../edit/'+ single.date} > {single.date} </Link>
            {single.note}
        </li>
     )

     return(
        <ul>{allNoteList}</ul>
    )
        
}


const stateToProps = state =>{
        return state
};

const actionToProps = dispatch =>({
    
})


export default connect(stateToProps,actionToProps)(Search);