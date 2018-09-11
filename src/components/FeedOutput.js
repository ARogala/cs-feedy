// import dependencies
import React from 'react';
import PropTypes from 'prop-types';


function FeedOutput(props) {
	console.log(props.feed);
	console.log(props.error);
	return (
		<div className="rssOutput">
			<h2>Feed Name</h2>
			<div>
				<article>Feed Content</article>
				<article>Feed Content</article>
				<article>Feed Content</article>
			</div>
		</div>

	);
}

export default FeedOutput;

FeedOutput.propTypes = {
  feed: PropTypes.object.isRequired,

}
