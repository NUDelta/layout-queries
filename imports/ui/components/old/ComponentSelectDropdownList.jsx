import React from 'react';
import ComponentSelectDropdownItem from './ComponentSelectDropdownItem.jsx';

export default class ComponentSelectDropdownList extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<ul>
				{this.props.componentPatterns.map((cp, i) => {
					return (
						<ComponentSelectDropdownItem
							key={i}
							componentPattern={cp}
							componentPatternIndex={i}
							active={this.props.activeIndex === i}
							selectComponent={this.props.selectComponent} />
					);
				})}
			</ul>
		);
	}



}



ComponentSelectDropdownList.PropTypes = {
	componentPatterns: React.PropTypes.array.isRequired,
	selectComponent:   React.PropTypes.func.isRequired,
	activeIndex:       React.PropTypes.number.isRequired
};