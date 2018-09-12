// import dependencies
import React from 'react';
import PropTypes from 'prop-types';
//<img src={item['enclosure']['url']} height="200" width="200"/>

function FeedOutput(props) {
	console.log(props.feed);
	//console.log(props.error);
	const feed = props.feed;
	const feedItems = feed['entries'];
	if(props.error !== null) {
		console.log(props.error);
		return (
			<div>
				<h1>Sorry the program had an error try a different feed</h1>
				<p>Make sure you typed in the correct feed url.
				If you are sure you typed in the correct feed url
				and you are still experiencing errors know that
				CSFeedy may not work with every feed. (CSFeedy
				can not parse feeds that return HTML)</p>
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
				<article key={index}>
					<h3><a href={item['link']} target="_blank" rel="noopener">{item['title']}</a></h3>
					<time dateTime={item['pubDate']}>{item['pubDate']}</time>
					<div dangerouslySetInnerHTML= {{__html: item['content']}}/>
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
			<div>Click a feed button</div>
		);
	}

}

export default FeedOutput;

FeedOutput.propTypes = {
  feed: PropTypes.object.isRequired,

}
