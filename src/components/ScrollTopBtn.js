import React from 'react';

function ScrollTopBtn() {

	function scrollUP() {

	}
	return (
		<button
			className="scrollTop"
			onClick={() => this.scrollUp()}
		>
			Scroll Up
		</button>
	);
}

export default ScrollTopBtn;