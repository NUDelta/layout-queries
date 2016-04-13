import React from 'react';
import ResultsSliderResult from './ResultsSliderResult.jsx';

export default ResultsSliderResultsList = React.createClass({



	propTypes: {
		results:        React.PropTypes.array.isRequired,
		activeResultId: React.PropTypes.number.isRequired,
		activateResult: React.PropTypes.func.isRequired
	},



	render() {

		return (
			<ul className="result-list">
				{
					this.props.results.map( (r) => {
						return (
							<ResultsSliderResult
								key={r._id}
								resultInfo={r}
								active={this.props.activeResultId === r._id}
								activateResult={this.props.activateResult} />
						);
					})
				}
			</ul>
		);
	}



});