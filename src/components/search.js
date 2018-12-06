import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDataSuccess } from '../actions/action';
import SearchSingle from './searchSingle';
import PropTypes  from 'prop-types';

class Search extends Component {

    componentDidMount(){
        this.props.Test()
    }
    
    render() {
        console.log( this.props);
        return(
            <SearchSingle/>
        );
    }
}

const stateToProps = (state) => {
       return state.sampleData
};

const actionToProps =  dispatch => ({
        Test : () => dispatch(fetchDataSuccess())
})

Search.propTypes = {
    Test: PropTypes.func.isRequired
}

export default connect(stateToProps,actionToProps)(Search);