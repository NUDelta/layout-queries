import React from 'react';
import TimelineLayoutContainer from '../layouts/TimelineLayoutContainer.jsx';

export default class TimelinePage extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<div className="page" id="timeline">
				<TimelineLayoutContainer />
			</div>
		);
	}



};