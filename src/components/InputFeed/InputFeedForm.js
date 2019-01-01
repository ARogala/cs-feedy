import React from 'react';
import PropTypes from 'prop-types';

import '../FeedForm.css';

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
		this.props.saveData(this.state.feedName, this.state.feedCategory, this.state.feedURL);
		this.resetForm();
	}

	resetForm() {
		this.setState({
			feedName: '',
			feedCategory: '',
			feedURL: ''
		});
	}

	render() {
		return (
			<form className="FeedForm" onSubmit={(e) => this.handleSubmit(e)}>
				<fieldset>
					<legend>Enter RSS feed name, category, and url</legend>
					<div>
						<label htmlFor="name">Feed Name:</label>
						<input
							type="text"
							id="name"
							name="feed_name"
							required
							className="FeedForm__input"
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
							className="FeedForm__input"
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
							className="FeedForm__input"
							value={this.state.feedURL}
							onChange={(e) => this.handleURLChange(e)}
						/>
					</div>

					<div className="FeedForm__btnContainer">
						<button
							type="submit"
							value="Submit"
							className="FeedForm__btn"
						>
							Add Feed
						</button>
						<button
							type="button"
							value="Reset"
							className="FeedForm__btn"
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

InputFeedForm.propTypes = {
	saveData: PropTypes.func.isRequired
}