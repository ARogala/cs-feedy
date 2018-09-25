import React from 'react';
import { Link } from 'react-router-dom';

import './About.css';

function About() {
	return (
		<section className="about">
			<h3>About</h3>
			<p>For those who aren’t sure, a feed reader is simply a program that allows users
			to gather and display content from numerous web sites all in one location.
			You can store hundreds of feeds in CSFeedy and see content from each web site without
			having to navigate to the sites individually.
			Check out this <a href="https://www.lifewire.com/what-is-rss-2483592">article</a> for some more information.</p><br/>
			<p>Many web sites publish what is called RSS (Really Simple Syndication or Rich Site Summary)
			which is an XML-formatted text file that contains content the web site publishes.
			Developers can then take that data and display it on the screen.
			If you aren’t interested in all the technical stuff I am about to write in regards to my application,
			you can skip the rest of this and head over the <Link to='/Instructions'>Instructions</Link> page to get started using CSFeedy.</p><br/>
			<p>CSFeedy (Client-Side Feed Reader) is a single page web application built with <a href="https://reactjs.org/">React</a> JavaScript.
			Some major dependencies are <a href="https://www.npmjs.com/package/rss-parser">rss-parser</a> to parse the feed on the client’s machine
			and <a href="https://github.com/Rob--W/cors-anywhere">CORS Anywhere</a> proxy server which allows feeds to be loaded in the browser.
			Many thanks to the maintainers of these projects without whom this application wouldn’t be possible.</p><br/>
			<p>These two dependencies solve some major problems when it comes to parsing RSS/ATOM feeds
			entirely on the client’s machine without any backend code.
			First, there is CORS (Cross-Origin Resource Sharing) and the same origin policy of web browsers.
			CORS is what allows a web application on one domain (https://csfeedy.surge.sh) to request
			and access resources on another domain (https://www.reddit.com/.rss).
			Modern web browsers follow what is called the same origin policy, which means a web application
			can only request resources from its own domain unless the other domain has resources that respond
			with the appropriate CORS headers. This means that CSFeedy is very restricted to what resources it can access
			from other domains. Not all RSS feeds are CORS enabled! This is where CORS Anywhere comes to the rescue.
			As mentioned CORS Anywhere is a proxy server that will make these requests on behalf of CSFeedy,
			add the appropriate CORS headers, and send the response (RSS xml data) back to CSFeedy for processing.
			All I had to do was host my own instance of the CORS Anywhere proxy server with <a href="https://www.heroku.com/">Heroku</a> and
			restrict the access to only the CSFeedy domain; as having an open proxy is never a good idea.
			One major problem solved!! Second, to process the RSS xml response into a useable JavaScript object
			the rss-parser library saves the day and provides a solution.
			No need to reinvent the wheel here, let’s just surf the wave of Frontend Development.
			Besides, I still had plenty of problems to solve in order to finish my application.</p><br/>
			<p>A few interesting problems I solved while building this application are as follows:</p>
			<p>The feed buttons are generated dynamically by filtering, grouping, and then rendering
			the buttons from the array of objects stored in local storage.
			See FeedBtnList.js and groupBy.js for code documentation on this method.
			This algorithm solves the unique problem of building a dynamic filterable menu from changing data.
			I may need to do some minor refactoring future.
			</p><br/>
			<p>Also building the functionality to add, delete, back up, and restore feeds from local storage
			was a challenging aspect of this apps design. I had a hard time finding information on backing up
			and restoring the state of local storage; doesn’t seem like this is done very often.</p><br/>
			<p>Backing up local storage works by first getting the array of objects from local storage and
			then converting that string to a blob of type text. Next generate a URL from the blob so the text
			can be passed as a URL to API’s that expect URL’s. Finally, pass that URL, that now contains the data,
			to an html anchor tag and pragmatically click the anchor tag for download.
			See the backUpFeeds() function in BackupRestoreFeeds.js for code documentation.</p><br/>
			<p>To restore the local storage state first get the file from the user with an html input tag of type file.
			Then user JavaScript’s readAsText() method from the File API to read the text document.
			Next, parse the read text document into a variable and save the data back to local storage.
			See restoreFeeds() function in App.js for code documentation.</p><br/>
			<p>Unfortunately, as of now, if the user makes a mistake entering a feed the only option
			is to delete it and re-enter it correctly. CSFeedy is missing the Update in CRUD
			(Create Read/Retrieve Update and Delete). I hope to add functionality to update a feed in the future.
			I would also like to include functionality that allows more than one feed list.
			Thus, users can switch between a few feed lists instead of having one huge list.
			Accessibility needs some improvement as well.
			This app works in Google Chrome, Firefox, Microsoft Edge, and Opera.
			Mobile support for Android Chrome, Firefox, and Opera. Sorry no support for Internet Explorer.
			Check out the code for this application on my <a href="https://github.com/ARogala/cs-feedy">GitHub</a> page.</p>
			<p>Hope you enjoy CSFeedy!</p>

		</section>
	);
}

export default About;