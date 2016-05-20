import React from 'react';
import CodeModule from '../components/new/CodeModule.jsx';
import VideoModule      from '../components/new/VideoModule.jsx';
import TimelineModule from '../components/new/TimelineModule.jsx';

export default class TimelineLayout extends React.Component {



	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className="layout">
				<CodeModule />
				<VideoModule
					videoTime={this.props.videoTime}
					setTimelineTime={this.props.setTimelineTime} />
				<TimelineModule
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