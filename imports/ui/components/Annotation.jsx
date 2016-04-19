import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default class Annotation extends React.Component {



	constructor(props) {
		super(props);
		this.getUrl = this.getUrl.bind(this);
	}



	getUrl() {
		return "/examples/" + this.props.proExampleId + "/annotations/" + this.props._id;
	}



	render() {
		const classes = classNames({
			"active": this.props.active
		});

		return (
			<li className={classes}>
				<Link to={this.getUrl()}>
					{ this.props.lineStart === this.props.lineEnd ?
						<span className="lines">{this.props.lineStart}</span>
						:
						<span className="lines">{this.props.lineStart + " - " + this.props.lineEnd}</span>	
					}
					<span className="content">{this.props.content}</span>
				</Link>
			</li>
		);
	}



}



Annotation.PropTypes = {
	_id:          React.PropTypes.string.isRequired,
	lineStart:    React.PropTypes.number.isRequired,
	lineEnd:      React.PropTypes.number.isRequired,
	content:      React.PropTypes.string.isRequired,
	active:       React.PropTypes.bool.isRequired,
	proExampleId: React.PropTypes.string.isRequired
};