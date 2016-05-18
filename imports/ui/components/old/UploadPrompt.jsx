import React from 'react';
import Dropzone from 'react-dropzone';

export default class UploadPrompt extends React.Component {



	constructor(props) {
		super(props);
		this.onDrop = this.onDrop.bind(this);
	}



	onDrop(files) {
      	this.props.readFile(files);
    }



	render() {
		return (
			<Dropzone className="drop-zone" onDrop={this.onDrop}>
				<i className="fa fa-file-text-o"></i>
          		<span>Upload a JavaScript file for a front-end component you’re working on.</span>
        	</Dropzone>		
		);
	} 



}



UploadPrompt.propTypes = {
	readFile: React.PropTypes.func.isRequired
};