import React from 'react';

export default class TechnologySelectDropdownItem extends React.Component {



	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}



	handleClick(event) {
		event.stopPropagation();
		this.props.toggleTechnology(this.props.technologyIndex);
	}



	render() {
		return (
			<li onClick={this.handleClick}>
				{ this.props.active ?
					<i className="fa fa-circle"></i>
					:
					<i className="fa fa-circle-thin"></i>
				}
				<span>{this.props.technology}</span>
			</li>
		);
	}
}



TechnologySelectDropdownItem.PropTypes = {
	technology:         React.PropTypes.string.isRequired,
	technologyIndex:    React.PropTypes.number.isRequired,
	active:             React.PropTypes.bool.isRequired,
	toggleTechnology:   React.PropTypes.func.isRequired,
};