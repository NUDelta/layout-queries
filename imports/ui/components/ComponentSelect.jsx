import React from 'react';

export default class ComponentSelect extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<div className="feature-select">

				<div className="feature-header">
					<h4>Component Pattern</h4>
					<i className="fa fa-angle-down"></i>
				</div>

				{ this.props.codeIsUploaded
					?
					<span>Carousel</span>
					:
					<span>None</span>
				}
				
			</div>
		);
	}



}



ComponentSelect.propTypes = {
	codeIsUploaded: React.PropTypes.bool.isRequired
};