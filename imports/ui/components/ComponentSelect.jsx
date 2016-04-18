import React from 'react';
import classNames from 'classnames';
import ComponentSelectDropdownList from './ComponentSelectDropdownList.jsx';

export default class ComponentSelect extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			dropdownVisible: false,
			selectedComponent: null
		};
		this.handleClick = this.handleClick.bind(this);
		this.selectComponent = this.selectComponent.bind(this);
	}



	handleClick(event) {
		this.setState({
			dropdownVisible: !this.state.dropdownVisible
		});
	}



	selectComponent(i) {
		this.setState({
			selectedComponent: i
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
					{ this.state.selectedComponent !== null
						?
						<h4>{componentPatterns[this.state.selectedComponent]}</h4>
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
						selectComponent={this.selectComponent}
						activeIndex={this.state.selectedComponent} />
				</div>
				
			</div>
		);
	}



}



ComponentSelect.propTypes = {
	codeIsUploaded: React.PropTypes.bool.isRequired
};