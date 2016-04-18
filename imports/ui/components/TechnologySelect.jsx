import React from 'react';
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
		this.toggleTechnology = this.toggleTechnology.bind(this);
	}



	handleClick(event) {
		this.setState({
			dropdownVisible: !this.state.dropdownVisible
		});
	}



	toggleTechnology(i) {
		const pos = this.state.selectedTechnologies.indexOf(i),
			  newSelectedTechnologies = this.state.selectedTechnologies.slice();

		if (pos > -1) {
			newSelectedTechnologies.splice(pos, 1)
			this.setState({
				selectedTechnologies: newSelectedTechnologies
			});
		} else {
			newSelectedTechnologies.push(i)
			this.setState({
				selectedTechnologies: newSelectedTechnologies
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
			<div className="feature-select" onClick={this.handleClick}>

				<div className="feature-header">
					{ this.state.selectedTechnologies.length !== 0
						?
						<h4>
							{this.state.selectedTechnologies.map((st, i, a) => {
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
						toggleTechnology={this.toggleTechnology}
						activeIndices={this.state.selectedTechnologies} />
				</div>
				
			</div>
		);
	}



}



TechnologySelect.propTypes = {
	codeIsUploaded: React.PropTypes.bool.isRequired
};