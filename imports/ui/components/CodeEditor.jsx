import React from 'react';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript.js';

export default class CodeEditor extends React.Component {



	constructor(props) {
		super(props);
	}



    render() {
        var options = {
            lineNumbers: true,
            theme: 'neo'
        };
        return <Codemirror value={this.props.code} options={options} />
    }



}



CodeEditor.propTypes = {
	code: React.PropTypes.string.isRequired
};