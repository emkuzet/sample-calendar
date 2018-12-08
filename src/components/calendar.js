import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as R from 'ramda';

class Calendar extends Component {

    constructor(props){
        super(props)

        this.checkinput = this.checkinput.bind(this);
    }

    checkinput(event){
        console.log(event.target.value)
    }
 
    render(){
        return(
            <div>
                <input type='text' onChange={(event) => this.checkinput(event)} />
            </div>
        )
    }
    

}


const stateToProps = state =>{
        return state
};

const actionToProps = dispatch =>({
       // pullData : () => dispatch(pullData())
})


export default connect(stateToProps,actionToProps)(Calendar);