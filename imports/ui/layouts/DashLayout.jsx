import React from 'react';
import Header from '../components/Header.jsx';
import UserPane from '../components/UserPane.jsx';
import ProPane from '../components/ProPane.jsx';
import Panel from '../components/Panel.jsx';

export default class DashLayout extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<div className="layout">
				<Header
					codeIsUploaded={this.props.code ? true : false}
					proExampleId={this.props.proExampleId} />
				<main>
					<UserPane
						fileName={this.props.fileName}
						code={this.props.code}
						readFile={this.props.readFile} />
					<ProPane
						codeIsUploaded={this.props.code ? true : false}
						proExampleId={this.props.proExampleId}
						annotationId={this.props.annotationId} />
				</main>
				<Panel
					codeIsUploaded={this.props.code ? true : false }
					proExampleId={this.props.proExampleId}
					annotationId={this.props.annotationId} />
			</div>
		);
	}



}



DashLayout.PropTypes = {
	fileName:     React.PropTypes.string, // null if none uploaded
	code:         React.PropTypes.string, // null if none uploaded
	readFile:     React.PropTypes.func.isRequired,
	proExampleId: React.PropTypes.string, // null if pro pane not active
	annotationId: React.PropTypes.string, // null if an annotation is not active
};