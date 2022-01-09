import './App.css';
import React, { useState, setState } from 'react';
import SearchFlight  from './Pages/SearchFlight/SearchFlight';
import ListFlight from './Pages/ListFlight/ListFlight';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      currentPage: 'SearchFlight',
      filterData: {}
    }

    this.openListPage = this.openListPage.bind(this);
  }

  openListPage(filterData)
  {
    this.setState({currentPage : 'ListFlight', filterData: filterData});
  }

  render() {
    return (
    <div className="App">
        {
          this.state.currentPage === 'SearchFlight' ? <SearchFlight navigate={this.openListPage} /> : <ListFlight filterData={this.state.filterData} />
        }
    </div>
  )};
}

export default App;