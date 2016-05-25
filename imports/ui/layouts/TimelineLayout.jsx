import React from 'react';
import HeaderModule   from '../components/header/HeaderModule.jsx';
import CodeModule     from '../components/code/CodeModule.jsx';
import VideoModule    from '../components/video/VideoModule.jsx';
import TimelineModule from '../components/timeline/TimelineModule.jsx';

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
					activeExampleId={this.props.activeExampleId}
					activeCodeStart={this.props.activeCodeStart}
					activeCodeEnd={this.props.activeCodeEnd} />
				<VideoModule
					videoTime={this.props.videoTime}
					setTimelineTime={this.props.setTimelineTime}
					activeExampleId={this.props.activeExampleId} />
				<TimelineModule
					timelineTime={this.props.timelineTime}
					setVideoTime={this.props.setVideoTime}
					activeExampleId={this.props.activeExampleId}
					setActiveCode={this.props.setActiveCode} />
			</div>
		);
	}



};



TimelineLayout.PropTypes = {
	activeExampleId: React.PropTypes.string, // only if example selected
	videoTime: React.PropTypes.number.isRequired,
	timelineTime: React.PropTypes.number.isRequired,
	setVideoTime: React.PropTypes.func.isRequired,
	setTimelineTime: React.PropTypes.func.isRequired,
	activeCodeStart: React.PropTypes.number.isRequired,
	activeCodeEnd: React.PropTypes.number.isRequired,
	setActiveCode: React.PropTypes.func.isRequired
};