// import dependencies
import React from 'react';
import PropTypes from 'prop-types';

function FeedBtnList(props) {

	const allFeeds = props.allFeeds;

	//https://stackoverflow.com/questions/4878756/how-to-capitalize-first-letter-of-each-word-like-a-2-word-city
	function toTitleCase(str) {
		return str.replace(/\w\S*/g, function(txt){
		    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
	function groupBy(objectArray, property) {
		return objectArray.reduce(function (acc, obj) {
			//remove case sensitivity
			obj[property] = toTitleCase(obj[property]);
			//store the category in key
			let key = obj[property];
			//if the accumulator object at key is undefined place empty array
			if (!acc[key]) {
			  acc[key] = [];
			}
			//push objects with the same key into their array
			//return accumulator
			acc[key].push(obj);
			return acc;
		}, {});
	}

	//groupedFeeds is an object with arrays of feeds for each category {category1:[{...}], category2:[{...}], ...}
	const groupedFeeds = groupBy(allFeeds, 'category');
	console.log(groupedFeeds);
	const allCategories = Object.keys(groupedFeeds);
	console.log(allCategories);

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
									key={feed.id}
									role="button"
									tabIndex="0"
								>
									{feed.name + ' - ' + feed.category}
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
					className="singleFeed"
					key={groupedFeeds[allCategories[i]][0].id}
					role="button"
					tabIndex="0"
				>
					{groupedFeeds[allCategories[i]][0].name + ' - ' + groupedFeeds[allCategories[i]][0].category}
				</li>
			);
		}
	}

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
  allFeeds: PropTypes.array.isRequired
}