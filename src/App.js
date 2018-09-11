// import dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import components
import FeedBtnSearchBar from './components/FeedBtnSearchBar';
import FeedBtnList from './components/FeedBtnList';

//import styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CS Feedy</h1>
        </header>

        <div className="searchBox">
          <FeedBtnSearchBar />
          <FeedBtnList />
        </div>

      </div>
    );
  }
}

export default App;


App.propTypes = {
  allFeeds: PropTypes.array
}