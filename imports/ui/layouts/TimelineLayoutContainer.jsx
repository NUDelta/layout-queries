import React from 'react';
import TimelineLayout from './TimelineLayout.jsx';

export default class TimelineLayoutContainer extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			vTime: 0,
			tTime: 0
		};
		this.setVideoTime = this.setVideoTime.bind(this);
		this.setTimelineTime = this.setTimelineTime.bind(this);
	}



	setVideoTime(time) {
		this.setState({ vTime: time });
	}



	setTimelineTime(time) {
		this.setState({ tTime: time });
	}



	render() {
		return (
			<TimelineLayout
				videoTime={this.state.vTime}
				timelineTime={this.state.tTime}
				setVideoTime={this.setVideoTime}
				setTimelineTime={this.setTimelineTime} />
		);
	}



};