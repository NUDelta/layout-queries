import React from 'react';
import CodeEditor from './CodeEditor.jsx';
import CodeInfoRibbon from './CodeInfoRibbon.jsx';

export default ProCode = React.createClass({



	propTypes: {
		results:        React.PropTypes.array.isRequired,
		activeResultId: React.PropTypes.number.isRequired
	},



	render() {
		let result;
		for (let i=0; i < this.props.results.length; i++) {
			if (this.props.results[i]._id === this.props.activeResultId) {
				result = this.props.results[i];
				break;
			}
		}

		return (
			<div className="pane-content">
				<CodeEditor
					code={result.code} />
				<CodeInfoRibbon
					name={result.url}
					confidence={result.confidence}/>
			</div>
		);
	}



});