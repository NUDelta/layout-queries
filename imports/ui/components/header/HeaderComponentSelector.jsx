import React from 'react';
import ReactDOM from 'react-dom';
import HeaderDropdownSelecction from './HeaderDropdownSelection.jsx';
import HeaderDropdown from './HeaderDropdown.jsx';

export default class HeaderComponentSelector extends React.Component {



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