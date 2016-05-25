import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { query } from '../../../api/ProExamples/methods.js';
import HeaderExamplesSlider from './HeaderExamplesSlider.jsx';



export default createContainer((params) => {

	const examplesHandle = Meteor.subscribe('ProExamples.public');

	const c = params.components;
	const t = params.technologies;
	const cSelections = params.componentSelections;
	const tSelections = params.technologySelections;

	let exampleQuery = {
		components: cSelections.map( (ts) => c[ts] ),
		technologies: tSelections.map( (cs) => t[cs] )
	};

	const examples = query.call(exampleQuery);

	return {
		connected: Meteor.status().connected,
		examples: examples,
		activeExampleId: params.activeExampleId
	}



}, HeaderExamplesSlider);