import React from 'react';

export default class Annotation extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<li>
				{ this.props.lineStart === this.props.lineEnd ?
					<span className="lines">{"Line " + this.props.lineStart}</span>
					:
					<span className="lines">{"Lines " + this.props.lineStart + " - " + this.props.lineEnd}</span>	
				}
				<span className="content">{this.props.content}</span>
			</li>
		);
	}



}



Annotation.PropTypes = {
	lineStart: React.PropTypes.number.isRequired,
	lineEnd:   React.PropTypes.number.isRequired,
	content:   React.PropTypes.string.isRequired
};