import React, { Component } from 'react';


import SearchForm from './Components/Searchform';
import RestaurantList from './Components/RestaurantList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocationQuery: null
    };
  }

  onFormSubmit = (searchLocationQuery) => {
    this.setState({
      searchLocationQuery: searchLocationQuery
    })
  }

  render() {
    return (
      <div className="App">
      
        <SearchForm onFormSubmit = {this.onFormSubmit}/>
      
      </div>
    );
  }
}



export default App;


