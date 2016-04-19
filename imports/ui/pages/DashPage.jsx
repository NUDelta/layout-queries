import React from 'react';
import DashLayoutContainer from '../layouts/DashLayoutContainer.jsx';

export default class DashPage extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<div className="page">
				<DashLayoutContainer
					proExampleId={this.props.params.proExampleId}
					annotationId={this.props.params.annotationId} />
			</div>
		);
	}


	
};



DashPage.PropTypes = {
	params: React.PropTypes.object.isRequired
};