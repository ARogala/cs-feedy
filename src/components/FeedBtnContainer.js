// import dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import components
import FeedBtnSearchBar from './FeedBtnSearchBar';
import FeedBtnList from './FeedBtnList';

function FeedBtnContainer() {
	return (
		<div>
			<FeedBtnSearchBar />
			<FeedBtnList />
		</div>
	);
}

export default FeedBtnContainer;