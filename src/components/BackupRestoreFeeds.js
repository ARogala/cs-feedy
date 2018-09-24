import React from 'react';
import PropTypes from 'prop-types';

import './BackupRestoreFeeds.css';

function BackupRestoreFeeds(props) {
	const restoreFeeds   = props.restoreFeeds;
	/*
		store the text to backup as a string in the backUpFileText variable
		convert the sting to a blob which is raw data that represents our text
		(Blobs allow you to construct file like objects on the client that you can pass
		to apis that expect urls)
		generate a URL from the blob so our text can be passed as a
		URL to APIs that accept urls
		in this case i pass the text now represented in the objectURL
		to the anchor tag for download
	*/
	function backUpFeeds() {
		let backUpFileText = localStorage.getItem('allFeeds');
		let backUpFileTextAsBlob = new Blob([backUpFileText], {type:"text/plain"});
		let backUpFileAsURL = window.URL.createObjectURL(backUpFileTextAsBlob);
		let fileName = 'CSFeedyBackUp.txt';

		let downloadElement = document.createElement('a');
		downloadElement.setAttribute('href', backUpFileAsURL);
		downloadElement.setAttribute('download', fileName);

		downloadElement.style.display = 'none';
		document.body.appendChild(downloadElement);

		downloadElement.click();

		document.body.removeChild(downloadElement);
		//free up memory by revoking the url after we finish
		window.URL.revokeObjectURL(backUpFileTextAsBlob);
	}

	return (
		<div>
			<form className="manageFeedForm" id="manageFeedFormId">
				<fieldset>
					<legend>Backup and Restore Your Feeds</legend>
					<label htmlFor="backUpBtn">Click buttons below to backup and restore your feeds</label>
					<div className="MngFeedBtnContainer">
						<button
							type="button"
							id="backUpBtn"
							download
							className="manageFeedForm__Btn"
							onClick={() => backUpFeeds()}
							onKeyPress={() => backUpFeeds()}
						>
							Download Backup
						</button>

						<input
							type="file"
							id="backUpFile"
							name="feeds_backup"
							accept=".txt"
							className="manageFeedForm__input--file"
							onChange={(evt) => restoreFeeds(evt)}
						/>

						<label htmlFor="backUpFile">Restore Feeds</label>
					</div>
				</fieldset>
			</form>
		</div>
	);
}

export default BackupRestoreFeeds;

BackupRestoreFeeds.propTypes = {
	restoreFeeds: PropTypes.func.isRequired
}
