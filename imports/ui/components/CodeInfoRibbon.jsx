import React from 'react';

export default CodeInfoRibbon = React.createClass({



	propTypes: {
		name:       React.PropTypes.string.isRequired,
		confidence: React.PropTypes.number // only give for pro code
	},



	render() {
		return (
			<div className="info-ribbon">
				<div className="info-ribbon-inner">

					{this.props.confidence ? 
						<span><i className="fa fa-circle"></i> {this.props.confidence}</span>
						: ""
					}

					<span>{this.props.name}</span>
				</div>
			</div>
		);
	}



});