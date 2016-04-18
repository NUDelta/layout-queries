import React from 'react';
import ProExamplesSliderProExamplesList from './ProExamplesSliderProExamplesList.jsx';
import EmptySlider from './EmptySlider.jsx';

export default class ProExamplesSlider extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<div className="results-slider">

				{ this.props.codeIsUploaded
					?
					<ProExamplesSliderProExamplesList
						proExamples={this.props.proExamples}
						proExampleId={this.props.proExampleId} />
					:
					<EmptySlider />
				}

			</div>
		);
	}



}



ProExamplesSlider.propTypes = {
	connected:      React.PropTypes.bool.isRequired,
	proExamples:    React.PropTypes.array.isRequired,
	codeIsUploaded: React.PropTypes.bool.isRequired,
	proExampleId: React.PropTypes.string // null if pro pane not active
};