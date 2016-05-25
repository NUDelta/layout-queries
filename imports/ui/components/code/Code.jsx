import React from 'react';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript.js';

export default class Code extends React.Component {



	componentDidUpdate(prevProps, prevState) {
		const selections = this.props.activeCodeStart && this.props.activeCodeEnd;

		if (selections) {
			const instance = this.refs.editor.getCodeMirror();

			instance.setSelection(
				{ line: this.props.activeCodeStart-1, ch: 0 },  // head
				{ line: this.props.activeCodeEnd, ch: 0 },      // anchor
				{ }
			);
			instance.focus();

			const y = instance.charCoords({ line: this.props.activeCodeStart-1, ch: 0 }, "local").top;
			instance.scrollTo(null, y-10);
		}
	}


	render() {
		const options = {
			lineNumbers: true,
			theme: 'neo'
		};

		return <Codemirror value={this.props.code} options={options} ref="editor" />
	}



};



Code.PropTypes = {
	code: React.PropTypes.string.isRequired,
	activeCodeStart: React.PropTypes.number.isRequired,
	activeCodeEnd: React.PropTypes.number.isRequired
};