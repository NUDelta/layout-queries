import React from 'react';
import HeaderDropdownSelecction from './HeaderDropdownSelection.jsx';
import HeaderDropdown from './HeaderDropdown.jsx';

export default class HeaderComponentSelector extends React.Component {



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
					items={this.props.components}
					selections={this.props.componentSelections}
					nullText={"Component Pattern"}
					dropdownActive={this.state.dropdownActive} />
				<HeaderDropdown
					items={this.props.components}
					selections={this.props.componentSelections}
					dropdownActive={this.state.dropdownActive}
					toggleItemSelection={this.props.updateComponentSelections} />
			</div>
		);
	}




};



HeaderComponentSelector.PropTypes = {
	components: React.PropTypes.array.isRequired,
	componentSelections: React.PropTypes.array.isRequired,
	updateComponentSelections: React.PropTypes.func.isRequired
};