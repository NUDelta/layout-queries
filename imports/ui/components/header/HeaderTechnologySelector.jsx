import React from 'react';
import ReactDOM from 'react-dom';
import HeaderDropdownSelecction from './HeaderDropdownSelection.jsx';
import HeaderDropdown from './HeaderDropdown.jsx';

export default class HeaderTechnologySelector extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			dropdownActive: false
		};
		this.handleClick = this.handleClick.bind(this);
	}



	componentDidMount() { window.addEventListener('click', this.handleClick, false); }
	componentWillUnmount() { window.removeEventListener('click', this.handleClick, false); }



	handleClick(event) {
		if (ReactDOM.findDOMNode(this).contains(event.target)) {
            this.setState({ dropdownActive: !this.state.dropdownActive });
        } else {
        	this.setState({ dropdownActive: false });
        }
	}



	render() {
		return (
			<div className="header-module-selector">
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