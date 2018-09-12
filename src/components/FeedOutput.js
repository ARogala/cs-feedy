// import dependencies
import React from 'react';
import PropTypes from 'prop-types';
//<img src={item['enclosure']['url']} height="200" width="200"/>

function FeedOutput(props) {
	console.log(props.feed);
	//console.log(props.error);
	const feed = props.feed;
	const feedItems = feed['entries'];
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
