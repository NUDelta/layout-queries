import React from 'react';

export default class ComponentSelectDropdownItem extends React.Component {



	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}



	handleClick(event) {
		event.stopPropagation();
		this.props.selectComponent(this.props.componentPatternIndex);
	}



	render() {
		return (
			<li onClick={this.handleClick}>
				{ this.props.active ?
					<i className="fa fa-circle"></i>
					:
					<i className="fa fa-circle-thin"></i>
				}
				<span>{this.props.componentPattern}</span>
			</li>
		);
	}



}



ComponentSelectDropdownItem.PropTypes = {
	componentPattern:      React.PropTypes.string.isRequired,
	componentPatternIndex: React.PropTypes.number.isRequired,
	active:                React.PropTypes.bool.isRequired,
	selectComponent:       React.PropTypes.func.isRequired
};