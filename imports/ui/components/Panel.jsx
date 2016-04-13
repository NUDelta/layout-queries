import React from 'react';
import AnnotationsList from './AnnotationsList';

export default Panel = React.createClass({



	propTypes: {
		results:        React.PropTypes.array.isRequired,
		activeResultId: React.PropTypes.number // null if none
	},



	render() {
		return (
			<section className="panel">

				<h3>Annotations</h3>

				{ this.props.activeResultId !== null ?
					<AnnotationsList
						results={this.props.results}
						activeResultId={this.props.activeResultId} />
					: ""
				}
				
			</section>
		);
	}



});