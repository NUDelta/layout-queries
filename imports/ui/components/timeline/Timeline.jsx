import React from 'react';
import { moment } from 'meteor/momentjs:moment';
import { vis } from 'meteor/jorisbontje:vis';

export default class Timeline extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			timeline: null
		};
		this.onTimeChange = this.onTimeChange.bind(this);
		this.onTimelineClick = this.onTimelineClick.bind(this);
		this.onItemSelect = this.onItemSelect.bind(this);
		this.selectItems = this.selectItems.bind(this);
	}



	componentDidMount() {
		const zero = this.props.zero;



		// timeline parameters
		let container = document.getElementById('visjs');
			items = this.props.items,
			groups = this.props.groups,
			options = {
				align: 'left',
				template: this.props.template,
				zoomable: false,
				margin: { item: { horizontal: 0, vertical: 10 } },
				start: moment(zero),
				end: moment(zero).add(14, 's'),
				min: moment(zero),
				showCurrentTime: false,
				timeAxis: { scale: 'millisecond', step: 200 },
				stack: false,
				height: 280,
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
		}, function () {
			// event listeners
			this.state.timeline.on('timechanged', this.onTimeChange);
			this.state.timeline.on('select', this.onItemSelect);
			this.state.timeline.on('click', this.onTimelineClick);
			setTimeout(function () {
				// images loaded --> redraw
				this.state.timeline.redraw();
				this.state.timeline.addCustomTime(moment(zero), 1);
			}.bind(this), 1000);
		});
	}



	componentDidUpdate(prevProps, prevState) {
		// not initial load
		if (this.state.timeline) {
			const zero = this.props.zero;
			const delta = this.props.timelineTime;
			const customTime = moment(zero).add(delta, 's');

			this.state.timeline.setCustomTime(customTime, 1);
			this.state.timeline.moveTo(customTime);
			this.selectItems();
		}



		// new example, not initial load
		if (this.props.activeExampleId && this.state.timeline) {

			const itemsAdded = prevProps.items.length !== this.props.items.length;
			const newExample = prevProps.activeExampleId !== this.props.activeExampleId;

			if (itemsAdded || newExample) {

				this.state.timeline.setGroups(this.props.groups);
				this.state.timeline.setItems(this.props.items);
				this.state.timeline.redraw();
				setTimeout(() => {
					this.state.timeline.redraw();
				}, 1000);
			}
		}
	}



	onTimeChange(properties) {
		// only fires when user drags
		const sec = moment(properties.time).second(),
			  mil = moment(properties.time).millisecond(),
			  time = sec + (mil / 1000);
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



	onItemSelect(properties) {
		const items = this.state.timeline.itemSet.items;
		const item = items[properties.items[0]];
		const group = item.data.group;

		const lines = this.props.getLines(group);
		this.props.setActiveCode(lines.start, lines.end);
	}



	selectItems() {
		let currTime = moment(this.state.timeline.getCustomTime(1)),
			secs = currTime.seconds(),
			mill = currTime.milliseconds(),

		t = secs + (mill / 1000);

		let items = this.state.timeline.itemSet.items,
			select = [],
			start;

		for (item in items) {

			if (items[item].data.group == 1)
				continue;

			start = moment(items[item].data.start);
			secs = start.seconds();
			mill = start.milliseconds();
			start = secs + (mill / 1000);

			if (Math.abs(start - t) <= 0.3) {
				select.push(item);
			}
		}

		this.state.timeline.setSelection(select);
	}



	render() {
		return (
			<div id="visjs"></div>
		);
	}



};



Timeline.PropTypes = {
	timelineTime: React.PropTypes.number.isRequired,
	setVideoTime: React.PropTypes.func.isRequired,
	activeExampleId: React.PropTypes.string.isRequired,
	setActiveCode: React.PropTypes.func.isRequired,
	zero: React.PropTypes.string.isRequired,
	items: React.PropTypes.array.isRequired,
	groups: React.PropTypes.array.isRequired,
	template: React.PropTypes.func.isRequired,
	getLines: React.PropTypes.func.isRequired
}