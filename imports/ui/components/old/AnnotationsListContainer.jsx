import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Annotations from '../../../api/Annotations/Annotations.js';
import AnnotationsList from './AnnotationsList.jsx';



export default createContainer((params) => {
	const annotationsHandle = Meteor.subscribe('Annotations.public');
	const proExampleId = params.proExampleId;

	return {
		connected: Meteor.status().connected,
		annotations: Annotations.find({ proExampleId: proExampleId }, {sort: {order: 1}}).fetch(),
		annotationId: params.annotationId
	}
}, AnnotationsList);