import React from 'react';

export default class TechnologySelect extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<div className="feature-select">

				<div className="feature-header">
					<h4>Technologies</h4>
					<i className="fa fa-angle-down"></i>
				</div>

				{ this.props.codeIsUploaded
					?
					<span>jQuery</span>
					:
					<span>None</span>
				}

			</div>
		);
	}



}



TechnologySelect.propTypes = {
	codeIsUploaded: React.PropTypes.bool.isRequired
};