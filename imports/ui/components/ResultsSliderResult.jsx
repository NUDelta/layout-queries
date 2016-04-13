import React from 'react';
import classNames from 'classnames';

export default ResultsSliderResult = React.createClass({



	propTypes: {
		resultInfo:     React.PropTypes.object.isRequired,
		active:         React.PropTypes.bool.isRequired,
		activateResult: React.PropTypes.func.isRequired
	},



	handleClick(event) {
		this.props.activateResult(this.props.resultInfo._id);
	},



	render() {
		classes = classNames({
			active: this.props.active
		});

		return (
			<li className={classes} onClick={this.handleClick} >
				<span className="url">{this.props.resultInfo.url}</span>
				<div className="confidence">
					<i className="fa fa-circle"></i>
					<span>{this.props.resultInfo.confidence}</span>
				</div>
			</li>
		);
	}



});