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
		url:  'http://www.nasa.gov/rss/dyn/image_of_the_day.rss'
	},

	{
		name: 'HTML5 Rocks',
		category: 'WeB Development',
		url: 'http://feeds.feedburner.com/html5rocks'
	},

	{
		name: 'David Kleinert Photography',
		category: 'Photography',
		url: 'http://www.davidkphotography.com/index.php?x=atom'
	},

	{
		name: 'Reddit Video',
		category: 'Reddit',
		url: 'http://www.reddit.com/r/videos/.rss'
	},

	{
		name: 'Outdoor Photographer',
		category: 'Photography',
		url: 'https://www.outdoorphotographer.com/feed/'
	},

	{
		name: 'Shutterstock',
		category: 'Photography',
		url: 'https://www.petapixel.com/feed'
	},

	{
		name: 'Smithsonian Mag',
		category: 'SmithsOniaN',
		url: 'https://www.smithsonianmag.com/rss/multimedia/'
	},

	{
		name: 'Smithsonian Food',
		category: 'Smithsonian',
		url: 'https://www.smithsonianmag.com/rss/food/'
	},

	{
		name: 'Wired',
		category: 'Technology',
		url: 'http://www.wired.com/feed'
	},

	{
		name: 'CSS-Tricks',
		category: 'Web development',
		url: 'http://css-tricks.com/feed/'
	},

	{
		name: 'Smithsonian Videos',
		category: 'Smithsonian',
		url: 'https://www.smithsonianmag.com/rss/videos/'
	},

	{
		name: 'Reddit Home',
		category: 'Reddit',
		url: 'https://www.reddit.com/.rss'
	},

	{
		name: 'JS Weekly',
		category: 'web Development',
		url: 'https://javascriptweekly.com/rss/1a177hd2'
	}
];


ReactDOM.render(
	<App
		allFeeds = {allFeeds}
	/>,
	document.getElementById('root')
);
registerServiceWorker();
