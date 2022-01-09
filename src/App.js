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
      filterData: {},
      isComplated: false
    }

    this.openListPage = this.openListPage.bind(this);
    this.openCompletion = this.openCompletion.bind(this);
  }

  render() {
    return (
      <div className="App">
        {
          this.state.currentPage === 'SearchFlight' ?
            <SearchFlight navigate={this.openListPage} />
            : this.state.currentPage === 'ListFlight' ?
             <ListFlight navigate={this.openCompletion} filterData={this.state.filterData} />
             : <Completion isComplated={this.state.isComplated} />
        }
      </div>
    )
  }

  openListPage(filterData) {
    this.setState({ currentPage: 'ListFlight', filterData: filterData });
  }

  openCompletion(isComplated) {
    console.log(isComplated)
    this.setState({ currentPage: 'Completion', isComplated: isComplated });
  }
}

export default App;