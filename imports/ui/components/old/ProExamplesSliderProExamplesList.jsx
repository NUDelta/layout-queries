import React from 'react';
import ProExampleSlide from './ProExampleSlide.jsx';

export default class ProExamplesSliderProExamplesList extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<ul className="result-list">
				{
					this.props.proExamples.map( (pe) => {
						return (
							<ProExampleSlide
								key={pe._id}
								proExample={pe}
								active={this.props.proExampleId === pe._id}/>
						);
					})
				}
			</ul>
		);
	}



}



ProExamplesSliderProExamplesList.propTypes = {
	proExamples: React.PropTypes.array.isRequired,
	proExampleId: React.PropTypes.string // null if pro pane not active
};