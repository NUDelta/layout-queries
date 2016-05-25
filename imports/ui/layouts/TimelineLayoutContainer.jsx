import React from 'react';
import TimelineLayout from './TimelineLayout.jsx';

export default class TimelineLayoutContainer extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			vTime: 0,
			tTime: 0,
			activeCodeStart: null,
			activeCodeEnd: null
		};
		this.setVideoTime = this.setVideoTime.bind(this);
		this.setTimelineTime = this.setTimelineTime.bind(this);
		this.setActiveCode = this.setActiveCode.bind(this);
	}



	setVideoTime(time) {
		this.setState({ vTime: time });
	}



	setTimelineTime(time) {
		this.setState({ tTime: time });
	}



	setActiveCode(start, end) {
		this.setState({
			activeCodeStart: start,
			activeCodeEnd: end
		});
	}



	render() {
		return (
			<TimelineLayout
				activeExampleId={this.props.activeExampleId}
				videoTime={this.state.vTime}
				timelineTime={this.state.tTime}
				setVideoTime={this.setVideoTime}
				setTimelineTime={this.setTimelineTime}
				activeCodeStart={this.state.activeCodeStart}
				activeCodeEnd={this.state.activeCodeEnd}
				setActiveCode={this.setActiveCode} />
		);
	}



};



TimelineLayoutContainer.PropTypes = {
	activeExampleId: React.PropTypes.string, // only if example selected
};