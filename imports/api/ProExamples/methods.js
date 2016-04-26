import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import ProExamples from './ProExamples.js';



export const insert = new ValidatedMethod({
	name: 'ProExamples.insert',
	validate: new SimpleSchema({
		source:           { type: String },
		code:             { type: String },
		componentPattern: { type: String },
		technologies:     { type: [String] }
	}).validator(),
	run({ source, code, technologies }) {
		const proExample = {
			source,
			code,
			componentPattern,
			technologies,
			createdAt: new Date()
		};
		ProExamples.insert(proExample);
	}
});



export const remove = new ValidatedMethod({
	name: 'ProExamples.remove',
	validate: new SimpleSchema({
		id: { type: String }
	}).validator(),
	run({ id }) {
		ProExamples.remove(id);
	}
});



export const query = new ValidatedMethod({
	name: 'ProExamples.getWithTechnologies',
	validate: new SimpleSchema({
		component:    { type: String },
		technologies: { type: [String] }
	}).validator(),
	run({ component, technologies }) {
		// first match by component type
		const proExamples = ProExamples.find({"componentPattern": component}).map((pe) => {

			// find technology intersection
			pe.intersections = technologies.filter(function(t) {
			    return pe.technologies.indexOf(t) != -1;
			});

			// calculate jaccard similarity, add field to object
			let intersection = pe.intersections.length,
			    union        = technologies.length + pe.technologies.length - pe.intersections.length;
			pe.confidence = (intersection / union) || 0; // divide by zero

			// return modified document object
			return pe;
		});

		// sort results by confidence rating
		return proExamples.sort((a, b) => {
			if (a.confidence > b.confidence)
				return -1;
			if (a.confidence < b.confidence)
				return 1;
			return 0;
		});
	}
});