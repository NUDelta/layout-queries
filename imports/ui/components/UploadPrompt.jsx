import React from 'react';
import Dropzone from 'react-dropzone';

export default UploadPrompt = React.createClass({



	propTypes: {
		readFile: React.PropTypes.func.isRequired
	},



	onDrop: function (files) {
      	this.props.readFile(files);
    },



	render() {
		return (
			<Dropzone className="drop-zone" onDrop={this.onDrop}>
				<i className="fa fa-file-text-o"></i>
          		<span>Upload a JavaScript file for a front-end component you’re working on.</span>
        	</Dropzone>		
		);
	} 



});