import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as R from 'ramda';
import { BrowserRouter as Router,  Link } from "react-router-dom";
import './search.scss';
import PropTypes from 'prop-types';

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
        

        const regEx = new RegExp("(" + inputValue + ")");
        const isMatch = n => R.test(regEx, n.note);
        
        const filteredValue = R.filter(
                isMatch , this.props.noteList
            )

        const toSort = filteredValue.map((single) =>  {
            return{
                    date: single.date,
                    sort: single.date.getTime(),
                    note: single.note
                }
            }
        );

        const sortByDate = R.sortBy(R.prop('sort'));
        const sortedbyDate = sortByDate(toSort);

        this.setState((state) => {
                return {
                    filterStatus: true,
                    filter: sortedbyDate
                }
            }
        )
    }
 
    render(){
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
    const allNotesArray =  allNotes.props.map((single) =>  {
        return{
                date: single.date,
                sort: single.date.getTime(),
                note: single.note
            }
        }
    );

    const sortByDate = R.sortBy(R.prop('sort'));
    const sortedbyDate = sortByDate(allNotesArray);



    const allNoteList = sortedbyDate.map( (single , index) => { 
        let singleDate = single.date.getDate() + '-' + single.date.getMonth() + '-' + single.date.getFullYear();


        return  <li className="single-search" key={index}>
                    <div className="single-search-name">{single.note} -  
                        <Link to={'../edit/'+ singleDate} > {single.date.toString()}</Link>
                    </div> 
                </li>
        }
     )

    return(
        <ul>{allNoteList}</ul>
    )
}

function NoteListFilter(input){
    const allNoteList = input.props.map( (single , index) => {
        let singleDate = single.date.getDate() + '-' + single.date.getMonth() + '-' + single.date.getFullYear();
 
        return  <li className="single-search" key={index} >
                    <div className="single-search-name">{single.note} -  
                        <Link to={'../edit/'+ singleDate} > {single.date.toString()}</Link>
                    </div> 
                </li>
        }
     )

     return(
        <ul>{allNoteList}</ul>
    )
}


const stateToProps = state =>{
        return state
};

Search.propTypes = {
    input: PropTypes.array,
}

export default connect(stateToProps)(Search);