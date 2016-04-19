import React from 'react';
import Annotation from './Annotation.jsx';

export default class AnnotationsList extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<ul className="annotations-list">
				{
					this.props.annotations.map( (a) => {
						return (
							<Annotation
								key={a._id}
								_id={a._id}
								lineStart={a.lineStart}
								lineEnd={a.lineEnd}
								content={a.content}
								active={a._id === this.props.annotationId}
								proExampleId={a.proExampleId} />
						);
					})
				}
			</ul>
		);
	}



}



AnnotationsList.PropTypes = {
	connected:    React.PropTypes.bool.isRequired,
	annotations:  React.PropTypes.array.isRequired,
	annotationId: React.PropTypes.string // null if no annotation is active
};