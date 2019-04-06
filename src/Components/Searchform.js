import React, {Component} from 'react';
// import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            searchLocationQuery: ""
        }
    }

    handleSearchChange = (e) => {
        this.setState({
            searchLocationQuery: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
    
        this.props.onFormSubmit(this.state.searchLocationQuery)
    }

    render(){
        return (
            <div className = "searchForm">
               
                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <label 
                    htmlFor = 'location'
                    arialabel = 'enter search term'
                   
                    >I am looking for restraunts</label>
                    <input 
                    type = 'text'
                    id = 'location'
                    placeholder = 'enter search term'
                    value = {this.state.searchLocationQuery}
                
                    />
                   
                </form>
                
            </div>
        );
    }
}

export default SearchForm
