// import dependencies
import React from 'react';
import PropTypes from 'prop-types';

function FeedBtnSearhBar() {
	return (
		<div className="searchBarContainer">
			<h2>Your RSS/Atom Feeds</h2>
			<label htmlFor="filterFeeds" className="feedsLabel">Filter Feeds:</label>
			<input
				type="text"
				placeholder="Search your feeds..."
			/>
		</div>

	);
}

export default FeedBtnSearhBar;