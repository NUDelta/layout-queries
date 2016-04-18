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