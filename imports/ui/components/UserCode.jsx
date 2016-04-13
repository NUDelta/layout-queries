import React from 'react';
import CodeEditor from './CodeEditor.jsx';
import CodeInfoRibbon from './CodeInfoRibbon.jsx';

export default UserPane = React.createClass({



	propTypes: {
		fileName: React.PropTypes.string.isRequired,
		code: 	  React.PropTypes.string.isRequired
	},



	render() {
		return (
			<div className="pane-content">
				<CodeEditor
					code={this.props.code} />
				<CodeInfoRibbon
					name={this.props.fileName} />
			</div>
		);
	}



});