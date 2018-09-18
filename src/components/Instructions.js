import React from 'react';

import './Instructions.css';

function Instructions() {
	return (
		<div className="instructionsContainer">
			<h3>Home Page</h3>
			<p>On the Home page you can filter/search through your
			feeds list by typing a search term in the search bar provided.
			This search feature only searches for feeds within your feeds list.
			You will have to gather feeds from other sources on the internet.
			</p><br/>
			<p>To view a feed, simply click on the feed you would like to view
			and wait for the page to load the content.
			The feed buttons are located in a categorized list directly
			below the search bar.</p><br/>

			<h3>Add Feeds</h3>
			<p>In order to input feeds into the program’s memory,
			navigate to the Add Feeds page and enter the feed name,
			feed category, and feed URL into the input fields provided.
			Then click the Add Feed button.</p><br/>
			<p>Feeds will be sorted by category so be consistent
			when entering the feed category. Feed URLs must be complete;
			do not leave out the http.
			I usually just copy and paste the feed URLs.</p>
			<p>(Menu => Settings => Add Feeds)</p><br/>

			<h3>Manage Feeds</h3>
			<p>To backup and restore your feeds, navigate to the Manage Feeds page
			and click the Download Backup or Restore Feeds button.
			When restoring your feeds, you must upload the same file you downloaded
			as a backup.</p><br/>
			<p>Please note your feeds will be deleted from memory when you
			clear your browser's cookies and other site data,
			so be sure to backup your feed list before clearing your browser’s data.
			Your feeds are stored in your internet browsers local storage,
			not on a remote server. This makes it possible to provide you with a
			small data driven web app without colleting any of your information.
			Enjoy!</p><br/>
			<p>Deleting feeds is really easy, just click on the feed you would
			like to delete. The list of feeds is directly below the back up
			and restore section.</p>
			<p>(Menu => Settings => Manage Feeds)</p>

		</div>
	);
}

export default Instructions;