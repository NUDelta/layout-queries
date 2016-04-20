import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default class ProExampleSlide extends React.Component {



	constructor(props) {
		super(props);
	}



	formatConfidence(c) {
		// round to hudredths, always show hundredths
		return (Math.ceil(c * 100) / 100).toFixed(2);
	}



	render() {
		const confidence = this.props.proExample.confidence || 0;

		classes = classNames({
			active: this.props.active,
			good: confidence >= 0.5,
			mediocre: confidence >= 0.25 && confidence < 0.5,
			bad: confidence < 0.25
		});

		return (
			<li className={classes}>
				<Link to={"/examples/"+this.props.proExample._id}>
					<span className="url">{this.props.proExample.source}</span>
					<div className="confidence">
						<i className="fa fa-circle"></i>
						<span>{this.formatConfidence(confidence)}</span>
					</div>
				</Link>
			</li>
		);
	}
}



ProExampleSlide.propTypes = {
	proExample: React.PropTypes.object.isRequired,
	active:     React.PropTypes.bool.isRequired
};