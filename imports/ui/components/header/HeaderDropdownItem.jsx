import React from 'react';

export default HeaderDropdownItem = (props) => {



	const handleClick = (event) => {
		event.stopPropagation();
		props.toggleItemSelection(props.index);
	}



	return (
		<li onClick={handleClick}>
			{props.selected
				?
					<i className="fa fa-circle"></i>
				:
					<i className="fa fa-circle-thin"></i>
			}
			<span>{props.text}</span>
		</li>
	);



}



HeaderDropdownItem.PropTypes = {
	text: React.PropTypes.string.isRequired,
	selected: React.PropTypes.bool.isRequired,
	index: React.PropTypes.number.isRequired,
	toggleItemSelection: React.PropTypes.func.isRequired
};