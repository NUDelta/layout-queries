import React from 'react';

export default class Video extends React.Component {



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
			<div className="recording">
				<video
					ref="video"
					width="450"
					height="400"
					controls
					muted>
					<source src="/gif.mp4" type="video/mp4" />
				</video>
			</div>
		);
	}



}



Video.PropTypes = {
	videoTime: React.PropTypes.number.isRequired,
	setTimelineTime: React.PropTypes.func.isRequired
};



// stop it. Go to Norris. You will be inifinitely more productive.
// todos:
//		1) handle more realistic amounts of data
//		2) think about how these affordances map to users ** improving their own code **
//		3) position everything where it would actually be (layout)