import React from 'react';
import TechnologySelectDropdownItem from './TechnologySelectDropdownItem.jsx';

export default class TechnologySelectDropdownList extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<ul>
				{this.props.technologies.map((t, i) => {
					return (
						<TechnologySelectDropdownItem
							key={i}
							technology={t}
							technologyIndex={i}
							active={this.props.activeIndices.indexOf(i) > -1}
							toggleTechnology={this.props.toggleTechnology} />
					);
				})}
			</ul>
		);
	}
}



TechnologySelectDropdownList.PropTypes = {
	technologies:     React.PropTypes.array.isRequired,
	toggleTechnology: React.PropTypes.func.isRequired,
	activeIndices:    React.PropTypes.array.isRequired
};