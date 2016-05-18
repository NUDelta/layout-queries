import React from 'react';

export default class CodeInfoRibbon extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<div className="info-ribbon">
				<div className="info-ribbon-inner">

					{this.props.confidence ? 
						<span><i className="fa fa-circle"></i> {this.props.confidence}</span>
						: ""
					}

					<span>{this.props.source}</span>
				</div>
			</div>
		);
	}



}



CodeInfoRibbon.propTypes = {
	source:     React.PropTypes.string.isRequired,
	confidence: React.PropTypes.number // only give for pro code
}