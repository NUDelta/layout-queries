import React from 'react';
import ProCode from './ProCode.jsx';

export default ProPane = React.createClass({



	propTypes: {
		code:           React.PropTypes.string, // null if none uploaded
		results:        React.PropTypes.array.isRequired,
		activeResultId: React.PropTypes.number // null if none
	},



	render() {
		return (
			<section className="pro-pane pane">
				{ this.props.code ?
					<ProCode
						results={this.props.results}
						activeResultId={this.props.activeResultId} />
					:
					""			
				}
			</section>
		);
	}



});