import React from 'react';
import ComponentSelect from './ComponentSelect.jsx';
import TechnologySelect from './TechnologySelect.jsx';
import ResultsSlider from './ResultsSlider.jsx';

export default Header = React.createClass({



	propTypes: {
		codeIsUploaded: React.PropTypes.bool.isRequired,
		results:        React.PropTypes.array.isRequired,
		activeResultId: React.PropTypes.number, // null if none
		activateResult: React.PropTypes.func.isRequired
	},



	render() {
		return (
			<section className="header">
				<ComponentSelect
					codeIsUploaded={this.props.codeIsUploaded} />
				<TechnologySelect
					codeIsUploaded={this.props.codeIsUploaded} />
				<ResultsSlider
					codeIsUploaded={this.props.codeIsUploaded}
					results={this.props.results}
					activeResultId={this.props.activeResultId}
					activateResult={this.props.activateResult} />
			</section>
		);
	}



});