// import dependencies
import React from 'react';
import PropTypes from 'prop-types';

import './FeedBtnSearchBar.css';

function FeedBtnSearchBar() {
	return (
		<div className="searchBarContainer">
			<p>Your RSS/Atom Feeds</p>
			<label htmlFor="filterFeeds" className="feedsLabel">Filter Feeds:</label>
			<input
				type="text"
				className="searchInput"
				placeholder="Search your feeds..."
			/>
		</div>

	);
}

export default FeedBtnSearchBar;