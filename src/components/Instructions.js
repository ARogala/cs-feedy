import React from 'react';

import './Instructions.css';

function Instructions() {
	/*
		Firefox mobile wouldnt play nice with the anchor tag download attribute
		so here is a quick way to download some starter feeds as a text file
		without having to fetch from the server. Fetching from the server
		seemed a little too complicated to set up for the simple goal I had
		in mind.
		see BackupRestoreFeeds.js for an explination on this function
	*/
	function starterPackDL() {
		const starterFeeds = [{"name":"Contemporary Math","category":"Math","url":"http://www.ams.org/rss/conm.rss","id":0},
		{"name":"The Math Blog","category":"Math","url":"http://math-blog.com/feed/","id":1},
		{"name":"News","category":"Reddit","url":"https://www.reddit.com/r/worldnews/.rss","id":2},
		{"name":"BuzzFeed","category":"News","url":"https://www.buzzfeed.com/world.xml","id":4},
		{"name":"Yahoo","category":"News","url":"https://www.yahoo.com/news/world/rss","id":5},
		{"name":"RT News","category":"News","url":"https://www.rt.com/rss/news","id":6},
		{"name":"Independent","category":"News","url":"http://www.independent.co.uk/news/world/rss","id":7},
		{"name":"BBC","category":"News","url":"http://feeds.bbci.co.uk/news/world/rss.xml","id":8},
		{"name":"New York Times","category":"News","url":"https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/section/world/rss.xml","id":9},
		{"name":"Shutterbug","category":"Photography","url":"https://www.shutterbug.com/taxonomy/term/730/all/feed","id":10},
		{"name":"Visual Wilderness ","category":"Photography","url":"https://visualwilderness.com/feed","id":11},
		{"name":"History Today","category":"History","url":"https://www.historytoday.com/feed/rss.xml","id":14},
		{"name":"Loaded Landscapes","category":"Photography","url":"http://loadedlandscapes.com/feed","id":12},
		{"name":"YouTube Space","category":"Space","url":"https://www.youtube.com/feeds/videos.xml?user=ouramazingspace","id":15},
		{"name":"Space","category":"Reddit","url":"https://www.reddit.com/r/space/.rss","id":3},
		{"name":"Earth Sky","category":"Photography","url":"http://earthsky.org/space/feed","id":13},
		{"name":"NASA Image of the Day","category":"Science","url":"http://www.nasa.gov/rss/dyn/image_of_the_day.rss","id":16}];

		const backUpFileText = JSON.stringify(starterFeeds);
		const backUpFileTextAsBlob = new Blob([backUpFileText], {type:"text/plain"});
		const backUpFileAsURL = window.URL.createObjectURL(backUpFileTextAsBlob);
		const fileName = 'CSFeedyBackUp.txt';

		const downloadElement = document.createElement('a');
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
		<div className="instructionsContainer">
			<h3>Instructions</h3>
			<h4>Home Page</h4>
			<p>On the Home page you can filter/search through your
			feeds list by typing a search term in the search bar provided.
			This search feature only searches for feeds within your feeds list.
			You will have to gather feeds from other sources on the internet.
			</p><br/>
			<p>To view a feed, simply click on the feed you would like to view
			and wait for the page to load the content.
			The feed buttons are located in a categorized list directly
			below the search bar.</p><br/>

			<h4>Add Feeds</h4>
			<p>In order to input feeds into the program’s memory,
			navigate to the Add Feeds page and enter the feed name,
			feed category, and feed URL into the input fields provided.
			Then click the Add Feed button.</p><br/>
			<p>Feeds will be sorted by category so be consistent
			when entering the feed category. Feed URLs must be complete;
			do not leave out the http.
			I usually just copy and paste the feed URLs.</p>
			<p>(Menu --> Settings --> Add Feeds)</p><br/>

			<h4>Edit Feeds</h4>
			<p>If you need to edit a feeds data navigate to the Edit Feeds page and click on
			the feed that needs editing. A form will appear that displays that feeds current data.
			Simply edit the name, category, and or url and click save changes.</p>
			<p>(Menu --> Settings --> Edit Feeds)</p><br/>

			<h4>Delete Feeds</h4>
			<p>Deleting feeds is really easy, just navigate to the Delete Feeds page
			and click on the feed you would like to delete.</p>
			<p>(Menu --> Settings --> Delete Feeds)</p><br/>

			<h4>Backup and Restore Feeds</h4>
			<p>To backup and restore your feeds, navigate to the Backup and Restore page
			and click the Download Backup or Restore Feeds button.
			When restoring your feeds, you must upload the same file you downloaded
			as a backup. You can also download a feeds starter pack <button id="starterPackDL" onClick={() => starterPackDL()}>here</button> to get a feel for this application
			before you search the net for feeds.</p><br/>

			<p>Please note your feeds will be deleted from memory when you
			clear your browser's cookies and other site data,
			so be sure to backup your feed list before clearing your browser’s data.
			Your feeds are stored in your internet browsers local storage,
			not on a remote server. This makes it possible to provide you with a
			small data driven web app without colleting any of your information.
			Enjoy!</p>
			<p>(Menu --> Settings --> Backup and Restore)</p>

		</div>
	);
}

export default Instructions;