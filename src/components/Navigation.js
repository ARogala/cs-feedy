import React from 'react';
import { Link } from 'react-router-dom';
import focusWithin from 'focus-within';

import './navigation.css';

focusWithin(document);

function hideNav() {
	document.getElementById('navi-toggle').checked = false;
}
function toggleNav() {
	const toggleNav = document.getElementById('navi-toggle').checked;
	//console.log(toggleNav);
	if(toggleNav === false) {
		document.getElementById('navi-toggle').checked = true;
	}
	else {
		document.getElementById('navi-toggle').checked = false;
	}
}

function Navigation() {
	return (
		<div className="navContainer">
			<input
				type="checkbox"
				className="nav__checkbox"
				id="navi-toggle"
			/>
			<label
				htmlFor="navi-toggle"
				className="nav__button"
				aria-haspopup="true"
				role="button"
				tabIndex="0"
				onKeyPress={()=>toggleNav()}
			>
				<span className="nav__icon">&nbsp;</span>
			</label>
			<nav className="nav">
				<ul className="nav__ul">
					<li>
						<Link
							className="nav__link"
							to='/'
							onClick={() => hideNav()}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className="nav__link"
							to='/Instructions'
							onClick={() => hideNav()}
						>
							Instructions
						</Link>

					</li>
					<li className="nav__li-dropdown">
						<Link
							aria-haspopup="true"
							role="button"
							className="nav__link"
							to='#'
						>
							Settings
						</Link>
						<ul className="nav__dropdown" aria-label="submenu">
							<li>
								<Link
									className="nav__link"
									to='/AddFeeds'
									onClick={() => hideNav()}
								>
									Add Feeds
								</Link>
							</li>
							<li>
								<Link
									className="nav__link"
									to='/DeleteFeeds'
									onClick={() => hideNav()}
								>
									Delete Feeds
								</Link>
							</li>
							<li>
								<Link
									className="nav__link"
									to='/ManageFeeds'
									onClick={() => hideNav()}
								>
									Backup and Restore
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link
							className="nav__link"
							to='/About'
							onClick={() => hideNav()}
						>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</div>

	);
}

export default Navigation;