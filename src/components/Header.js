import React from 'react';

import BookSVG from './BookSVG';

function Header(props) {
	return(
		<header className="header">
            <div className="header__container">
              <BookSVG />
              <div className="header__container-title">
                <h1 className="header__title">CSFeedy</h1>
                <h2 className="header__tagline">Feed Reader</h2>
              </div>
            </div>
        </header>
	);
}

export default Header;