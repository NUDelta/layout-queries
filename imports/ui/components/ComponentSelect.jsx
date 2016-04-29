import React from 'react';
import ReactDOM from 'react-dom';
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



	componentDidMount() {
		window.addEventListener('click', this.handleClick, false);
	}



	componentWillUnmount() {
		window.removeEventListener('click', this.handleClick, false);
	}



	handleClick(event) {
		if (ReactDOM.findDOMNode(this).contains(event.target)) {
            this.setState({
            	dropdownVisible: !this.state.dropdownVisible
            });
        } else {
        	this.setState({
        		dropdownVisible: false
        	});
        }
	}



	render() {
		const componentPatterns = ["Image Carousel", "Lightbox"];

		const dropdownClass = classNames({
			"feature-dropdown": true,
			"visible": this.state.dropdownVisible
		});

		return (
			<div className="feature-select">

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