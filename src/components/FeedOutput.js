// import dependencies
import React from 'react';
import PropTypes from 'prop-types';
//<img src={item['enclosure']['url']} height="200" width="200"/>

import './FeedOutput.css'

function FeedOutput(props) {
	//console.log(props.feed);
	//console.log(props.error);
	const feed = props.feed;
	const feedItems = feed['entries'];
	if(props.error !== null) {
		return (
			<div>
				<h1>Sorry the program had an error try a different feed</h1>
				<p>Make sure you typed in the correct feed url.
				If you are sure you typed in the correct feed url
				and you are still experiencing errors know that
				CSFeedy may not work with every feed. (CSFeedy
				can not parse feeds that return HTML) It is also
				possible that the CORS proxy is down or CSFeedy has
				exceded the number of free redirect requests</p>
			</div>
		);
	}
	if(props.loading) {
		return (
			<h1>LOADING......</h1>
		);
	}
	if(Object.keys(feed).length !== 0) {
		const feedContent = feedItems.map((item, index) => {
			return (
				<article key={index} className="feedArticle">
					<h3><a href={item['link']} target="_blank" rel="noopener">{item['title']}</a></h3>
					<time dateTime={item['pubDate']}>{item['pubDate']}</time>

					{item['content:encoded']
					? <div dangerouslySetInnerHTML= {{__html: item['content:encoded']}}/>
					: <div dangerouslySetInnerHTML= {{__html: item['content']}}/>
					}

					{item['enclosure']
					? <img src={item['enclosure']['url']} alt={item['title']} />
					:''
					}
				</article>
			);
		});

		return (
			<div className="rssOutput">
				<h2>{feed['title']}</h2>
				<div>
					{feedContent}
				</div>
			</div>
		);
	}
	else if(Object.keys(feed).length === 0) {
		return (
			<h1>Click a feed button</h1>
		);
	}
}

export default FeedOutput;

FeedOutput.propTypes = {
  feed: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.object
}
