import React from 'react';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript.js';

export default class CodeEditor extends React.Component {



	constructor(props) {
		super(props);
	}



	componentDidUpdate(prevProps, prevState) {
		if (this.props.highlightStart) {
			const instance = this.refs.editor.getCodeMirror();
			instance.setSelection(
				{ line: this.props.highlightStart-1, ch: 0 },  // head
				{ line: this.props.highlightEnd, ch: 0 },      // anchor
				{ }
			);
			instance.focus();
			const y = instance.charCoords({ line: this.props.highlightStart-1, ch: 0 }, "local").top;
			instance.scrollTo(null, y-10);
		}
	}



    render() {
        var options = {
            lineNumbers: true,
            theme: 'neo'
        };
        return <Codemirror value={this.props.code} options={options} ref="editor" />
    }


}



CodeEditor.propTypes = {
	code:           React.PropTypes.string.isRequired,
	highlightStart: React.PropTypes.number, // null if no active annotation
	highlightEnd:   React.PropTypes.number // null if no active annotation
};