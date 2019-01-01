// import dependencies
import React from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

//import groupBy helper function
import groupBy from '../groupBy';

import './FeedBtnList.css';

function FeedBtnList(props) {
	const handleClick = props.handleClick;
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
					<ul aria-label="submenu" className="dropDown">
						{groupedFeeds[allCategories[i]].map((feed) => {
							return (
								<li
									className="feedBtn"
									onClick={() => handleClick(feed.url)}
									onKeyPress={() => handleClick(feed.url)}
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
					className="feedBtn"
					onClick={() => handleClick(groupedFeeds[allCategories[i]][0].url)}
					onKeyPress={() => handleClick(groupedFeeds[allCategories[i]][0].url)}
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
	//console.log(allFeeds);

	return (
		<ul className="feedBtnList">
			{dropDownUL}
			<span>Single Feeds:</span>
			{singleFeed}
		</ul>
	);

}

export default FeedBtnList;

FeedBtnList.propTypes = {
  allFeeds: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired
}