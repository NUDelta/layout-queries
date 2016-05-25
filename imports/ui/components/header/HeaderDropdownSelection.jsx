import React from 'react';

export default HeaderDropdownSelection = (props) => {



	containsSelection = (selections) => {
		if (selections.length === 0) {
			return false;
		}
		return true;
	}



	formatSelections = (items, selections) => {
		let text = '';
		selections.forEach( (s, i) => {
			text += items[s];
			if (i !== selections.length - 1)
				text += ', ';
		});
		return text;
	}



	return (
		<div className="header-module-dropdown-selection">
			{containsSelection(props.selections)
				?
					<span>{formatSelections(props.items, props.selections)}</span>
				:
					<span>{props.nullText}</span>
			}
			{props.dropdownActive
				?
					<i className="fa fa-angle-up"></i>
				:
					<i className="fa fa-angle-down"></i>
			}
		</div>
	);
}



HeaderDropdownSelection.PropTypes = {
	items: React.PropTypes.array.isRequired,
	selections: React.PropTypes.array.isRequired,
	nullText: React.PropTypes.string.isRequired,
	dropdownActive: React.PropTypes.bool.isRequired
};