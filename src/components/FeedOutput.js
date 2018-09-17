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
				<p className="errorTitle">Sorry CSFeedy experienced an error</p>
				<p className="errorText">Make sure you typed in the correct feed url.
				If you are sure you typed in the correct feed url
				and you are still experiencing errors know that
				CSFeedy may not work with every feed. (CSFeedy
				can not parse feeds that return HTML) It is also
				possible that the CORS proxy server is down or CSFeedy has
				exceeded the amount of free up time on the proxy server</p>
			</div>
		);
	}
	if(props.loading) {
		return (
			<p className="loading">LOADING......</p>
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
			<p className="hint">Click a feed button above or input some feeds in
			the settings page.</p>
		);
	}
}

export default FeedOutput;

FeedOutput.propTypes = {
  feed: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.object
}
