import React from 'react';
import Video from '../components/new/Video.jsx';
import Timeline from '../components/new/Timeline.jsx';

export default class TimelineLayout extends React.Component {



	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className="layout">
				<Video
					videoTime={this.props.videoTime}
					setTimelineTime={this.props.setTimelineTime} />
				<Timeline
					timelineTime={this.props.timelineTime}
					setVideoTime={this.props.setVideoTime} />
			</div>
		);
	}



};



TimelineLayout.PropTypes = {
	videoTime: React.PropTypes.number.isRequired,
	timelineTime: React.PropTypes.number.isRequired,
	setVideoTime: React.PropTypes.func.isRequired,
	setTimelineTime: React.PropTypes.func.isRequired
};