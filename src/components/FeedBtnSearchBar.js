// import dependencies
import React from 'react';
import PropTypes from 'prop-types';

import './FeedBtnSearchBar.css';

function FeedBtnSearchBar(props) {
	const filterText = props.filterText;
	const handleFilterTextChange = props.handleFilterTextChange;
	return (
		<div className="searchBarContainer">
			<p>Your RSS/Atom Feeds</p>
			<label htmlFor="filterFeeds" className="feedsLabel">Filter Feeds:</label>
			<input
				type="text"
				className="searchInput"
				id="filterFeeds"
				placeholder="Search your feeds..."
				value={filterText}
				onChange={(e) => handleFilterTextChange(e.target.value)}
			/>
		</div>

	);
}

export default FeedBtnSearchBar;

FeedBtnSearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  handleFilterTextChange: PropTypes.func.isRequired

}