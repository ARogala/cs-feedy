import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<nav className="nav">
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/Instructions'>Instructions</Link></li>
				<ul>Settings
					<li><Link to='/AddFeeds'>Add Feeds</Link></li>
					<li><Link to='/ManageFeeds'>Manage Feeds</Link></li>
				</ul>
				<li><Link to='/About'>About</Link></li>
			</ul>
		</nav>
	);
}

export default Navigation;