import React from 'react';
import HeaderComponentSelector  from './HeaderComponentSelector.jsx'; 
import HeaderTechnologySelector from './HeaderTechnologySelector.jsx';
import HeaderExamplesSliderContainer     from './HeaderExamplesSliderContainer.jsx';

const COMPONENTS = ["Draggable Map"];
const TECHNOLOGIES = ["jQuery", "Canvas"];

export default class HeaderModule extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			componentSelections: [],
			technologySelections: [],
		}
		this.updateComponentSelections = this.updateComponentSelections.bind(this);
		this.updateTechnologySelections = this.updateTechnologySelections.bind(this);
	}



	updateComponentSelections(i) {
		let tmp = this.toggleSelections(this.state.componentSelections.slice(), i);
		this.setState({ componentSelections: tmp  });
	}



	updateTechnologySelections(i) {
		let tmp = this.toggleSelections(this.state.technologySelections.slice(), i);
		this.setState({ technologySelections: tmp });
	}



	toggleSelections(selections, i) {
		const index = selections.indexOf(i);
		if (index > -1) {
			selections.splice(index, 1);
		} else {
			selections.push(i);
		}
		return selections;
	}



	render() {
		return (
			<section className="header-module">
				<HeaderComponentSelector
					components={COMPONENTS}
					componentSelections={this.state.componentSelections}
					updateComponentSelections={this.updateComponentSelections} />
				<HeaderTechnologySelector
					technologies={TECHNOLOGIES}
					technologySelections={this.state.technologySelections}
					updateTechnologySelections={this.updateTechnologySelections} />
				<HeaderExamplesSliderContainer
					components={COMPONENTS}
					technologies={TECHNOLOGIES}
					componentSelections={this.state.componentSelections}
					technologySelections={this.state.technologySelections}
					activeExampleId={this.props.activeExampleId} />
			</section>
		);
	}



};



HeaderModule.PropTypes = {
	activeExampleId: React.PropTypes.string // only if example selected
};