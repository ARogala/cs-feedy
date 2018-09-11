// import dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import components
import FeedBtnContainer from './components/FeedBtnContainer';
import FeedBtnSearchBar from './components/FeedBtnSearchBar';
import FeedBtnList      from './components/FeedBtnList';
import FeedBtnListItem  from './components/FeedBtnListItem';

//import styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CS Feedy</h1>
        </header>

      </div>
    );
  }
}

export default App;


App.propTypes = {
  allFeeds: PropTypes.array
}