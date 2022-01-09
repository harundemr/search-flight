import './App.css';
import React from 'react';
import SearchFlight from './Pages/SearchFlight/SearchFlight';
import ListFlight from './Pages/ListFlight/ListFlight';
import Completion from './Pages/Completion/Completion';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'SearchFlight',
      filteredFlight: {},
      searchData: {},
      isComplated: false
    }

    this.openSearchFlight = this.openSearchFlight.bind(this);
    this.openListFlight = this.openListFlight.bind(this);
    this.openCompletion = this.openCompletion.bind(this);
  }

  render() {
    return (
      <div className="App">
        {
          this.state.currentPage === 'SearchFlight' ?
            <SearchFlight navigate={this.openListFlight} />
            : this.state.currentPage === 'ListFlight' ?
             <ListFlight navigate={this.openCompletion} searchData={this.state.searchData} filteredFlight={this.state.filteredFlight} />
             : <Completion navigate={this.openSearchFlight} isComplated={this.state.isComplated} />
        }
      </div>
    )
  }

  openSearchFlight() {
    this.setState({ currentPage: 'SearchFlight'});
  }
  
  openListFlight(searchData, filteredFlight) {
    this.setState({ currentPage: 'ListFlight', searchData: searchData, filteredFlight: filteredFlight });
  }

  openCompletion(isComplated) {
    this.setState({ currentPage: 'Completion', isComplated: isComplated });
  }

}

export default App;