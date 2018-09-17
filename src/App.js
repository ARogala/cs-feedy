// import dependencies
import React, { Component } from 'react';
import RSSParser from 'rss-parser';
import { Route } from 'react-router-dom';

// import components
import FeedBtnSearchBar from './components/FeedBtnSearchBar';
import FeedBtnList from './components/FeedBtnList';
import FeedOutput from './components/FeedOutput';
import InputFeedForm from './components/InputFeedForm';
import ManageFeeds from './components/ManageFeeds';
import Navigation from './components/Navigation';
import About from './components/About';
import Instructions from './components/Instructions';
import ScrollTopBtn from './components/ScrollTopBtn';

//import styles
import './App.css';

//import Icons
import gitIcon from './img/github.png';
import linkedinIcon from './img/linkedin.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: {},
      error: null,
      loading: null,
      //pull allFeeds from localStorage or set as an empty array if storage is empty
      allFeeds: JSON.parse(localStorage.getItem('allFeeds') || '[]')
    };
  }

  parseFeed(feedURL) {
    /*
      Note: some RSS feeds can't be loaded in the browser due to CORS security.
      To get around this, you can use a proxy.
      https://github.com/Rob--W/cors-anywhere
      run locally for development and host for production
    */
    const CORS_PROXY = 'http://localhost:8080/';
    // const CORS_PROXY = 'https://mighty-beyond-75753.herokuapp.com/';

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
        <header className="header">
          <h1 className="header__title">CSFeedy</h1>
          <h2 className="header__tagline">Feed Reader</h2>
        </header>

        <Navigation />

        <Route path='/About' render={() => (
          <About />
        )} />

        <Route path='/Instructions' render={() => (
          <Instructions />
        )} />

        <Route path='/AddFeeds' render={() => (
              <InputFeedForm
                allFeeds={this.state.allFeeds}
              />
        )} />


        <Route path='/ManageFeeds' render={() => (
              <ManageFeeds
                allFeeds={this.state.allFeeds}
              />
        )}/>

        <Route exact path='/' render={() => (
          <div>
            <div className="searchBox">
              <FeedBtnSearchBar />
              <FeedBtnList
                allFeeds={this.state.allFeeds}
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
        )}/>

        <footer className="footer">
          <div className="footer__links-box">
            <p>Find me on:</p>
            <a href="https://github.com/ARogala" target="_blank" rel="noopener noreferrer"><img src={gitIcon} alt="GitHub" className="footer__link-logo"/></a>
            <a href="https://www.linkedin.com/in/andrew-rogala" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" className="footer__link-logo"/></a>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
