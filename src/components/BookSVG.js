import React from 'react';

// https://s3-us-west-2.amazonaws.com/s.cdpn.io/131045/electricwolf.jpg
//ALL CREDIT FOR THIS SVG ANIMATION BELONGS TO:
//https://gist.github.com/tmrDevelops/f199f0e503d7192b30ad
function BookSVG() {
	return (
		<div className ='svg'>
			<svg width="200px" height="200px" viewBox="-200 -100 400 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
				<defs>
					<rect id="animatedRect" x="-400" y="-100" width="400" height="400">
						<animateTransform attributeName="transform" type="rotate"
						from="45,0,-150" to="0,0,-150"
						begin="0s" dur="3s"
						repeatCount="indefinite"
						calcMode="spline" keyTimes="0;1" keySplines="0.42 0.0 0.58 1.0"
						/>
					</rect>
					<clipPath id="clip">
						<use href="#animatedRect"/>
					</clipPath>
					<mask id="mask" maskUnits="userSpaceOnUse" x="-200" y="-100" width="400" height="400">
						<rect x="-150" y="0" width="150" height="200" fill="hsla(255,255%,255%,1)" clipPath="url(#clip)"/>
					</mask>
					<g id="page">
						<rect x="-150" y="0" width="150" height="200" fill="hsla(52, 95%, 95%, 1)"/>
						<image href="" x="-150" y="25" width="150" height="150"/>
					</g>
					<linearGradient id="centerGrad" x1="1" x2="0">
						<stop offset="0" stopColor="black" stopOpacity="0.3"/>
						<stop offset="0.02" stopColor="black" stopOpacity="0"/>
					</linearGradient>
					<filter id="shadow">
						<feOffset in="SourceAlpha">
							<animate attributeName="dx"
							begin="0s" dur="3s"
							repeatCount="indefinite"
							calcMode="linear" keyTimes="0;0.5;1" values="0;-1;0"
							/>
							<animate attributeName="dy"
							begin="0s" dur="3s"
							repeatCount="indefinite"
							calcMode="linear" keyTimes="0;0.5;1" values="0;1;0"
							/>
						</feOffset>
						<feGaussianBlur>
							<animate attributeName="stdDeviation"
							begin="0s" dur="3s"
							repeatCount="indefinite"
							calcMode="linear" keyTimes="0;0.5;1" values="0;3;0"
							/>
						</feGaussianBlur>
						<feMerge>
							<feMergeNode/>
							<feMergeNode in="SourceGraphic"/>
						</feMerge>
					</filter>
				</defs>

				<rect x="-161" y="2" width="322" height="208" fill="hsla(52, 5%, 55%, 1)" rx="2" ry="2"/>
				<rect x="-160" y="1" width="320" height="208" fill="hsla(1, 95%, 15%, 1)" rx="2" ry="2"/>
				<path d="M-150,0 L-155,5 V205 L-5,205 L0,200" fill="hsla(52, 5%, 85%, 1)"/>
				<path d="M150,0 L155,5 V205 L5,205 L0,200" fill="hsla(52, 5%, 85%, 1)"/>

				<rect x="0" width="150" height="200" fill="hsla(52, 95%, 95%, 1)"/>
				<g fontSize="20" fontWeight="bold">
					<text x="15" y="100">Get Reading!</text>
				</g>
				<use href="#page"/>
				<rect  x="-400" y="0" width="400" height="200" fill="url(#centerGrad)"/>
				<g filter="url(#shadow)">
					<g>
						<g mask="url(#mask)">
							<use href="#page"/>
							<use href="#animatedRect" fill="url(#centerGrad)"/>
						</g>
						<animateTransform attributeName="transform" type="rotate"
						from="-90,0,-150" to="0,0,-150"
						begin="0s" dur="3s"
						repeatCount="indefinite"
						calcMode="spline" keyTimes="0;1" keySplines="0.42 0.0 0.58 1.0"/>
					</g>
				</g>
			</svg>
		</div>
	);
}

export default BookSVG;