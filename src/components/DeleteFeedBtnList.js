import React from 'react';

//import groupBy helper function
import groupBy from './groupBy';

function DeleteFeedBtnList(props) {
	const allFeeds = props.allFeeds;
	console.log(allFeeds);

	//delete a feed
	function deleteSingleFeed(id) {
		//loop through allFeeds array delete object with matching id
		//set localStorage equal to the modified allFeeds array
		for(let i = 0; i < allFeeds.length; i++) {
			if(allFeeds[i].id === id) {
				allFeeds.splice(i,1);
			}
		}
		localStorage.setItem('allFeeds', JSON.stringify(allFeeds));
	}

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
					className="singleFeed"
					onClick={() => deleteSingleFeed(groupedFeeds[allCategories[i]][0].id)}
					onKeyPress={() => deleteSingleFeed(groupedFeeds[allCategories[i]][0].id)}
					key={groupedFeeds[allCategories[i]][0].id}
					id={groupedFeeds[allCategories[i]][0].id}
					role="button"
					tabIndex="0"
				>
					{groupedFeeds[allCategories[i]][0].name + ' - ' + groupedFeeds[allCategories[i]][0].category}
				</li>
			);
		}
	}

	console.log(allFeeds);
	return (
		<ul className="feedBtnList">
			{dropDownUL}
			<span>Single Feeds:</span>
			{singleFeed}
		</ul>
	);
}

export default DeleteFeedBtnList;