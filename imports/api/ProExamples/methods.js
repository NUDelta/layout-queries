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
	name: 'ProExamples.getWithTechnologies2',
	validate: new SimpleSchema({
		components:   { type: [String] },
		technologies: { type: [String] }
	}).validator(),
	run({ components, technologies }) {

		let examples = [];
		let testExamples = ProExamples.find();

		// first get all components
		components.forEach( (component) => {
			examples.push.apply(examples, ProExamples.find({"componentPattern": component}).fetch());
		});

		examples = examples.map( (e) => {

			// find technology intersection
			e.intersections = technologies.filter(function(t) {
			    return e.technologies.indexOf(t) != -1;
			});

			// calculate jaccard similarity, add field to object
			let intersection = e.intersections.length,
			    union        = technologies.length + e.technologies.length - e.intersections.length;
			e.confidence = (intersection / union) || 0; // divide by zero

			// return modified document object
			return e;
		});

		// sort results by confidence rating
		return examples.sort((a, b) => {
			if (a.confidence > b.confidence)
				return -1;
			if (a.confidence < b.confidence)
				return 1;
			return 0;
		});

	}
});



