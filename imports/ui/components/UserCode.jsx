import React from 'react';
import CodeEditor from './CodeEditor.jsx';
import CodeInfoRibbon from './CodeInfoRibbon.jsx';

export default class UserPane extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<div className="pane-content">
				<CodeEditor
					code={this.props.code} />
				{/*<CodeInfoRibbon
					source={this.props.fileName} />*/}
			</div>
		);
	}



}




UserPane.propTypes = {
	fileName: React.PropTypes.string.isRequired,
	code: 	  React.PropTypes.string.isRequired
};