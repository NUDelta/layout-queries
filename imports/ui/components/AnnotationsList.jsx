import React from 'react';
import Annotation from './Annotation.jsx';

export default AnnotationsList = React.createClass({



	propTypes: {
		results:         React.PropTypes.array.isRequired,
		activeResultId: React.PropTypes.number.isRequired
	},



	render() {
		let result;
		for (let i=0; i < this.props.results.length; i++) {
			if (this.props.results[i]._id === this.props.activeResultId) {
				result = this.props.results[i];
			}
		}


		return (
			<ul className="annotations-list">
				{
					result.annotations.map( (a, i) => {
						return (
							<Annotation
								key={i}
								lineText={a.lineText}
								content={a.content} />
						);
					})
				}
			</ul>
		);
	}



});