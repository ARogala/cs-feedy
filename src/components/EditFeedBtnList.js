import React from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

//import groupBy helper function
import groupBy from './groupBy';


import './EditFeedBtnList.css';

function EditFeedBtnList(props) {
	return (
		<div>list</div>
	);
}

export default EditFeedBtnList;

DeleteFeedBtnList.propTypes = {
	allFeeds: PropTypes.array.isRequired,
	editSingleFeed: PropTypes.func.isRequired,
	filterText: PropTypes.string.isRequired
}
