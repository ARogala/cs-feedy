import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css'

function Navigation() {
	return (
		<div className="navContainer">
			<input type="checkbox" class="nav__checkbox" id="navi-toggle" />
			<label for="navi-toggle" class="nav__button" tabindex="0">
				<span class="nav__icon">&nbsp;</span>
			</label>
			<nav className="nav">
				<ul className="nav__ul">
					<li className="nav__li"><Link className="nav__link" to='/'>Home</Link></li>
					<li className="nav__li"><Link className="nav__link" to='/Instructions'>Instructions</Link></li>
					<li className="nav__li-dropdown" aria-haspopup="true"><Link className="nav__link" to='#'>Settings</Link>
						<ul className="nav__dropdown" aria-label="submenu">
							<li><Link className="nav__link" to='/AddFeeds'>Add Feeds</Link></li>
							<li><Link className="nav__link" to='/ManageFeeds'>Manage Feeds</Link></li>
						</ul>
					</li>
					<li className="nav__li"><Link className="nav__link" to='/About'>About</Link></li>
				</ul>
			</nav>
		</div>

	);
}

export default Navigation;