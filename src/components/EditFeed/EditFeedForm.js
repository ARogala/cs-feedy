import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import '../FeedForm.css';

function success() {
	toast.success(`Feed updated successfully!`, {
		position: toast.POSITION.TOP_CENTER
	});
}

function EditFeedForm(props) {
	const editRenderLogic = props.editRenderLogic;

	const editFeedName = props.editFeedName;
	const editFeedCategory = props.editFeedCategory;
	const editFeedURL = props.editFeedURL;
	const editFeedId = props.editFeedId;

	const handleNameChange = props.handleNameChange;
	const handleCategoryChange = props.handleCategoryChange;
	const handleURLChange = props.handleURLChange;
	const resetEditForm = props.resetEditForm;
	const handleEditSubmit = props.handleEditSubmit;

	if (editRenderLogic) {
		return (
			<form
				className="FeedForm"
				onSubmit={(e, newName, newCategory, newURL, id) => {
					handleEditSubmit(e, editFeedName, editFeedCategory, editFeedURL, editFeedId);
					success();
					resetEditForm();
				}}
			>
				<fieldset>
					<legend>Edit RSS Feed Name, Category, and URL</legend>
					<div>
						<label htmlFor="name">Feed Name:</label>
						<input
							type="text"
							id="name"
							name="feed_name"
							required
							className="FeedForm__input"
							value={editFeedName}
							onChange={e => handleNameChange(e)}
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
							value={editFeedCategory}
							onChange={e => handleCategoryChange(e)}
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
							value={editFeedURL}
							onChange={e => handleURLChange(e)}
						/>
					</div>

					<div className="FeedForm__btnContainer">
						<button type="submit" value="Submit" className="FeedForm__btn">
							Save Changes
						</button>
						<button type="button" value="Reset" className="FeedForm__btn" onClick={() => resetEditForm()}>
							Cancel
						</button>
					</div>
				</fieldset>
			</form>
		);
	} else {
		return null;
	}
}

export default EditFeedForm;

EditFeedForm.propTypes = {
	editFeedName: PropTypes.string.isRequired,
	editFeedCategory: PropTypes.string.isRequired,
	editFeedURL: PropTypes.string.isRequired,
	editFeedId: PropTypes.number.isRequired,
	handleNameChange: PropTypes.func.isRequired,
	handleCategoryChange: PropTypes.func.isRequired,
	handleURLChange: PropTypes.func.isRequired,
	resetEditForm: PropTypes.func.isRequired,
	handleEditSubmit: PropTypes.func.isRequired,
	editRenderLogic: PropTypes.bool.isRequired
};
