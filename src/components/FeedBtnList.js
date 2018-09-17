// import dependencies
import React from 'react';
import PropTypes from 'prop-types';

//import groupBy helper function
import groupBy from './groupBy';

import './FeedBtnList.css';

function FeedBtnList(props) {
	let feedId = 0;
	const handleClick = props.handleClick;
	const allFeeds = props.allFeeds;

	//groupedFeeds is an object with arrays of feeds for each category {category1:[{...}], category2:[{...}], ...}
	const groupedFeeds = groupBy(allFeeds, 'category');
	//console.log(groupedFeeds);
	const allCategories = Object.keys(groupedFeeds);
	//console.log(allCategories);

	/*
		for each feed category if the number of feeds is greater than 1
		build the DOM
	*/
	//this function prevents the error Don't make functions within a loop  no-loop-func
	function addFeedId(feed) {
		feed.id = feedId;
		feedId = feedId + 1;
	}
	const dropDownUL = [];
	for(let i = 0; i < allCategories.length; i++ ) {
		if(groupedFeeds[allCategories[i]].length > 1) {
			//build the dropDownUL
			dropDownUL.push(
				<li key={i}>
					<span>{allCategories[i]}:</span>
					<ul aria-label="submenu" className="dropDown">
						{groupedFeeds[allCategories[i]].map((feed) => {
							addFeedId(feed);
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
			groupedFeeds[allCategories[i]][0].id = feedId;
			feedId = feedId + 1;
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
	//set local storage equal to the modified allFeeds array
	//this adds the Ids to the localStrorage allFeeds
	localStorage.setItem('allFeeds', JSON.stringify(allFeeds));
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
  handleClick: PropTypes.func.isRequired
}