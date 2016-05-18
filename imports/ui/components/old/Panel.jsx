import React from 'react';
import AnnotationsListContainer from './AnnotationsListContainer.jsx';

export default class Panel extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<section className="panel">

				<h3>Annotations</h3>

				{ this.props.codeIsUploaded ?
					<AnnotationsListContainer
						proExampleId={this.props.proExampleId}
						annotationId={this.props.annotationId} />
					: ""
				}
				
			</section>
		);
	}



};



Panel.PropTypes = {
	codeIsUploaded: React.PropTypes.bool.isRequired,
	proExampleId:   React.PropTypes.string, // null if none uplaoded yet
	annotationId:   React.PropTypes.string, // null if no annotation is active
};