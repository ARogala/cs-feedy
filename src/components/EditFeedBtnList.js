import React from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

import FeedBtnSearchBar from './FeedBtnSearchBar';

//import groupBy helper function
import groupBy from './groupBy';


import './EditFeedBtnList.css';

function EditFeedBtnList(props) {
	const editRenderLogic = props.editRenderLogic;
	const getFeedToEdit = props.getFeedToEdit;
	const allFeeds = props.allFeeds;
	let filterText = props.filterText.trim();

	//remove all spaces g is a global modifier (in other words replace all spaces with '')
	filterText = filterText.replace(/ /g, '');

	/* 	Filter logic
		escapeRegExp escapes special characters
		Regular expressions are patterns used to match character combinations in strings

		so pattern will be a regexp with special char and case 'i' ignored
		then filter the allFeeds array useing test() to search for a match
		between the regular expression and a specified string ignoring case and
		special char.
		finally sort the filtered list by category
	*/

	const pattern = new RegExp(escapeRegExp(filterText), 'i');

	let filteredFeeds = allFeeds.filter((feed) => pattern.test((feed.name + feed.category).replace(/ /g,'')));
	filteredFeeds.sort(sortBy('category'));
	//console.log(filteredFeeds);

	//groupedFeeds is an object with arrays of feeds for each category {category1:[{...}], category2:[{...}], ...}
	const groupedFeeds = groupBy(filteredFeeds, 'category');
	//console.log(groupedFeeds);
	const allCategories = Object.keys(groupedFeeds);
	//console.log(allCategories);

	/*
	for each feed category if the number of feeds is greater than 1
	build the DOM
	*/
	const dropDownUL = [];
	for(let i = 0; i < allCategories.length; i++ ) {
		if(groupedFeeds[allCategories[i]].length > 1) {
			//build the dropDownUL
			dropDownUL.push(
				<li key={i}>
					<span>{allCategories[i]}:</span>
					<ul aria-label="submenu" className="edit__dropDown">
						{groupedFeeds[allCategories[i]].map((feed) => {
							return (
								<li
									className="edit__feedBtn"
									onClick={() => getFeedToEdit(feed.id)}
									onKeyPress={() => getFeedToEdit(feed.id)}
									key={feed.id}
									id={feed.id}
									role="button"
									tabIndex="0"
								>
									{feed.name}
								</li>
							);
						})}
					</ul>
				</li>
			);
		}
	}

	//build the DOM for the categories with one feed
	const singleFeed = [];
	for(let i = 0; i < allCategories.length; i++) {
		if(groupedFeeds[allCategories[i]].length === 1) {
			singleFeed.push(
				<li
					className="edit__feedBtn"
					onClick={() => getFeedToEdit(groupedFeeds[allCategories[i]][0].id)}
					onKeyPress={() => getFeedToEdit(groupedFeeds[allCategories[i]][0].id)}
					key={groupedFeeds[allCategories[i]][0].id}
					id={groupedFeeds[allCategories[i]][0].id}
					role="button"
					tabIndex="0"
				>
					{groupedFeeds[allCategories[i]][0].name}
				</li>
			);
		}
	}

	if(editRenderLogic === false) {
		return (
			<div>
				<FeedBtnSearchBar
					filterText={props.filterText}
					handleFilterTextChange={props.handleFilterTextChange}
				/>
				<p className="editHint">Click a Feed to Edit</p>
				<ul className="edit__feedBtnList">
					{dropDownUL}
					<span>Single Feeds:</span>
					{singleFeed}
				</ul>
			</div>
		);
	}
	else {
		return(null);
	}
}

export default EditFeedBtnList;

EditFeedBtnList.propTypes = {
	allFeeds: PropTypes.array.isRequired,
	filterText: PropTypes.string.isRequired,
	getFeedToEdit: PropTypes.func.isRequired,
	handleFilterTextChange: PropTypes.func.isRequired,
	editRenderLogic: PropTypes.bool.isRequired
}
