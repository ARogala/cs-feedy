import React from 'react';

class InputFeedForm extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			feedName: '',
			feedCategory: '',
			feedURL: ''
		};
	}

	handleNameChange(e) {
		this.setState({feedName: e.target.value});
	}

	handleCategoryChange(e) {
		this.setState({feedCategory: e.target.value});
	}

	handleURLChange(e) {
		this.setState({feedURL: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.feedName);
		console.log(this.state.feedCategory);
		console.log(this.state.feedURL);
		this.saveData(this.state.feedName, this.state.feedCategory, this.state.feedURL)
	}

	resetForm() {
		this.setState({
			feedName: '',
			feedCategory: '',
			feedURL: ''
		});
	}

	saveData(feedName, feedCategory, feedURL) {
		let allFeeds = this.props.allFeeds;
		//push a new empty object on the all feeds array
		allFeeds.push({});

		const newFeedIndex = allFeeds.length - 1;
		//add new feed data to obj in feeds array
		allFeeds[newFeedIndex].name = feedName;
		allFeeds[newFeedIndex].category = feedCategory;
		allFeeds[newFeedIndex].url = feedURL;
		//save new feed array locally
		localStorage.setItem('allFeeds', JSON.stringify(allFeeds));
	    this.resetForm();
	    alert('Feed added successfully!');

	}

	render() {
		return (
			<form id="feedData" className="feedForm" onSubmit={(e) => this.handleSubmit(e)}>
				<fieldset>
					<legend>Enter RSS feed name, category, and url</legend>
					<div>
						<label htmlFor="name">Feed Name:</label>
						<input
							type="text"
							id="name"
							name="feed_name"
							required
							className="feedForm__input"
							value={this.state.feedName}
							onChange={(e) => this.handleNameChange(e)}
						/>
					</div>
					<div>
						<label htmlFor="category">Feed Category:</label>
						<input
							type="text"
							id="category"
							name="feed_category"
							required
							className="feedForm__input"
							value={this.state.feedCategory}
							onChange={(e) => this.handleCategoryChange(e)}
						/>
					</div>
					<div>
						<label htmlFor="url">Feed URL:</label>
						<input
							type="url"
							id="url"
							name="feed_url"
							placeholder="http://example.com/feed"
							required
							className="feedForm__input"
							value={this.state.feedURL}
							onChange={(e) => this.handleURLChange(e)}
						/>
					</div>

					<div className="btnContainer">
						<button
							type="submit"
							value="Submit"
							className="feedForm__Btn1"
						>
							Add Feed
						</button>
						<button
							type="button"
							value="Reset"
							className="feedForm__Btn1"
							onClick={() => this.resetForm()}
						>
							Cancel
						</button>
					</div>
				</fieldset>
			</form>
		);
	}
}

export default InputFeedForm;