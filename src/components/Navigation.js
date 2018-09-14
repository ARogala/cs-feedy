import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<nav className="nav">
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li>Instructions</li>
				<ul>Settings
					<li><Link to='/AddFeeds'>Add Feeds</Link></li>
					<li><Link to='/ManageFeeds'>Manage Feeds</Link></li>
				</ul>
				<li>About</li>
			</ul>
		</nav>
	);
}

export default Navigation;