import React from 'react';
import ResultsSliderResultsList from './ResultsSliderResultsList.jsx';
import EmptySlider from './EmptySlider.jsx';

export default ResultsSlider = React.createClass({



	propTypes: {
		codeIsUploaded: React.PropTypes.bool.isRequired,
		results:        React.PropTypes.array.isRequired,
		activeResultId: React.PropTypes.number, // null if none
		activateResult: React.PropTypes.func.isRequired
	},



	render() {
		return (
			<div className="results-slider">

				<button className="navigate left">
					<i className="fa fa-angle-left"></i>
				</button>

				{ this.props.codeIsUploaded
					?
					<ResultsSliderResultsList
						results={this.props.results}
						activeResultId={this.props.activeResultId}
						activateResult={this.props.activateResult} />
					:
					<EmptySlider />
				}

				<button className="navigate right">
					<i className="fa fa-angle-right"></i>
				</button>

			</div>
		);
	}



});