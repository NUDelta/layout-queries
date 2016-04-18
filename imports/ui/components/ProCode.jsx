import React from 'react';
import CodeEditor from './CodeEditor.jsx';
import CodeInfoRibbon from './CodeInfoRibbon.jsx';

export default class ProCode extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<div className="pane-content">
				<CodeEditor
					code={this.props.proExample.code} />
				{/*<CodeInfoRibbon
					source={this.props.proExample.source}
					confidence={0.98}/>*/}
			</div>
		);
	}



}



ProCode.propTypes = {
	connected:  React.PropTypes.bool.isRequired,
	proExample: React.PropTypes.object.isRequired
};