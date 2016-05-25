import React from 'react';

export default class VideoModule extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			block: false
		};
		this.handleTimeChange = this.handleTimeChange.bind(this);
	}


	componentDidMount() {
		const vid = this.refs.video;
		vid.ontimeupdate = this.handleTimeChange;
	}



	componentWillReceiveProps(nextProps) {
		this.setState({
			block: true
		});
	}



	shouldComponentUpdate(nextProps, nextState) {
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
			<section className="video-module">
				<video
					ref="video"
					controls
					muted>
					<source src="/gif.mp4" type="video/mp4" />
				</video>
			</section>
		);
	}



}



VideoModule.PropTypes = {
	videoTime: React.PropTypes.number.isRequired,
	setTimelineTime: React.PropTypes.func.isRequired
};