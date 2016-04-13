import React from 'react';
import Header from '../components/Header.jsx';
import UserPane from '../components/UserPane.jsx';
import ProPane from '../components/ProPane.jsx';
import Panel from '../components/Panel.jsx';

export default DashLayout = React.createClass({



	propTypes: {
		fileName:       React.PropTypes.string, // null if none uploaded
		code:           React.PropTypes.string, // null if none uploaded
		results:        React.PropTypes.array.isRequired,
		activeResultId: React.PropTypes.number, // null if none
		readFile:       React.PropTypes.func.isRequired,
		activateResult: React.PropTypes.func.isRequired
	},



	render() {
		return (
			<div className="layout">
				<Header
					codeIsUploaded={this.props.code ? true : false}
					results={this.props.results}
					activeResultId={this.props.activeResultId}
					activateResult={this.props.activateResult} />
				<main>
					<UserPane
						fileName={this.props.fileName}
						code={this.props.code}
						readFile={this.props.readFile} />
					<ProPane
						code={this.props.code}
						results={this.props.results}
						activeResultId={this.props.activeResultId} />
				</main>
				<Panel
					results={this.props.results}
					activeResultId={this.props.activeResultId} />
			</div>
		);
	}



});