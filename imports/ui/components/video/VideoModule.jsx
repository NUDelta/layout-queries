import React from 'react';
import VideoContainer from './VideoContainer.jsx';

export default class VideoModule extends React.Component {



	render() {
		return (
			<section className="video-module">
				<VideoContainer
					videoTime={this.props.videoTime}
					setTimelineTime={this.props.setTimelineTime}
					activeExampleId={this.props.activeExampleId} />
			</section>
		);
	}



}



VideoModule.PropTypes = {
	videoTime: React.PropTypes.number.isRequired,
	setTimelineTime: React.PropTypes.func.isRequired,
	activeExampleId: React.PropTypes.string.isRequired
};