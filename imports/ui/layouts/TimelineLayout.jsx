import React from 'react';
import HeaderModule   from '../components/header/HeaderModule.jsx';
import CodeModule     from '../components/code/CodeModule.jsx';
import VideoModule    from '../components/VideoModule.jsx';
import TimelineModule from '../components/TimelineModule.jsx';

export default class TimelineLayout extends React.Component {



	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className="layout">
				<HeaderModule
					activeExampleId={this.props.activeExampleId} />
				<CodeModule
					activeExampleId={this.props.activeExampleId} />
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
	activeExampleId: React.PropTypes.string, // only if example selected
	videoTime: React.PropTypes.number.isRequired,
	timelineTime: React.PropTypes.number.isRequired,
	setVideoTime: React.PropTypes.func.isRequired,
	setTimelineTime: React.PropTypes.func.isRequired
};