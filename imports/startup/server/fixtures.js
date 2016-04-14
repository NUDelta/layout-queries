import { Meteor } from 'meteor/meteor';
import ProExamples from '../../api/ProExamples/ProExamples.js';



Meteor.startup( () => {

	// populate pro examples if collection's empty
	if (ProExamples.find().count() === 0) {
		const data = [
			{
				_id: 0,
				source: 'facebook.com',
				confidence: 0.98,
				code: "slider = $('.slider'); // Slider element\nslideDuration = 3000; // Duration of each slide in milliseconds\nslideSpeed = 1000; // Speed of slide animation in milliseconds (must be equal of less than slideDuration)\n\n\nwidth = slider.width();\nslider.children().hide().css({left: width});\nslider.children(':first').show().css({left: 0});\n\n// Slide in from the left\n$.fn.slideIn = function () {\n    $(this).show().animate({\n        left: \"-=\" + width\n    }, slideSpeed / 2);\n}\n\n// Slide out to the left\n$.fn.slideOut = function () {\n    $(this).animate({\n        left: \"-=\" + width\n    }, slideSpeed / 2, function () {\n        $(this).hide().css({left: width});\n    });\n}\n\n// Main slide function\nfunction slide() {\n    currentSlide = slider.find('div:visible:first');\n    nextSlide = (!slider.children(\":last\").is(\":visible\")) ? currentSlide.next() : slider.children(':first');\n\n    currentSlide.slideOut();\n    nextSlide.slideIn();\n}\n\n// Timer function\nwindow.setInterval(function () {\n    slide();\n}, slideDuration);",
				technologies: ['Angular', 'jQuery'],
				annotations: [
					{
						lineText: 'Lines 1-3',
						content: 'Create a jQuery object using the DOM class ‘slider’. Hardcode values for the slide duration and speed in milliseconds.'
					},
					{
						lineText: 'Lines 6-8',
						content: 'Use the jQuery .width() function to get the DOM’s width in pixels. Hide the slider’s children and set their CSS “left” attribute to the slider’s width. Show the slider’s first child and set its CSS “left” attribute to 0.'
					},
					{
						lineText: 'Lines 11-15',
						content: 'Create a slideIn function on jQuery’s prototype that shows the element on which it is called and animates it to the left by the slider’s width.'
					},
					{
						lineText: 'Lines 18-24',
						content: 'Create a similar slideOut function that performs the animation first and then hides the element and sets its CSS “left” attribute to the slider’s width.'
					},
					{
						lineText: 'Lines 23-33',
						content: 'Create a slide function that determines which slide will come next, calls the slideOut function on the current slide, and calls the slideIn function on the next slide.'
					},
					{
						lineText: 'Lines 36-38',
						content: 'Create the interval that calls the slide() function every “slideDuration” milliseconds.'
					}
				]
			},
			{
				_id: 1,
				source: 'youtube.com',
				confidence: 0.93,
				code: "function createCounter() {\n  \tvar counter = 0;\n\n  \treturn function increment() {\n    \tcounter += 1;\n    \tconsole.log(\"Number of events: \", counter);\n  \t}\n}\n\n\n\nvar counter1 = createCounter();\nvar counter2 = createCounter();\n\n\n\n/*\n\t...\n\t...\n\t...\n\t...\n */\n\ncounter1();\ncounter2();\n\n/*\n\t...\n\t...\n\t...\n\t...\n */\n\ncounter1();",
				technologies: ['React', 'Underscore'],
				annotations: [
					{
						lineText: 'Lines 1-3',
						content: 'Create a jQuery object using the DOM class ‘slider’. Hardcode values for the slide duration and speed in milliseconds.'
					},
					{
						lineText: 'Lines 6-8',
						content: 'Use the jQuery .width() function to get the DOM’s width in pixels. Hide the slider’s children and set their CSS “left” attribute to the slider’s width. Show the slider’s first child and set its CSS “left” attribute to 0.'
					},
					{
						lineText: 'Lines 11-15',
						content: 'Create a slideIn function on jQuery’s prototype that shows the element on which it is called and animates it to the left by the slider’s width.'
					},
					{
						lineText: 'Lines 18-24',
						content: 'Create a similar slideOut function that performs the animation first and then hides the element and sets its CSS “left” attribute to the slider’s width.'
					},
					{
						lineText: 'Lines 23-33',
						content: 'Create a slide function that determines which slide will come next, calls the slideOut function on the current slide, and calls the slideIn function on the next slide.'
					},
					{
						lineText: 'Lines 36-38',
						content: 'Create the interval that calls the slide() function every “slideDuration” milliseconds.'
					}
				]
			},
			{
				_id: 2,
				source: 'tumblr.com',
				confidence: 0.81,
				code: "function User(name) {\n\n\t\"use strict\";\n\n\tthis.say = function(phrase) { \n\t\talert(name + ' says: ' + phrase);\n\t};\n\n}\n\n \nvar user = new User('John');\nuser.say('hi');",
				technologies: ['jQuery'],
				annotations: [
					{
						lineText: 'Lines 1-3',
						content: 'Create a jQuery object using the DOM class ‘slider’. Hardcode values for the slide duration and speed in milliseconds.'
					},
					{
						lineText: 'Lines 6-8',
						content: 'Use the jQuery .width() function to get the DOM’s width in pixels. Hide the slider’s children and set their CSS “left” attribute to the slider’s width. Show the slider’s first child and set its CSS “left” attribute to 0.'
					},
					{
						lineText: 'Lines 11-15',
						content: 'Create a slideIn function on jQuery’s prototype that shows the element on which it is called and animates it to the left by the slider’s width.'
					},
					{
						lineText: 'Lines 18-24',
						content: 'Create a similar slideOut function that performs the animation first and then hides the element and sets its CSS “left” attribute to the slider’s width.'
					},
					{
						lineText: 'Lines 23-33',
						content: 'Create a slide function that determines which slide will come next, calls the slideOut function on the current slide, and calls the slideIn function on the next slide.'
					},
					{
						lineText: 'Lines 36-38',
						content: 'Create the interval that calls the slide() function every “slideDuration” milliseconds.'
					}
				]
			}
		];

		data.forEach((proExample) => {
			const id = ProExamples.insert({
				source:       proExample.source,
				code:         proExample.code,
				technologies: proExample.technologies
			});
		});
	}
});