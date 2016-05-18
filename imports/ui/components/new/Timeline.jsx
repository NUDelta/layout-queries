import React from 'react';
import { vis } from 'meteor/jorisbontje:vis';
import { moment } from 'meteor/momentjs:moment';

export default class Timeline extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			zero: '0000-01-01 00:00:00', // this asshole mutates easily, careful
			timeline: null
		};
		this.onTimeChange = this.onTimeChange.bind(this);
		this.onTimelineClick = this.onTimelineClick.bind(this);
		this.selectItems = this.selectItems.bind(this);
	}



	componentDidMount() {
		const container = document.getElementById('vis');
		const zero = this.state.zero;
		const items = this.makeItems();

		const groups = [
			{ id: 1, content: 'Thumbnails', className: 'thumbs'},
			{ id: 2, content: 'Events' },
			{ id: 3, content: 'Event Callbacks', },
			{ id: 4, content: 'DOM Hooks'}
		];

		const options = {
			align: 'left',
			template: this.template,
			zoomable: false,
			margin: { item: { horizontal: 0, vertical: 10 } },
			start: moment(zero),
			end: moment(zero).add(9, 's'),
			min: moment(zero),
			timeAxis: { scale: 'millisecond', step: 100 },
			stack: false,
			format: {
				minorLabels: {
					millisecond: 'S',
				},
				majorLabels: {
					second: 's'
				}
			},
		};

		this.setState({
			timeline: new vis.Timeline(container, items, groups, options)
		}, () => {
			setTimeout(() => {
				this.state.timeline.redraw();
				this.state.timeline.addCustomTime(moment(zero), 1);
				this.state.timeline.on('timechanged', this.onTimeChange);
				this.state.timeline.on('click', this.onTimelineClick);
			}, 1000);
		});
	}



	componentDidUpdate(prevProps, prevState) {
		const zero = this.state.zero;
		const delta = this.props.timelineTime;
		const customTime = moment(zero).add(delta, 's');

		if (this.state.timeline) {
			this.state.timeline.setCustomTime(customTime, 1);
			this.state.timeline.moveTo(customTime);
			this.selectItems()
		}
	}



	makeItems() {
		const paths = [ '/gif1.png', '/gif2.png', '/gif3.png', '/gif4.png', '/gif5.png', '/gif6.png', '/gif7.png', '/gif8.png', '/gif9.png', '/gif10.png', '/gif11.png', '/gif12.png', '/gif13.png', '/gif14.png', '/gif15.png' ];
		const zero = this.state.zero;

		let items = [];
		Array.prototype.push.apply(items, this.makeThumbs(paths, zero, 1));
		Array.prototype.push.apply(items, this.makeCallStack(1, moment(zero).add(3, 's')));
		Array.prototype.push.apply(items, this.makeCallStack(2, moment(zero).add(3.5, 's')));
		Array.prototype.push.apply(items, this.makeCallStack(3, moment(zero).add(7, 's')));
		Array.prototype.push.apply(items, this.makeCallStack(4, moment(zero).add(12, 's')));

		return items;
	}



	makeThumbs(paths, start, interval) {
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



	makeCallStack(id, start) {
		let stack = [];

		stack.push({
			id: 'event-' + id,
			group: 2,
			className: 'event',
			content: 'mousedown',
			start: start
		});
		stack.push({
			id: 'eventCallback-' + id,
			group: 3,
			className: 'event-callback',
			content: 'drag()',
			start: moment(start).add(0.1, 's')
		});
		stack.push({
			id: 'domHook-' + id,
			group: 4,
			className: 'dom-hook',
			content: 'Map.update()',
			start: moment(start).add(0.2, 's')
		});

		return stack;
	}



	template(item) {
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



	onTimeChange(properties) {
		// only fires when user drags
		const sec = moment(properties.time).second(),
			  mil = moment(properties.time).millisecond(),
			  time = sec + (mil / 1000);
		console.log('onTimeChanged');
		this.props.setVideoTime(time);
	}



	onTimelineClick(properties) {
		if (properties.item == null) {
			this.state.timeline.setCustomTime(moment(properties.time), 1);

			const sec = moment(properties.time).second(),
			  	  mil = moment(properties.time).millisecond(),
			  	  time = sec + (mil / 1000);
			this.props.setVideoTime(time);
		}
	}



	selectItems() {
		let currTime = moment(this.state.timeline.getCustomTime(1)),
			secs = currTime.seconds(),
			mill = currTime.milliseconds();
		currTime = secs + (mill / 1000);

		const items = this.state.timeline.itemSet.items;
		console.log(items);

		let select = [], start;

		for (item in items) {

			if (items[item].data.group == 1)
				continue;

			start = moment(items[item].data.start);
			secs = start.seconds();
			mill = start.milliseconds();
			start = secs + (mill / 1000);

			if (Math.abs(start - currTime) <= 0.3) {
				select.push(item);
			}
		}

		this.state.timeline.setSelection(select);
	}



	render() {
		return (
			<div id="vis"></div>
		);
	}



};



Timeline.PropTypes = {
	timelineTime: React.PropTypes.number.isRequired,
	setVideoTime: React.PropTypes.func.isRequired
};