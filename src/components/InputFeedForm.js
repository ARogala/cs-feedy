import React from 'react';

function InputFeedForm() {
	return (
		<form id="feedData" className="feedForm">
			<fieldset>
				<legend>Enter RSS feed name, category, and url</legend>
				<div>
					<label htmlFor="name">Feed Name:</label>
					<input type="text" id="name" name="feed_name" required className="feedForm__input" />
				</div>
				<div>
					<label htmlFor="category">Feed Category:</label>
					<input type="text" id="category" name="feed_category" required className="feedForm__input" />
				</div>
				<div>
					<label htmlFor="url">Feed URL:</label>
					<input type="url" id="url" name="feed_url" placeholder="http://example.com/feed" required className="feedForm__input" />
				</div>

				<div className="btnContainer">
					<button type="submit" value="Submit" className="feedForm__Btn1">Add Feed</button>
					<button type="reset" value="Reset" className="feedForm__Btn1">Cancel</button>
				</div>
			</fieldset>
			<fieldset>
				<legend>Back Up and Restore Your Feeds</legend>
				<label htmlFor="backUpBtn">Click button below to backup your feeds</label>
				<button type="button" id="backUpBtn" download className="feedForm__Btn2">Download Backup</button>

				<input type="file" id="backUpFile" name="feeds_backup" accept=".txt" className="feedForm__input--file" />
				<label htmlFor="backUpFile">Restore Feeds</label>
			</fieldset>
		</form>
	);
}

export default InputFeedForm;