import React from 'react';
import ProCodeContainer from './ProCodeContainer.jsx';

export default class ProPane extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<section className="pro-pane pane">
				{ this.props.codeIsUploaded ?
					<ProCodeContainer
						proExampleId={this.props.proExampleId}
						annotationId={this.props.annotationId} />
					:
					""			
				}
			</section>
		);
	}


	// you're trying to get the annotation into the pro code stuff



}



ProPane.propTypes = {
	codeIsUploaded: React.PropTypes.bool.isRequired,
	proExampleId:   React.PropTypes.string, // null if none uploaded yet
	annotationId:   React.PropTypes.string // null if none active
};