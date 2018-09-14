import React from 'react';

function Navigation() {
	return (
		<nav className="nav">
			<ul>
				<li>Home</li>
				<li>Instructions</li>
				<ul>Settings
					<li>Add Feeds</li>
					<li>Magange Feeds</li>
				</ul>
				<li>About</li>
			</ul>
		</nav>
	);
}

export default Navigation;