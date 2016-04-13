import React from 'react';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript.js';

export default CodeEditor = React.createClass({



	propTypes: {
		code: React.PropTypes.string.isRequired
	},



    render: function() {
        var options = {
            lineNumbers: true
        };
        return <Codemirror value={this.props.code} options={options} />
    }



});