// import dependencies
import React, { Component } from 'react';
import RSSParser from 'rss-parser';
import { Route } from 'react-router-dom';

// import components
import FeedBtnSearchBar from './components/FeedBtnSearchBar';
import FeedBtnList from './components/FeedBtnList';
import FeedOutput from './components/FeedOutput';
import InputFeedForm from './components/InputFeedForm';
import BackupRestoreFeeds from './components/BackupRestoreFeeds';
import Navigation from './components/Navigation';
import About from './components/About';
import Instructions from './components/Instructions';
import ScrollTopBtn from './components/ScrollTopBtn';
import DeleteFeedBtnList from './components/DeleteFeedBtnList';
import Header from './components/Header';
import EditFeedBtnList from './components/EditFeedBtnList';
import EditFeedForm from './components/EditFeedForm';

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
      allFeeds: JSON.parse(localStorage.getItem('allFeeds') || '[]'),
      filterText: '',
      feedId: 0,
      editFeedName: '',
      editFeedCategory: '',
      editFeedURL: '',
      editFeedId: 0,
      editRenderLogic: false
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
    //const CORS_PROXY = 'https://mighty-beyond-75753.herokuapp.com/';

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

  handleFilterTextChange(filterText) {
    this.setState({filterText: filterText});
  }

  /*
    get the file from the user and use readAsText to read the txt doc
    parse into allFeeds and save allFeeds back to localStorage
    setState then alert user.

    I would like to add Modals instead of alerts.
    Tried condition render in BackupRestoreFeeds but could not find
    a way to set logic back to null without page refresh.
  */
  restoreFeeds(evt) {
    let files = evt.target.files; // FileList object from user
    if(files[0].name === 'CSFeedyBackUp.txt') { //ensure proper file is uploaded
      let file = files[0];
      let reader = new FileReader();
      //readAsText is asynchronous, so need to use the onload callback
      //to see the result
      reader.readAsText(file);
      reader.onload = (event) => {
        let allFeeds = JSON.parse(event.target.result);
        localStorage.setItem('allFeeds', JSON.stringify(allFeeds));
        this.setState({allFeeds: allFeeds});
        alert('Feeds Successfully Restored.');
      }
    }
    else {
      alert('To restore your feeds please upload the same file downloaded as a backup. It is named CSFeedyBackUp.txt');
    }
  }

  saveData(feedName, feedCategory, feedURL) {
    let allFeeds = this.state.allFeeds;
    let feedId = this.state.feedId;
    //push a new empty object on the all feeds array
    allFeeds.push({});

    const newFeedIndex = allFeeds.length - 1;
    //add new feed data to obj in feeds array
    allFeeds[newFeedIndex].name = feedName;
    allFeeds[newFeedIndex].category = feedCategory;
    allFeeds[newFeedIndex].url = feedURL;

    //add feedId
    for(let i = 0; i < allFeeds.length; i++) {
      allFeeds[i].id = feedId;
      feedId = feedId + 1;
    }

    //save new feed array locally
    localStorage.setItem('allFeeds', JSON.stringify(allFeeds));
    this.setState({allFeeds: allFeeds});
    alert('Feed added successfully!');
  }

  deleteSingleFeed(id) {
    const allFeeds = this.state.allFeeds;
    //loop through allFeeds array delete object with matching id
    //set localStorage equal to the modified allFeeds array
    for(let i = 0; i < allFeeds.length; i++) {
      if(allFeeds[i].id === id) {
        allFeeds.splice(i,1);
      }
    }
    localStorage.setItem('allFeeds', JSON.stringify(allFeeds));
    this.setState({allFeeds: allFeeds});
  }

  /*
    The update feeds functionality works as follows:

    EditFeedBtnList will call getFeedToEdit() and pass in the id when a feed btn is clicked
    getFeedToEdit() will loop through allFeeds finding a match to the id
    and setting the editFeed states equal to the current values in storage

    The controlled form component EditFeedForm is passed all the editFeed initial states
    EditFeedForm sets the input fields to these initial states.
    EditFeedForm is passed handleChange() functions for each editFeed state; thus allowing the inputs to update when changed
    EditFeedForm is passed resetEditForm() function to reset the form when called
    EditFeedForm is passed handleEditSubmit() function which gets the edited form data from the inputs,
    adds the new data to allFeeds, saves allFeeds
    to localStorage, sets the allFeeds state, and alerts the user of success.

    EditFeedForm is also passed the feed id so we can track which feed to edit in handleEditSubmit()
  */
  getFeedToEdit(id) {
    const allFeeds = this.state.allFeeds;
    for(let i = 0; i < allFeeds.length; i++) {
      if(allFeeds[i].id === id) {
        //console.log(allFeeds[i]);
        this.setState({editFeedName: allFeeds[i].name});
        this.setState({editFeedCategory: allFeeds[i].category});
        this.setState({editFeedURL: allFeeds[i].url});
        this.setState({editFeedId: allFeeds[i].id});
        this.setState({editRenderLogic: true})
      }
    }
  }

  handleNameChange(e) {
    this.setState({editFeedName: e.target.value});
  }

  handleCategoryChange(e) {
    this.setState({editFeedCategory: e.target.value});
  }

  handleURLChange(e) {
    this.setState({editFeedURL: e.target.value});
  }

  resetEditForm() {
    this.setState({editFeedName: ''});
    this.setState({editFeedCategory: ''});
    this.setState({editFeedURL: ''});
    this.setState({editRenderLogic: false});
  }

  handleEditSubmit(e, newName, newCategory, newURL, id) {
    let allFeeds = this.state.allFeeds;
    e.preventDefault();
    for(let i = 0; i < allFeeds.length; i++) {
      if(allFeeds[i].id === id) {
        allFeeds[i].name = newName;
        allFeeds[i].category = newCategory;
        allFeeds[i].url = newURL;
        //console.log(allFeeds[i]);
      }
    }

    //save new feed array locally
    localStorage.setItem('allFeeds', JSON.stringify(allFeeds));
    this.setState({allFeeds: allFeeds});
    this.setState({editRenderLogic: false});
    alert('Feed updated successfully!');
  }

  //Note: for edit feeds section FeedBtnSearchBar has been rendered in
  //EditFeedBtnList to make conditional rendering logic easier
  render() {
    return (
      <div className="App">

        <Navigation />

        <Route path='/About' render={() => (
          <div>
            <Header />
            <About />
          </div>
        )} />

        <Route path='/Instructions' render={() => (
          <div>
            <Header />
            <Instructions />
          </div>
        )} />

        <Route path='/AddFeeds' render={() => (
              <InputFeedForm
                saveData={(feedName, feedCategory, feedURL) => {
                  this.saveData(feedName, feedCategory, feedURL);
                }}
              />
        )} />

        <Route path='/EditFeeds' render={() => (
            <div className="edit">
              <EditFeedForm
                editFeedName={this.state.editFeedName}
                editFeedCategory={this.state.editFeedCategory}
                editFeedURL={this.state.editFeedURL}
                editFeedId={this.state.editFeedId}
                handleNameChange={(e) => this.handleNameChange(e)}
                handleCategoryChange={(e) => this.handleCategoryChange(e)}
                handleURLChange={(e) => this.handleURLChange(e)}
                resetEditForm={() => this.resetEditForm()}
                handleEditSubmit={(e, newName, newCategory, newURL, id) => this.handleEditSubmit(e, newName, newCategory, newURL, id)}
                editRenderLogic={this.state.editRenderLogic}
              />
              <div className="edit__searchBox">
                <EditFeedBtnList
                  allFeeds={this.state.allFeeds}
                  filterText={this.state.filterText}
                  getFeedToEdit={(id) => {
                    this.getFeedToEdit(id);
                  }}
                  handleFilterTextChange={(filterText) => this.handleFilterTextChange(filterText)}
                  editRenderLogic={this.state.editRenderLogic}
                />
              </div>
            </div>
        )} />

        <Route path='/DeleteFeeds' render={() => (
            <div className="delete__searchBox">
              <FeedBtnSearchBar
                filterText={this.state.filterText}
                handleFilterTextChange={(filterText) =>
                  this.handleFilterTextChange(filterText)}
              />
              <DeleteFeedBtnList
                allFeeds={this.state.allFeeds}
                deleteSingleFeed={(id) => {
                  this.deleteSingleFeed(id);
                }}
                filterText={this.state.filterText}
              />
            </div>

        )} />

        <Route path='/BackupRestoreFeeds' render={() => (
            <div>
              <Header />
              <BackupRestoreFeeds
                restoreFeeds={(evt) => {
                  this.restoreFeeds(evt);
                }}
              />
            </div>
        )}/>

        <Route exact path='/' render={() => (
          <div>
          <Header />
            <div className="searchBox">
              <FeedBtnSearchBar
                filterText={this.state.filterText}
                handleFilterTextChange={(filterText) =>
                  this.handleFilterTextChange(filterText)}
              />
              <FeedBtnList
                allFeeds={this.state.allFeeds}
                handleClick={(feedURL) => {
                  this.setState({loading: true});
                  this.setState({error: null});
                  this.parseFeed(feedURL);
                }}
                filterText={this.state.filterText}
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

        <ScrollTopBtn />

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
