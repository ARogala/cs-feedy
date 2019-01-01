// import dependencies
import React from 'react';
import PropTypes from 'prop-types';

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
			<div className="loading"></div>
		);
	}
	/*
		enclosures contain images so if there is an enclosure display
		only the contentSnippet and enclosure image
		this prevents double loading of images contained in
		the content or content:encoded

		if content:encoded and no enclosure display only content:encoded

		if content and no enclosure and no content:encoded display only content

		this was all found by viewing various feeds. NO magic just trial
		and error
	*/
	if(Object.keys(feed).length !== 0) {
		const feedContent = feedItems.map((item, index) => {
			return (
				<article key={index} className="feedArticle">
					<h3><a href={item['link']} target="_blank" rel="noopener">{item['title']}</a></h3>
					<time dateTime={item['pubDate']}>{item['pubDate']}</time>

					{item['enclosure'] &&
						<div>
							<div dangerouslySetInnerHTML= {{__html: item['contentSnippet']}}/>
							<img src={item['enclosure']['url']} alt={item['title']} />
						</div>
					}

					{(item['content:encoded'] && !item['enclosure']) &&
						<div dangerouslySetInnerHTML= {{__html: item['content:encoded']}}/>
					}

					{(item['content'] && !item['enclosure'] && !item['content:encoded']) &&
						<div dangerouslySetInnerHTML= {{__html: item['content']}}/>
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
			<p className="hint">Click a feed button or input some feeds in
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
