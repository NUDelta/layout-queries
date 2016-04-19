import React from 'react';
import classNames from 'classnames';
import ComponentSelectDropdownList from './ComponentSelectDropdownList.jsx';

export default class ComponentSelect extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			dropdownVisible: false
		};
		this.handleClick = this.handleClick.bind(this);
	}



	handleClick(event) {
		this.setState({
			dropdownVisible: !this.state.dropdownVisible
		});
	}



	render() {
		const componentPatterns = ["Image Carousel", "Lightbox"];

		const dropdownClass = classNames({
			"feature-dropdown": true,
			"visible": this.state.dropdownVisible
		});

		return (
			<div className="feature-select" onClick={this.handleClick}>

				<div className="feature-header">
					{ this.props.selectedComponent !== null
						?
						<h4>{componentPatterns[this.props.selectedComponent]}</h4>
						:
						<h4>Component Pattern</h4>
					}
					{ this.state.dropdownVisible
						?
						<i className="fa fa-angle-up"></i>
						:
						<i className="fa fa-angle-down"></i>
					}
				</div>

				<div className={dropdownClass}>
					<ComponentSelectDropdownList
						componentPatterns={componentPatterns}
						selectComponent={this.props.selectComponent}
						activeIndex={this.props.selectedComponent} />
				</div>
				
			</div>
		);
	}



}



ComponentSelect.propTypes = {
	codeIsUploaded:    React.PropTypes.bool.isRequired,
	selectedComponent: React.PropTypes.number, // null if none yet
	selectComponent:   React.PropTypes.func.isRequired
};