import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ProExamples from '../../api/ProExamples/ProExamples.js';
import ProCode from './ProCode.jsx';



export default createContainer((params) => {
	const proExamplesHandle = Meteor.subscribe('ProExamples.public');
	const id = params.proExampleId;

	return {
		connected: Meteor.status().connected,
		proExample: ProExamples.findOne(id)
	}
}, ProCode);