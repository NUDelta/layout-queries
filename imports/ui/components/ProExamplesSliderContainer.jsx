import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ProExamples from '../../api/ProExamples/ProExamples.js';
import ProExamplesSlider from './ProExamplesSlider.jsx';



export default createContainer((params) => {
	const proExamplesHandle = Meteor.subscribe('ProExamples.public');

	return {
		connected: Meteor.status().connected,
		proExamples: ProExamples.find({}).fetch(),
		codeIsUploaded: params.codeIsUploaded,
		proExampleId: params.proExampleId
	};
}, ProExamplesSlider);