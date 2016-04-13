import React from 'react';

export default Annotation = React.createClass({



	propTypes: {
		lineText: React.PropTypes.string.isRequired,
		content:  React.PropTypes.string.isRequired
	},



	render() {
		return (
			<li>
				<span className="lines">{this.props.lineText}</span>
				<span className="content">{this.props.content}</span>
			</li>
		);
	}



});