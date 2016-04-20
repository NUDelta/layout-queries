import { Meteor } from 'meteor/meteor';
import ProExamples from '../../api/ProExamples/ProExamples.js';



Meteor.startup( () => {

	// populate pro examples if collection's empty
	if (ProExamples.find().count() === 0) {
		const data = [
			{
				source: 'youtube.com',
				code: "var ul;\nvar liItems;\nvar imageNumber;\nvar imageWidth;\nvar prev, next;\nvar currentPostion = 0;\nvar currentImage = 0;\n\n\nfunction init(){\n\tul = document.getElementById('image_slider');\n\tliItems = ul.children;\n\timageNumber = liItems.length;\n\timageWidth = liItems[0].children[0].clientWidth;\n\tul.style.width = parseInt(imageWidth * imageNumber) + 'px';\n\tprev = document.getElementById(\"prev\");\n\tnext = document.getElementById(\"next\");\n\tgeneratePager(imageNumber);\n\tprev.onclick = function(){ onClickPrev();};\n\tnext.onclick = function(){ onClickNext();};\n}\n\nfunction animate(opts){\n\tvar start = new Date;\n\tvar id = setInterval(function(){\n\t\tvar timePassed = new Date - start;\n\t\tvar progress = timePassed / opts.duration;\n\t\tif (progress > 1){\n\t\t\tprogress = 1;\n\t\t}\n\t\tvar delta = opts.delta(progress);\n\t\topts.step(delta);\n\t\tif (progress == 1){\n\t\t\tclearInterval(id);\n\t\t\topts.callback();\n\t\t}\n\t}, opts.delay || 17);\n}\n\nfunction slideTo(imageToGo){\n\tvar direction;\n\tvar numOfImageToGo = Math.abs(imageToGo - currentImage);\n\n\tdirection = currentImage > imageToGo ? 1 : -1;\n\tcurrentPostion = -1 * currentImage * imageWidth;\n\tvar opts = {\n\t\tduration:1000,\n\t\tdelta:function(p){return p;},\n\t\tstep:function(delta){\n\t\t\tul.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';\n\t\t},\n\t\tcallback:function(){currentImage = imageToGo;}\t\n\t};\n\tanimate(opts);\n}\n\nfunction onClickPrev(){\n\tif (currentImage == 0){\n\t\tslideTo(imageNumber - 1);\n\t} \t\t\n\telse{\n\t\tslideTo(currentImage - 1);\n\t}\t\t\n}\n\nfunction onClickNext(){\n\tif (currentImage == imageNumber - 1){\n\t\tslideTo(0);\n\t}\t\t\n\telse{\n\t\tslideTo(currentImage + 1);\n\t}\t\t\n}\n\nfunction generatePager(imageNumber){\t\n\tvar pageNumber;\n\tvar pagerDiv = document.getElementById('pager');\n\tfor (i = 0; i < imageNumber; i++){\n\t\tvar li = document.createElement('li');\n\t\tpageNumber = document.createTextNode(parseInt(i + 1));\n\t\tli.appendChild(pageNumber);\n\t\tpagerDiv.appendChild(li);\n\t\tli.onclick = function(i){\n\t\t\treturn function(){\n\t\t\t\tslideTo(i);\n\t\t\t}\n\t\t}(i);\n\t}\t\n\tvar computedStyle = document.defaultView.getComputedStyle(li, null);\n\tvar liWidth = parseInt(li.offsetWidth);\n\tvar liMargin = parseInt(computedStyle.margin.replace('px',\"\"));\n\tpagerDiv.style.width = parseInt((liWidth + liMargin * 2) * imageNumber) + 'px';\n}\nwindow.onload = init;\n",
				componentPattern: 'Image Carousel',
				technologies: [],
				annotations: [
					{
						lineStart: 1,
						lineEnd: 7,
						content: 'Declare global variables.'
					},
					{
						lineStart: 10,
						lineEnd: 21,
						content: 'Declare a function init() to initialize those global variables, call the generatePager() function, and register events on the previous and next buttons.'
					},
					{
						lineStart: 23,
						lineEnd: 38,
						content: 'Declare a function animate() that takes an options object and repeatedly slides the image by calling the opts.step() function with a parameter delta defining how much to slide by.'
					},
					{
						lineStart: 40,
						lineEnd: 55,
						content: 'Declare a function slideTo() that takes as a parameter which image index is next. The function calls animate() on an opts object specifying the animation duration, the step function which actually performs the sliding, and a callback function to run once the animation is complete.'
					},
					{
						lineStart: 57,
						lineEnd: 64,
						content: 'Declare a function onClickPrev() to handle a user clicking on the previous button. The slideTo() function is called with the appropriate image index.'
					},
					{
						lineStart: 66,
						lineEnd: 73,
						content: 'Declare a function onClickNext() to handle a user clicking on the next button. The slideTo() function is called with the appropriate image index.'
					},
					{
						lineStart: 75,
						lineEnd: 93,
						content: 'Declare a function generatePager() that creates the buttons below the slider used to slide to specific images. A click listener is registered on each button, calling the slideTo() function with the appropriate image index.'
					},
					{
						lineStart: 94,
						lineEnd: 94,
						content: 'Register the init() function to run when the web page loads.'
					}
				]
			},
			{
				source: 'tumblr.com',
				code: "$(document).ready(function () {\n\n  var change_img_time = 4000,\n      transition_speed = 400;\n\n  var listItems = $(\"#slider\").children('li'),\n      dotItems = $('#dots').children('li'),\n      listLen = listItems.length,\n      current,\n      changeTimeout;\n\n  function moveTo(newIndex) {\n\n    var i = newIndex;\n\n    if (newIndex == 'prev') {\n        i = (current > 0) ? (current - 1) : (listLen - 1);\n    }\n\n    if (newIndex == 'next') {\n        i = (current < listLen - 1) ? (current + 1) : 0;\n    }\n\n    dotItems.removeClass('active')\n            .eq(i).addClass('active');\n\n    listItems.fadeOut(transition_speed)\n             .eq(i).fadeIn(transition_speed);\n\n    current = i;\n\n    //resets time interval if user clicks on slider dot; then begin automated slider\n    clearTimeout(changeTimeout);\n    changeTimeout = setTimeout(function() { moveTo('next'); }, change_img_time);\n  };\n\n  // Event handlers\n  $(\"#dots li\").click(function () {\n    var i = $('#dots li').index(this);\n    moveTo(i);\n  });\n\n  $(\"#prev\").click(function () {\n    moveTo('prev');\n  });\n\n  $(\"#next\").click(function () {\n    moveTo('next');\n  });\n  \n  //initialize slider on load\n  moveTo('next');\n});",
				componentPattern: 'Image Carousel',
				technologies: ['jQuery'],
				annotations: [
					{
						lineStart: 1,
						lineEnd: 1,
						content: 'Create an event listener that triggers when the document is ready.'
					},
					{
						lineStart: 3,
						lineEnd: 10,
						content: 'Initialize the values for how long each image is shown when the slider is automated and how long the animation duration will be. Create handles for each of the DOM slide and buttons below the slider. Declare other global variables.'
					},
					{
						lineStart: 12,
						lineEnd: 35,
						content: "Create a function moveTo() that takes either the next image's index or the strings 'prev' or 'next' as a parameter. Set the 'active' class on the appropriate dot button, fade out the current image, and fade in the new image. Start the automated sliding."
					},
					{
						lineStart: 38,
						lineEnd: 41,
						content: 'Create an event listener on each of the dot buttons that calls the moveTo() function with the appropriate image index.'
					},
					{
						lineStart: 43,
						lineEnd: 49,
						content: 'Create event listeners on the prev and next buttons that call the moveTo() function with the corresponding string.'
					},
					{
						lineStart: 52,
						lineEnd: 52,
						content: 'Initialize the automated slider'
					}
				]
			},
			{
				source: 'cnn.com',
				code: "//Add the first image \n\n$(document).ready(function(){\n\n\n\t//initializations\n\tvar pictures = $(\"#slider\").children(\"li\");\n\tvar navItems = $(\"#navigation\").children(\"li\");\n\tvar currentNav, currentPic;\n\n\n\t//initialize nav\n\t$(\"#navigation\").find('li').first().addClass('active');\n\n\tfunction goTo(i){\n\t\t$(navItems).removeClass('active');\n\t\t$(\"#navigation li\").eq(i).addClass('active');\n\n\t\tpictures.fadeOut(400)\n\t\t\t\t.eq(i).fadeIn(400);\n\t}\n\n\n\n\t//Click on new navigation button; make active\n\t$(\"#navigation li\").on('click',function(){\n\t\tvar index = $(this).index();\n\t\tgoTo(index);\n\t});\n\n\t$(\"#next\").on('click',function(){\n\t\t//get current Nav index\n\t\tcurrentNav = parseInt($('.active').index());\n\t\t\tif (currentNav <3){\n\t\t\t\tgoTo(currentNav+1);\n\t\t\t} else {\n\t\t\t\tgoTo(0);\n\t\t\t}\n\t});\n\n\t$(\"#prev\").on('click',function(){\n\t\t//get current Nav index\n\t\tcurrentNav = parseInt($('.active').index());\n\t\t\tif (currentNav >0){\n\t\t\t\tgoTo(currentNav-1);\n\t\t\t} else {\n\t\t\t\tgoTo(3);\n\t\t\t}\n\t});\n\tgoTo(0);\n\n\t//loop to cycle through\n\tsetInterval(function(){\n      $(\"#next\").trigger('click');\n    },2500);\n});\n\n\n",
				componentPattern: 'Image Carousel',
				technologies: ['jQuery'],
				annotations: [
					{
						lineStart: 3,
						lineEnd: 3,
						content: 'Create an event listener that triggers when the document is ready.'
					},
					{
						lineStart: 7,
						lineEnd: 9,
						content: 'Create handles on the DOM slider and navigation items. Declare global variables.'
					},
					{
						lineStart: 13,
						lineEnd: 13,
						content: "Add the 'active' class to the navigation item."
					},
					{
						lineStart: 15,
						lineEnd: 21,
						content: "Declare a function goTo() that takes a picture index as a parameter. Add the 'active' class to the corresponding navigation item, fade out all of the pictures, and fade in the appropriate picture."
					},
					{
						lineStart: 26,
						lineEnd: 29,
						content: 'Register a click event listener on the navigation items that calls the goTo() function with the corresponding picture index.'
					},
					{
						lineStart: 31,
						lineEnd: 39,
						content: 'Register a click event listener on the next button that calls the goTo() function with the index for the next picture.'
					},
					{
						lineStart: 41,
						lineEnd: 50,
						content: 'Register a click event listener on the previous button that calls the goTo() function with the index for the previous picture.'
					},
					{
						lineStart: 53,
						lineEnd: 55,
						content: 'Trigger a click event on the next button every 2.5 seconds.'
					}
				]
			},
			{
				source: 'reddit.com',
				code: "const ANIMATION_TIME = 600;\nconst CAROUSEL_WIDTH = 400;\nconst NB_OF_PHOTOS = 4;\nconst TIME_BETWEEN_PHOTOS = 3000;\nvar activePhoto = 1;\nvar timer;\n\nvar clickLeft = function(){\n  changeListOrderLeft();\n  $('#slides ul').animate({left: getPos() + CAROUSEL_WIDTH}, ANIMATION_TIME);\n  setActivePhoto(-1);\n  resetTimer();\n}\n\nvar clickRight = function(){\n  $('#slides ul').animate({left: getPos() - CAROUSEL_WIDTH}, ANIMATION_TIME, changeListOrderRight );\n  setActivePhoto(+1);\n  resetTimer();\n}\n\nvar getPos = function(){\n  return $('#slides ul').position().left ;\n}\n\nvar changeListOrderRight = function(){\n  $('#slides ul').css('left', 0); \n  $('#slides ul').find(\"li:last\").after($('#slides ul').find(\"li:first\"));\n}\n\nvar changeListOrderLeft = function(){\n  $('#slides ul').find(\"li:first\").before($('#slides ul').find(\"li:last\"));\n  $('#slides ul').css('left',-CAROUSEL_WIDTH); \n}\n\nvar setActivePhoto = function(nb){\n  activePhoto += nb;\n  if(activePhoto>NB_OF_PHOTOS)\n    activePhoto -= NB_OF_PHOTOS;\n  if(activePhoto<1)\n    activePhoto += NB_OF_PHOTOS;\n\n  $('.circle').removeClass('active');\n  $('.'+activePhoto).addClass('active');\n}\n\nvar jumpToSlide = function(slide){\n  var jump = slide - activePhoto;\n  if (jump>0){\n    for(var i = 0; i < jump  ;i++){\n      $('#slides ul').animate({left: getPos() - CAROUSEL_WIDTH}, 0, changeListOrderRight );\n      setActivePhoto(+1);\n    }\n  }\n  else{\n    for(var i = 0; i < -jump  ;i++){\n      changeListOrderLeft();\n      $('#slides ul').animate({left: getPos() + CAROUSEL_WIDTH}, 0);\n      setActivePhoto(-1);\n    }\n  }\n  resetTimer();\n}\n\nvar showPreview = function(){\n\n}\n\nvar time = function(){\n  clickRight();\n}\n\nvar resetTimer = function(){\n   clearTimeout(timer);\n   timer = setTimeout(time, TIME_BETWEEN_PHOTOS);\n}\n\nvar addCircles = function(){\n  for (var i = 1;i<NB_OF_PHOTOS + 1;i++){\n    $('.circles ul').append('<li><div onClick=\"jumpToSlide('+i+')\" class=\"circle '+ i+'\"></div></li>')\n  }\n  $('.'+activePhoto).addClass('active');\n  var width = 40*NB_OF_PHOTOS-20;\n  $('.circles').css('width', width);\n  $('.circles').css('margin-left', (CAROUSEL_WIDTH-width)/2);\n}\n\n\n$(document).ready(function(){\n  addCircles();\n  resetTimer();\n})",
				componentPattern: 'Image Carousel',
				technologies: [],
				annotations: [
					{
						lineStart: 1,
						lineEnd: 6,
						content: 'Set constant values that parametrize the animation, initialize an activePhoto index, and declare a timer.'
					},
					{
						lineStart: 8,
						lineEnd: 13,
						content: 'Declare a function clickLeft() that animates the slides to the left by one image.'
					},
					{
						lineStart: 15,
						lineEnd: 19,
						content: 'Declare a function clickRight() that animates the slides to the right by one image.'
					},
					{
						lineStart: 21,
						lineEnd: 23,
						content: 'Declare a getter function getPos() that returns the "left" position of the slideshow.'
					},
					{
						lineStart: 25,
						lineEnd: 28,
						content: 'Declare a function changeListOrderRight() that handles looping from the last slide to the first slide by adding the first slide to the end of the last slide.'
					},
					{
						lineStart: 30,
						lineEnd: 33,
						content: 'eclare a function changeListOrderLeft() that handles looping from the first slide to the last slide by adding the last slide before the first slide.'
					},
					{
						lineStart: 35,
						lineEnd: 44,
						content: 'Declare a function setActivePhoto that takes an increment value, incrementing/decrementing the value of "activePhoto" by the parameter given.'
					},
					{
						lineStart: 46,
						lineEnd: 62,
						content: 'Declare a function jumpToSlide that takes as a parameter the index of the new slide to animate to. Depending on whether the new slide is to the left or right of the current slide, the appropriate animation is completed.'
					},
					{
						lineStart: 64,
						lineEnd: 70,
						content: 'Irrelevant functions that are never called.'
					},
					{
						lineStart: 72,
						lineEnd: 75,
						content: 'Declare a function resetTimer() that resets the timer.'
					},
					{
						lineStart: 77,
						lineEnd: 85,
						content: 'Declare a function addCircles() that generates the circle buttons allowing users to jump to any picture in the slideshow.'
					},
					{
						lineStart: 88,
						lineEnd: 91,
						content: 'When the document is ready, generate the circle buttons and reset the timer.'
					}
				],
			},
			{
				source: 'national-geographic.com',
				code: "var interval = 1000; // You can change this value to your desired speed. The value is in milliseconds, so if you want to advance a slide every 5 seconds, set this to 5000.\nvar switching = setInterval(\"toggleSlide(true)\", interval);\nwindow.paused = false;\nfunction toggleInterval() {\n    var button = document.getElementById(\"pauseButton\");\n    if(!window.paused) {\n        clearInterval(switching);\n        button.value = \"Resume\";\n    } else {\n        switching = setInterval(\"toggleSlide(true)\", interval);\n        button.value = \"Pause\";\n    }\n    window.paused = !(window.paused);\n}\n// direction = boolean value: true or false. If true, go to NEXT slide; otherwise go to PREV slide\nfunction toggleSlide(direction) {\n    var elements = document.getElementsByClassName(\"hideable\"); // gets all the \"slides\" in our slideshow\n    \n    // Find the LI that's currently displayed\n    var visibleID = getVisible(elements);\n    elements[visibleID].style.display = \"none\"; // hide the currently visible LI\n    if(!direction) {\n        var makeVisible = prev(visibleID, elements.length); // get the previous slide\n    } else {\n        var makeVisible = next(visibleID, elements.length); // get the next slide\n    }\n    elements[makeVisible].style.display = \"block\"; // show the previous or next slide\n    var sn = document.getElementById(\"slideNumber\");\n    sn.innerHTML = (makeVisible + 1);\n}\nfunction getVisible(elements) {\n    var visibleID = -1;\n    for(var i = 0; i < elements.length; i++) {\n        if(elements[i].style.display == \"block\") {\n            visibleID = i;\n        }\n    }\n    return visibleID;\n}\n \nfunction prev(num, arrayLength) {\n    if(num == 0) return arrayLength-1;\n    else return num-1;\n}\n \nfunction next(num, arrayLength) {\n    if(num == arrayLength-1) return 0;\n    else return num+1;\n}",
				componentPattern: 'Image Carousel',
				technologies: ['jQuery'],
				annotations: [
					{
						lineStart: 1,
						lineEnd: 3,
						content: 'Run the toggleSlide() function with parameter true every 1 second. At first, the slider is not paused.'
					},
					{
						lineStart: 4,
						lineEnd: 14,
						content: 'Declare a function toggleInterval() that pauses or resumes the slideshow depending on its current state by clearing or restarting the interval.'
					},
					{
						lineStart: 16,
						lineEnd: 30,
						content: 'Declare a function toggleSlide() that takes a boolean parameter "direction" that reperesents whether the upcoming slide to be shown should be the previous slide or the next slide. The current slide is hidden while the upcoming slide is shown by setting the "display" style attribute accordingly.'
					},
					{
						lineStart: 31,
						lineEnd: 39,
						content: 'Declare a function getVisible() that takes an array parameter "elements" containing all of the slide DOM objects. The index of the currently visible slide is returned.'
					},
					{
						lineStart: 41,
						lineEnd: 4,
						content: 'Declare a function prev() that takes the index of a slide as well as the total number of slides and returns the index of the slide preceeding that slide.'
					},
					{
						lineStart: 46,
						lineEnd: 49,
						content: 'Declare a function next() that takes the index of a slide as well as the total number of slides and returns the index of the slide succeeding that slide.'
					},
					
				],
			},
			{
				source: 'twitter.com',
				code: "angular.module('website', ['ngAnimate', 'ngTouch'])\n    .controller('MainCtrl', function ($scope) {\n        $scope.slides = [\n            {image: 'images/img00.jpg', description: 'Image 00'},\n            {image: 'images/img01.jpg', description: 'Image 01'},\n            {image: 'images/img02.jpg', description: 'Image 02'},\n            {image: 'images/img03.jpg', description: 'Image 03'},\n            {image: 'images/img04.jpg', description: 'Image 04'}\n        ];\n\n        $scope.direction = 'left';\n        $scope.currentIndex = 0;\n\n        $scope.setCurrentSlideIndex = function (index) {\n            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';\n            $scope.currentIndex = index;\n        };\n\n        $scope.isCurrentSlideIndex = function (index) {\n            return $scope.currentIndex === index;\n        };\n\n        $scope.prevSlide = function () {\n            $scope.direction = 'left';\n            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;\n        };\n\n        $scope.nextSlide = function () {\n            $scope.direction = 'right';\n            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;\n        };\n    })\n    .animation('.slide-animation', function () {\n        return {\n            beforeAddClass: function (element, className, done) {\n                var scope = element.scope();\n\n                if (className == 'ng-hide') {\n                    var finishPoint = element.parent().width();\n                    if(scope.direction !== 'right') {\n                        finishPoint = -finishPoint;\n                    }\n                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });\n                }\n                else {\n                    done();\n                }\n            },\n            removeClass: function (element, className, done) {\n                var scope = element.scope();\n\n                if (className == 'ng-hide') {\n                    element.removeClass('ng-hide');\n\n                    var startPoint = element.parent().width();\n                    if(scope.direction === 'right') {\n                        startPoint = -startPoint;\n                    }\n\n                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });\n                }\n                else {\n                    done();\n                }\n            }\n        };\n    });\n",
				componentPattern: 'Image Carousel',
				technologies: ['Angular', 'ngAnimate', 'TweenMax'],
				annotations: [
					{
						lineStart: 1,
						lineEnd: 2,
						content: 'Declare an Angular module named website that depends on ngAnimate and ngTouch and a controller named MainController, injecting the $scope service.'
					},
					{
						lineStart: 3,
						lineEnd: 9,
						content: 'Declare the array of slides on the scope.'
					},
					{
						lineStart: 11,
						lineEnd: 12,
						content: 'Initialize the animation to go in the left direction and the slider to begin with the first image.'
					},
					{
						lineStart: 14,
						lineEnd: 17,
						content: 'Declare a function setCurrentSlideIndex() on the scope that takes as a parameter the index of the upcoming slide. Set the direction of animation accordingly and overwrite the old value for $scope.currentIndex.'
					},
					{
						lineStart: 19,
						lineEnd: 21,
						content: 'Declare a function isCurrentSlideIndex() on the scope that returns whether the current slide index is equal to the passed parameter.'
					},
					{
						lineStart: 23,
						lineEnd: 26,
						content: 'Declare a function prevSlide() on the scope that sets the animation direction to the left and sets the appropriately previous slide as the current index.'
					},
					{
						lineStart: 28,
						lineEnd: 30,
						content: 'Declare a function nextSlide() on the scope that sets the animation direction to the right and sets the appropriately next slide as the current index.'
					},
					{
						lineStart: 33,
						lineEnd: 33,
						content: 'Declare an ngAnimate animation that uses the class ".slide-animation".'
					},
					{
						lineStart: 35,
						lineEnd: 48,
						content: 'When sliding out the current slide, run a function that calculates the end pixel position value of the left of that slide and performs the animation to that position using the TweenMax.to() function.'
					},
					{
						lineStart: 49,
						lineEnd: 65,
						content: 'When sliding in the upcoming slide, run a function that calculates the start pixel position value of the left of that slide and performs the animation to that position using the TweenMax.to() function.'
					}
				],
			},
			{
				source: 'ikea.com',
				code: "\"use strict\";\n\nangular.module('HiggidyCarousel',  [])\n\n  .controller('HiggidyCarousel.controller', function($scope, $interval) {\n    var timeout;\n    $scope.carousel = {\n      current: 0,\n      max: 0\n    };\n    $scope.setMax = function() {\n      if ($scope.images){\n        $scope.carousel.max = $scope.images.length;\n      } else {\n        $scope.carousel.max = 1;\n      }\n    };\n    $scope.show = function(i) {\n      $scope.resetTimeout();\n      $scope.carousel.current = i;\n    };\n    $scope.moveOn = function() {\n      $scope.carousel.current++;\n      if ($scope.carousel.current >= $scope.carousel.max) {\n        $scope.carousel.current = 0;\n      }\n    };\n    $scope.initTimeout = function() {\n      timeout = $interval($scope.moveOn, $scope.carousel.timeout);\n    };\n    $scope.resetTimeout = function() {\n      $interval.cancel(timeout);\n      $scope.initTimeout();\n    };\n    $scope.$watch('carousel.timeout', $scope.initTimeout);\n    $scope.$watch('images', $scope.setMax);\n  })\n\n  .directive('higgidyCarousel', function() {\n    var directive = {\n      controller: 'HiggidyCarousel.controller',\n      scope: true,\n      link: {\n        pre:function(scope, element, attrs) {\n          scope.carousel.width = element[0].offsetWidth;\n          scope.getWidth = function() {\n            scope.carousel.width = element[0].offsetWidth;\n          };\n          scope.carousel.timeout = attrs.timeout || 1000;\n        }\n      }\n    };\n    return directive;\n  })\n\n  .directive('higgidyCarouselImages', function() {\n    var directive = {\n      scope:true,\n      link: {\n        post: function(scope, element) {\n          scope.setsWidths = function() {\n            var totalWidth = scope.carousel.width * scope.carousel.max;\n            element.find('img').css({\n              width: scope.carousel.width + 'px'\n            });\n            element.css({\n              width: totalWidth + 'px'\n            });\n          };\n          scope.animateScroll = function() {\n            element.css( {'margin-left': 0-scope.carousel.width * scope.carousel.current + \"px\"});\n          };\n          scope.$watch('carousel.max', scope.setsWidths);\n          scope.$watch('carousel.current', scope.animateScroll);\n        }\n      }\n    };\n    return directive;\n  });\n",
				componentPattern: 'Image Carousel',
				technologies: ['Angular'],
				annotations: [
					{
						lineStart: 3,
						lineEnd: 3,
						content: 'Create a module named HiggidyCarousel that has no dependencies.'
					},
					{
						lineStart: 5,
						lineEnd: 5,
						content: 'Create a controller named HiggidyCarousel.controller, injeecting the $scope and $interval services.'
					},
					{
						lineStart: 7,
						lineEnd: 10,
						content: 'Initialize an object carousel on the scope that specifies the current slide index and the maximum slide index.'
					},
					{
						lineStart: 11,
						lineEnd: 17,
						content: 'Declare a function setMax() on the scope that sets the actual value of the maximum slide index based on the number of images in the carousel.'
					},
					{
						lineStart: 18,
						lineEnd: 21,
						content: 'Declare a function show() on the scope that resets the timer and sets the current slide index to the function parameter i.'
					},
					{
						lineStart: 22,
						lineEnd: 27,
						content: 'Declare a function moveOn() on the scope that updates the current slide index by incrementing its current value and looping it to the first slide if necessary.'
					},
					{
						lineStart: 28,
						lineEnd: 30,
						content: 'Declare a function initTimeout() on the scope that initializes a timer specifying that the moveOn() function be called every $scope.carousel.timeout milliseconds.'
					},
					{
						lineStart: 31,
						lineEnd: 34,
						content: 'Declare a function resetTimeout() that cancels the current timer and starts a new one.'
					},
					{
						lineStart: 35,
						lineEnd: 35,
						content: 'Every time the $scope.carousel.timeout value changes, run the initTimeout() function.'
					},
					{
						lineStart: 36,
						lineEnd: 36,
						content: 'Every time the $scope.images value changes, call the $scope.setMax() function.'
					},
					{
						lineStart: 39,
						lineEnd: 54,
						content: "Create a directive named higgidyCarousel that uses the HiggidyCarousel.controller controller and has access to that controller's scope. The directive sets the carousel's width appropriately and sets the scope.carousel.timeout value to either a value specified in the directives attributes or 1000 milliseconds."
					},
					{
						lineStart: 56,
						lineEnd: 79,
						content: "Create a directive named higgidyCarouselImages that has access to its parent scope. The directive calculates a slide's width and animates the slider by setting its 'margin-left' CSS attribute to the appropriate pixel position so that the current slide is in the viewport."
					},
				],
			},
			{
				source: 'facebook.com',
				code: "slider = $('.slider'); // Slider element\nslideDuration = 3000; // Duration of each slide in milliseconds\nslideSpeed = 1000; // Speed of slide animation in milliseconds (must be equal of less than slideDuration)\n\n\nwidth = slider.width();\nslider.children().hide().css({left: width});\nslider.children(':first').show().css({left: 0});\n\n// Slide in from the left\n$.fn.slideIn = function () {\n    $(this).show().animate({\n        left: \"-=\" + width\n    }, slideSpeed / 2);\n}\n\n// Slide out to the left\n$.fn.slideOut = function () {\n    $(this).animate({\n        left: \"-=\" + width\n    }, slideSpeed / 2, function () {\n        $(this).hide().css({left: width});\n    });\n}\n\n// Main slide function\nfunction slide() {\n    currentSlide = slider.find('div:visible:first');\n    nextSlide = (!slider.children(\":last\").is(\":visible\")) ? currentSlide.next() : slider.children(':first');\n\n    currentSlide.slideOut();\n    nextSlide.slideIn();\n}\n\n// Timer function\nwindow.setInterval(function () {\n    slide();\n}, slideDuration);",
				componentPattern: 'Image Carousel',
				technologies: ['jQuery'],
				annotations: [
					{
						lineStart: 1,
						lineEnd: 3,
						content: 'Create a jQuery object using the DOM class ‘slider’. Hardcode values for the slide duration and speed in milliseconds.'
					},
					{
						lineStart: 6,
						lineEnd: 8,
						content: 'Use the jQuery .width() function to get the DOM’s width in pixels. Hide the slider’s children and set their CSS “left” attribute to the slider’s width. Show the slider’s first child and set its CSS “left” attribute to 0.'
					},
					{
						lineStart: 11,
						lineEnd: 15,
						content: 'Create a slideIn function on jQuery’s prototype that shows the element on which it is called and animates it to the left by the slider’s width.'
					},
					{
						lineStart: 18,
						lineEnd: 24,
						content: 'Create a similar slideOut function that performs the animation first and then hides the element and sets its CSS “left” attribute to the slider’s width.'
					},
					{
						lineStart: 23,
						lineEnd: 33,
						content: 'Create a slide function that determines which slide will come next, calls the slideOut function on the current slide, and calls the slideIn function on the next slide.'
					},
					{
						lineStart: 36,
						lineEnd: 38,
						content: 'Create the interval that calls the slide() function every “slideDuration” milliseconds.'
					}
				]
			},
		];

		data.forEach((proExample) => {
			const proExampleId = ProExamples.insert({
				source:           proExample.source,
				code:             proExample.code,
				componentPattern: proExample.componentPattern,
				technologies:     proExample.technologies
			});

			proExample.annotations.forEach((annotation) => {
				const annotationId = Annotations.insert({
					proExampleId: proExampleId,
					lineStart: annotation.lineStart,
					lineEnd: annotation.lineEnd,
					content: annotation.content
				});
			});
		});
	}
});