import React from 'react';

export default class Video extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			block: false,
			videoSource: ''
		};
		this.handleTimeChange = this.handleTimeChange.bind(this);
	}



	componentDidMount() {
		const vid = this.refs.video;
		vid.ontimeupdate = this.handleTimeChange;
	}



	componentWillReceiveProps(nextProps) {
		this.setState({
			block: true,
			videoSource: nextProps.videoSource
		});
	}



	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.videoSource != nextState.videoSource)
			return true;

		if (this.props.videoTime == nextProps.videoTime)
			return false;
		return true;
	}



	componentDidUpdate(prevProps, prevState) {
		const vid = this.refs.video;

		vid.pause();
		vid.currentTime = this.props.videoTime;
	}



	handleTimeChange() {
		if (!this.state.block) {
			const vid = this.refs.video;
			this.props.setTimelineTime(vid.currentTime);
		}
		this.setState({ block: false });
	}



	render() {
		return (
			<video
				ref="video"
				src={this.state.videoSource}
				controls
				muted>
			</video>
		);
	}



};



Video.PropTypes = {
	videoTime: React.PropTypes.number.isRequired,
	setTimelineTime: React.PropTypes.func.isRequired,
	videoSource: React.PropTypes.string.isRequired
};