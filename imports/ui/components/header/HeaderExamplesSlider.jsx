import React from 'react';
import HeaderExampleSlide from './HeaderExampleSlide.jsx';
import HeaderNoExamples from './HeaderNoExamples.jsx';

export default class HeaderExamplesSlider extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<div className="header-module-slider">
				{this.props.examples.length !== 0
					?
						<ul className="header-module-examples">
							{this.props.examples.map( (example) => {
								return (
									<HeaderExampleSlide
										key={example._id}
										id={example._id}
										siteName={example.source}
										confidence={example.confidence}
										intersections={example.intersections}
										isActive={this.props.activeExampleId === example._id} />
								);
							})}
						</ul>
					:
						<HeaderNoExamples />
				}
			</div>
		);
	}



};



HeaderExamplesSlider.PropTypes = {
	connected: React.PropTypes.bool.isRequired,
	examples: React.PropTypes.array.isRequired,
	activeExampleId: React.PropTypes.string // only if example selected
};