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
								lineStart={a.lineStart}
								lineEnd={a.lineEnd}
								content={a.content} />
						);
					})
				}
			</ul>
		);
	}



}



AnnotationsList.PropTypes = {
	annotations: React.PropTypes.array.isRequired
};