import React from 'react';
import classNames from 'classnames';
import HeaderDropdownItem from './HeaderDropdownItem.jsx';

export default class HeaderDropdown extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		const classes = classNames({
			'header-module-dropdown': true,
			'visible': this.props.dropdownActive
		});

		return (
			<div className={classes}>
				<ul>
					{this.props.items.map( (item, i) => {
						return (
							<HeaderDropdownItem
								key={i}
								text={item}
								selected={this.props.selections.indexOf(i) > -1}
								index={i}
								toggleItemSelection={this.props.toggleItemSelection} />
						);
					})}
				</ul>
			</div>
		);
	}



};



HeaderDropdown.PropTypes = {
	items: React.PropTypes.array.isRequired,
	selections: React.PropTypes.array.isRequired,
	dropdownActive: React.PropTypes.bool.isRequired,
	toggleItemSelection: React.PropTypes.func.isRequired
};