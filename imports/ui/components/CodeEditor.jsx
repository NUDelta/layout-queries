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
				{ line: this.props.highlightEnd, ch: 0 }, // anchor
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

    // you've got the setSelection() function working, but you need to highlight instead. You're learning about modes:
    //		https://codemirror.net/doc/manual.html#modeapi
    //
    // function addOverlay(cm, query, hasBoundary, style) {
	// 		cm          - codemirror object
	// 		query       - [char1, char2, char3, ...]
	//		hasBoundary - ???
	//		style       - className (type string)
	//
	//	cm.addOverlay()
	//
	//	makeOverlay(query, hasBoundary, style) {
	//		returns {
	// 			token: function (stream) { if (stream.match(query) && )}
	//		}
	//	}

	// query - regular expression
	// 


	// you're currently reverse engineering the cm.addOverlay() functionality. Almost there. Keep tracking makeOverlay()
	//	function to see what you need to pass to cm.addOverlay().

}



CodeEditor.propTypes = {
	code:           React.PropTypes.string.isRequired,
	highlightStart: React.PropTypes.number, // null if no active annotation
	highlightEnd:   React.PropTypes.number // null if no active annotation
};