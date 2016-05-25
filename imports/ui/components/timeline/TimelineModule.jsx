import React from 'react';
import TimelineContainer from './TimelineContainer.jsx';

export default class TimelineModule extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<section className="timeline-module">
				<TimelineContainer
					timelineTime={this.props.timelineTime}
					setVideoTime={this.props.setVideoTime}
					activeExampleId={this.props.activeExampleId}
					setActiveCode={this.props.setActiveCode} />
			</section>
		);
	}



};



TimelineModule.PropTypes = {
	timelineTime: React.PropTypes.number.isRequired,
	setVideoTime: React.PropTypes.func.isRequired,
	activeExampleId: React.PropTypes.string, // only if example selected
	setActiveCode: React.PropTypes.func.isRequired
};