import React from 'react';
import HeaderModule   from '../components/new/header/HeaderModule.jsx';
import CodeModule     from '../components/new/CodeModule.jsx';
import VideoModule    from '../components/new/VideoModule.jsx';
import TimelineModule from '../components/new/TimelineModule.jsx';

export default class TimelineLayout extends React.Component {



	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className="layout">
				<HeaderModule
					activeExampleId={this.props.activeExampleId} />
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
	activeExampleId: React.PropTypes.string, // only if example selected
	videoTime: React.PropTypes.number.isRequired,
	timelineTime: React.PropTypes.number.isRequired,
	setVideoTime: React.PropTypes.func.isRequired,
	setTimelineTime: React.PropTypes.func.isRequired
};