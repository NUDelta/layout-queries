import React from 'react';
import ComponentSelect from './ComponentSelect.jsx';
import TechnologySelect from './TechnologySelect.jsx';
import ProExamplesSliderContainer from './ProExamplesSliderContainer';

export default class Header extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			selectedComponent: null,
			selectedTechnologies: []
		};
		this.selectComponent = this.selectComponent.bind(this);
		this.toggleTechnology = this.toggleTechnology.bind(this);
	}



	componentDidUpdate(prevProps, prevState) {
		// if (!prevProps.codeIsUploaded && this.props.codeIsUploaded) {
		// 	this.setState({
		// 		selectedComponent: 0,
		// 		selectedTechnologies: [1]
		// 	});
		// }
	}



	selectComponent(i) {
		this.setState({
			selectedComponent: i
		});
	}



	toggleTechnology(i) {
		const pos = this.state.selectedTechnologies.indexOf(i),
			  newSelectedTechnologies = this.state.selectedTechnologies.slice();

		if (pos > -1) {
			newSelectedTechnologies.splice(pos, 1)
			this.setState({
				selectedTechnologies: newSelectedTechnologies
			});
		} else {
			newSelectedTechnologies.push(i)
			this.setState({
				selectedTechnologies: newSelectedTechnologies
			});
		}
	}



	render() {
		return (
			<section className="header">
				<ComponentSelect
					codeIsUploaded={this.props.codeIsUploaded}
					selectedComponent={this.state.selectedComponent}
					selectComponent={this.selectComponent} />
				<TechnologySelect
					codeIsUploaded={this.props.codeIsUploaded}
					selectedTechnologies={this.state.selectedTechnologies}
					toggleTechnology={this.toggleTechnology} />
				<ProExamplesSliderContainer
					codeIsUploaded={this.props.codeIsUploaded}
					proExampleId={this.props.proExampleId}
					selectedComponent={this.state.selectedComponent}
					selectedTechnologies={this.state.selectedTechnologies} />
			</section>
		);
	}



}



Header.propTypes = {
	codeIsUploaded: React.PropTypes.bool.isRequired,
	proExampleId: React.PropTypes.string // null if pro pane not active
};