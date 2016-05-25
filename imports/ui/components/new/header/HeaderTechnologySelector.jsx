import React from 'react';
import HeaderDropdownSelecction from './HeaderDropdownSelection.jsx';
import HeaderDropdown from './HeaderDropdown.jsx';

export default class HeaderTechnologySelector extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			dropdownActive: false
		};
		this.toggleDropdown = this.toggleDropdown.bind(this);
	}



	toggleDropdown(event) {
		this.setState({ dropdownActive: !this.state.dropdownActive });
	}



	render() {
		return (
			<div className="header-module-selector" onClick={this.toggleDropdown}>
				<HeaderDropdownSelection
					items={this.props.technologies}
					selections={this.props.technologySelections}
					nullText={"Technologies"}
					dropdownActive={this.state.dropdownActive} />
				<HeaderDropdown
					items={this.props.technologies}
					selections={this.props.technologySelections}
					dropdownActive={this.state.dropdownActive}
					toggleItemSelection={this.props.updateTechnologySelections} />
			</div>
		);
	}



};



HeaderTechnologySelector.PropTypes = {
	technologies: React.PropTypes.array.isRequired,
	technologySelections: React.PropTypes.array.isRequired,
	updateTechnologySelections: React.PropTypes.func.isRequired
};