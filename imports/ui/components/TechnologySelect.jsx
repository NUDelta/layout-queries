import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import TechnologySelectDropdownList from './TechnologySelectDropdownList.jsx';

export default class TechnologySelect extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			dropdownVisible: false,
			selectedTechnologies: []
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
		const technologies = ["jQuery", "Angular", "ngAnimate", "TweenMax"];

		const dropdownClass = classNames({
			"feature-dropdown": true,
			"visible": this.state.dropdownVisible
		});

		return (
			<div className="feature-select">

				<div className="feature-header">
					{ this.props.selectedTechnologies.length !== 0
						?
						<h4>
							{this.props.selectedTechnologies.map((st, i, a) => {
								if (i === a.length-1) {
									return <span key={i}>{technologies[st]}</span>
								} else {
									return <span key={i}>{technologies[st]}, </span>
								}
							})}
						</h4>
						:
						<h4>Technologies</h4>
					}
					{ this.state.dropdownVisible
						?
						<i className="fa fa-angle-up"></i>
						:
						<i className="fa fa-angle-down"></i>
					}
				</div>

				<div className={dropdownClass}>
					<TechnologySelectDropdownList
						technologies={technologies}
						toggleTechnology={this.props.toggleTechnology}
						activeIndices={this.props.selectedTechnologies} />
				</div>
				
			</div>
		);
	}



}



TechnologySelect.propTypes = {
	codeIsUploaded:       React.PropTypes.bool.isRequired,
	selectedTechnologies: React.PropTypes.array.isRequired,
	toggleTechnology:     React.PropTypes.func.isRequired
};