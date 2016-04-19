import React from 'react';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import DashLayout from './DashLayout.jsx';

export default class DashLayoutContainer extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			fileName: null,
			code: null
		};
		this.readFile = this.readFile.bind(this);
	}



	readFile(files) {
		const file = files[0],
			  fileName = file.name;

		const r = new FileReader();

		let self = this;
		r.onload = (e) => {
			// console.log(JSON.stringify(e.target.result));
			self.setState({
				fileName: fileName,
				code: e.target.result
			});
		}

		r.readAsText(file);
	}



	render() {
		return (
			<DashLayout
				fileName={this.state.fileName}
				code={this.state.code}
				readFile={this.readFile}
				proExampleId={this.props.proExampleId}
				annotationId={this.props.annotationId} />
		);
	}



}



DashLayoutContainer.PropTypes = {
	proExampleId: React.PropTypes.string, // only if the pro pane is active
	annotationId: React.PropTypes.string, // only if an annotation is active
};