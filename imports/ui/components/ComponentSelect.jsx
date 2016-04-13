import React from 'react';

export default ComponentSelect = React.createClass({



	propTypes: {
		codeIsUploaded: React.PropTypes.bool.isRequired
	},



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



});