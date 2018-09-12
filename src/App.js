// import dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RSSParser from 'rss-parser';

// import components
import FeedBtnSearchBar from './components/FeedBtnSearchBar';
import FeedBtnList from './components/FeedBtnList';
import FeedOutput from './components/FeedOutput';
import InputFeedForm from './components/InputFeedForm';


//import styles
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: {},
      error: null,
      loading: null
    };
  }

  parseFeed(feedURL) {
    // Note: some RSS feeds can't be loaded in the browser due to CORS security.
    // To get around this, you can use a proxy.
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

    RSSParser.parseURL(CORS_PROXY + feedURL, (err, parsed) => {
      //console.log(err);
      //console.log(parsed);
      /*
        when the parser throws an error parsed will be undefined
      */
      if(err !== null) {
        this.setState({error: err});
        this.setState({loading: false});
      }
      else {
        this.setState({feed: parsed.feed});
        this.setState({loading: false});
      }

    });

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CS Feedy</h1>
        </header>
        <InputFeedForm />

        <div className="searchBox">
          <FeedBtnSearchBar />
          <FeedBtnList
            allFeeds={this.props.allFeeds}
            handleClick={(feedURL) => {
              this.setState({loading: true});
              this.setState({error: null});
              this.parseFeed(feedURL);
            }}
          />
        </div>

        <main role="main" className="feedOutput">
          <FeedOutput
            feed={this.state.feed}
            error={this.state.error}
            loading={this.state.loading}
          />
        </main>

      </div>
    );
  }
}

export default App;


App.propTypes = {
  allFeeds: PropTypes.array.isRequired
}