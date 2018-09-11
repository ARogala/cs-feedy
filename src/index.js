import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//array of rss objects
let allFeeds = [
	{
		name: 'Nasa Image of the Day',
		category: 'Science',
		url:  'http://www.nasa.gov/rss/dyn/image_of_the_day.rss',
		id: 0
	},

	{
		name: 'HTML5 Rocks',
		category: 'WeB Development',
		url: 'http://feeds.feedburner.com/html5rocks',
		id: 1
	},

	{
		name: 'David Kleinert Photography',
		category: 'Photography',
		url: 'http://www.davidkphotography.com/index.php?x=atom',
		id: 2
	},

	{
		name: 'Reddit Video',
		category: 'Reddit',
		url: 'http://www.reddit.com/r/videos/.rss',
		id: 3
	},

	{
		name: 'Outdoor Photographer',
		category: 'Photography',
		url: 'https://www.outdoorphotographer.com/feed/',
		id: 4
	},

	{
		name: 'Shutterstock',
		category: 'Photography',
		url: 'https://www.petapixel.com/feed',
		id: 5
	},

	{
		name: 'Smithsonian Mag',
		category: 'SmithsOniaN',
		url: 'https://www.smithsonianmag.com/rss/multimedia/',
		id: 6
	},

	{
		name: 'Smithsonian Food',
		category: 'Smithsonian',
		url: 'https://www.smithsonianmag.com/rss/food/',
		id: 7
	},

	{
		name: 'Wired',
		category: 'Technology',
		url: 'http://www.wired.com/feed',
		id: 8
	},

	{
		name: 'CSS-Tricks',
		category: 'Web development',
		url: 'http://css-tricks.com/feed/',
		id: 9
	},

	{
		name: 'Smithsonian Videos',
		category: 'Smithsonian',
		url: 'https://www.smithsonianmag.com/rss/videos/',
		id: 10
	},

	{
		name: 'Reddit Home',
		category: 'Reddit',
		url: 'https://www.reddit.com/.rss',
		id: 11
	},

	{
		name: 'JS Weekly',
		category: 'web Development',
		url: 'https://javascriptweekly.com/rss/1a177hd2',
		id: 12
	}
];


ReactDOM.render(
	<App
		allFeeds = {allFeeds}
	/>,
	document.getElementById('root')
);
registerServiceWorker();
