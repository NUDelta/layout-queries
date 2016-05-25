import React from 'react';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript.js';



export default class CodeModule extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			code: "slider = $('.slider'); // Slider element\nslideDuration = 3000; // Duration of each slide in milliseconds\nslideSpeed = 1000; // Speed of slide animation in milliseconds (must be equal of less than slideDuration)\n\n\nwidth = slider.width();\nslider.children().hide().css({left: width});\nslider.children(':first').show().css({left: 0});\n\n// Slide in from the left\n$.fn.slideIn = function () {\n    $(this).show().animate({\n        left: \"-=\" + width\n    }, slideSpeed / 2);\n}\n\n// Slide out to the left\n$.fn.slideOut = function () {\n    $(this).animate({\n        left: \"-=\" + width\n    }, slideSpeed / 2, function () {\n        $(this).hide().css({left: width});\n    });\n}\n\n// Main slide function\nfunction slide() {\n    currentSlide = slider.find('div:visible:first');\n    nextSlide = (!slider.children(\":last\").is(\":visible\")) ? currentSlide.next() : slider.children(':first');\n\n    currentSlide.slideOut();\n    nextSlide.slideIn();\n}\n\n// Timer function\nwindow.setInterval(function () {\n    slide();\n}, slideDuration);"
		};
	}



	getOptions() {
		return {
			lineNumbers: true,
			theme: 'neo'
		};
	}



	render() {
		return (
			<section className="code-module">
				<Codemirror value={this.state.code} options={this.getOptions()} />
			</section>
		);
	}



}