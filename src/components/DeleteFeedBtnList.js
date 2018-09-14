import React from 'react';

function DeleteFeedBtnList(props) {
	let allFeeds = props.allFeeds;
	console.log(allFeeds);
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
	//console.log(groupedFeeds);
	const allCategories = Object.keys(groupedFeeds);
	//console.log(allCategories);



	return (
		<div>Delete Feeds</div>
	);
}

export default DeleteFeedBtnList;