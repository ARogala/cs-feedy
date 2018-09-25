import React from 'react';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';

//import groupBy helper function
import groupBy from './groupBy';

//borrow styles from FeedBtnList the two components
//share the same structure
import './FeedBtnList.css';

function DeleteFeedBtnList(props) {
	const deleteSingleFeed = props.deleteSingleFeed;
	const allFeeds = props.allFeeds;
	allFeeds.sort(sortBy('category'));
	//groupedFeeds is an object with arrays of feeds for each category {category1:[{...}], category2:[{...}], ...}
	const groupedFeeds = groupBy(allFeeds, 'category');
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
									onClick={() => deleteSingleFeed(feed.id)}
									onKeyPress={() => deleteSingleFeed(feed.id)}
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
					onClick={() => deleteSingleFeed(groupedFeeds[allCategories[i]][0].id)}
					onKeyPress={() => deleteSingleFeed(groupedFeeds[allCategories[i]][0].id)}
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

	return (
		<div className="searchBox">
			<p className="deleteHint">Click a Feed to Delete</p>
			<ul className="feedBtnList">
				{dropDownUL}
				<span>Single Feeds:</span>
				{singleFeed}
			</ul>
		</div>
	);
}

export default DeleteFeedBtnList;

DeleteFeedBtnList.propTypes = {
	allFeeds: PropTypes.array.isRequired,
	deleteSingleFeed: PropTypes.func.isRequired
}
