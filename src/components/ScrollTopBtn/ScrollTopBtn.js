import React from 'react';

import './ScrollTopBtn.css';

//display and hide button at break points
window.onscroll = function() {
	displayHideScrollBtn();
};

function displayHideScrollBtn() {
	//scroll to top button
	const scrollBtn = document.getElementById('scrollTop');
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
}

class ScrollTopBtn extends React.Component {

	scrollUp() {
		document.body.scrollTop = 0; // For Safari
    	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

	render() {
		return (
			<button
				className="scrollTop"
				id="scrollTop"
				onClick={() => this.scrollUp()}
			>
				Scroll Up
			</button>
		);
	}
}

export default ScrollTopBtn;