// import dependencies
import React from 'react';
import PropTypes from 'prop-types';

function FeedBtnList(props) {

	return (
		<ul>
			<li>RSS Feed button/link</li>
		</ul>
	);
}

export default FeedBtnList;

FeedBtnList.propTypes = {
  allFeeds: PropTypes.array
}