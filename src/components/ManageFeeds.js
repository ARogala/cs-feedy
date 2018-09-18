import React from 'react';

import DeleteFeedBtnList from './DeleteFeedBtnList';

import './ManageFeeds.css';

function ManageFeeds(props) {
	let allFeeds = props.allFeeds;
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
	//get the file from the user and use readAsText to read the txt doc
	//parse into allFeeds and save allFeeds back to localStorage
	function restoreFeeds(evt) {
	    let files = evt.target.files; // FileList object
	    if(files[0].name === 'CSFeedyBackUp.txt') { //ensure proper file is uploaded
		    let file = files[0];
		    let reader = new FileReader();
		    //readAsText is asynchronous, so need to use the onload callback
		    //to see the result
		    reader.readAsText(file);
		    reader.onload = function(event) {
		    	allFeeds = JSON.parse(event.target.result);
		    	localStorage.setItem('allFeeds', JSON.stringify(allFeeds));
		    	//relod window to restore feeds in delete list
		    	window.location.reload(true);
		    	alert('Feeds sucessfully restored');
			}
	    }
	    else {
	    	alert('To restore your feeds please upload the same file downloaded as a backup. It is named CSFeedyBackUp.txt');
	    }
	}


	return (
		<div>
			<form className="manageFeedForm" id="manageFeedFormId">
				<fieldset>
					<legend>Back Up and Restore Your Feeds</legend>
					<label htmlFor="backUpBtn">Click buttons below to backup and restore your feeds</label>
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
				</fieldset>
			</form>

			<DeleteFeedBtnList
				allFeeds={allFeeds}
			/>
		</div>
	);
}

export default ManageFeeds;
