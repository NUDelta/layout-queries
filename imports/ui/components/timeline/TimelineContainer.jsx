import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ProExamples from '../../../api/ProExamples/ProExamples.js';
import Timeline from './Timeline.jsx';



export default createContainer((params) => {


	const zero = '0000-01-01 00:00:00'; // careful, asshole has mutation problems
	let handle = Meteor.subscribe('ProExamples.public'),
		id = params.activeExampleId,
		example,
		source,
		items = [],
		groups = [];

	// wait for mongo connection
	if (handle.ready()) {

		// example id set
		if (id) {

			example = ProExamples.findOne(id);

			// example exists
			if (example) {
				source = example.source;
				items = makeItems(source);
				groups = makeGroups(source);
			}
		}
	}



	function makeItems(source) {
		let paths = getThumbPaths(source),
			items = [];

		Array.prototype.push.apply(items, makeThumbs(paths, zero, 1));
		Array.prototype.push.apply(items, makeStacks(source));

		return items;
	}



	function makeGroups(source) {
		let groups = [];

		switch(source) {
			case 'xkcd.com':
				groups = [
					{ id: 1, content: 'Thumbnails', className: 'thumbs'},
					{ id: 2, content: 'Events' },
					{ id: 3, content: 'Event Callbacks', },
					{ id: 4, content: 'DOM Hooks'}
				];
				break;
			case 'archfire.org':
				break;
			case 'thorsummoner.github.io':
				break;
		}

		return groups;
	}



	function makeThumbs(paths, start, interval) {
		let thumbs = [],
			t1 = moment(start),
			t2 = moment(start).add(interval, 's'),
			tmp;

		paths.forEach((path, i) => {

			thumbs.push({
				id: 'thumb-' + i,
				group: 1,
				className: 'thumb',
				content: path,
				start: t1,
				end: t2
			});

			tmp = moment(t2);
			t1 = moment(tmp);
			t2 = moment(tmp.add(interval, 's'));
		});

		return thumbs;
	}



	function makeStacks(source) {
		let stacks = [],
			starts,
			stack;

		switch(source) {

			case 'xkcd.com':
				starts = [1, 2.1, 3.2, 4.2, 5.1, 6.4, 7.2, 8.4, 9.4, 10.4, 11.6];
				starts.forEach( (start, i) => {
					s = moment(zero).add(start, 's');

					stacks.push({ id: 'event-' + i, group: 2, className: 'event', content: 'mousedown', start: s });
					stacks.push({ id: 'eventCallback-' + i, group: 3, className: 'event-callback', content: 'drag()', start: moment(s).add(0.1, 's') });
					stacks.push({ id: 'domHook-' + i, group: 4, className: 'dom-hook', content: 'Map.update()', start: moment(s).add(0.2, 's') });
				});
				break;

			case 'archfire.org':
				break;
			case 'thorsummoner.github.io':
				break;
		}

		return stacks;
	}



	function getThumbPaths(source) {
		let dir,
			n;

		switch(source) {
			case 'xkcd.com':
				dir = 'xkcd';
				n = 15;
				break;
			case 'archfire.org':
				dir = 'panelWindows';
				n = 10;
				break;
			case 'thorsummoner.github.io':
				dir = 'thorsummoner';
				n = 10;
				break;
		}

		let paths = [];
		for (let i=1; i<= n; i++) {
			paths.push('/'+dir+'/gif'+i+'.png');
		}
		return paths;
	}



	function template(item) {
		switch(item.group) {
			case 1:
				return "<div class='crop'><img src='" + item.content + "' /></div>";
				break;
			case 2:
				return "<div><i class='item-icon fa fa-clock-o'></i><span class='item-label'>" + item.content + "</span></div>";
				break;
			case 3:
				return "<div><i class='item-icon fa fa-gears'></i><span class='item-label'>" + item.content + "</span></div>";
				break;
			case 4:
				return "<div><i class='item-icon fa fa-th'></i><span class='item-label'>" + item.content + "</span></div>";
				break;
			default:
				return item.content;
				break;

		}
	}



	function getLines(group) {
		let lines = {
			start: null,
			end: null
		};

		switch(group) {
			case 1:
				break;
			case 2:
				lines.start = 116;
				lines.end = 124;
				break;
			case 3:
				lines.start = 105;
				lines.end = 112;
				break;
			case 4:
				lines.start = 62;
				lines.end = 100;
				break;
		}
		return lines;
	}



	return {
		timelineTime: params.timelineTime,
		setVideoTime: params.setVideoTime,
		activeExampleId: params.activeExampleId,
		setActiveCode: params.setActiveCode,
		zero: zero,
		items: items,
		groups: groups,
		template: template,
		getLines: getLines
	};



}, Timeline);