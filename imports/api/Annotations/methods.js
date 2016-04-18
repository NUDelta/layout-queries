import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import Annotations from './Annotations.js';



export const insert = new ValidatedMethod({
	name: 'Annotations.insert',
	validate: new SimpleSchema({
		proExampleId: { type: String },
		lineStart: { type: Number },
		lineEnd:   { type: Number },
		content:   { type: String },
	}).validator(),
	run({ proExampleId, lineStart, lineEnd, content }) {
		const annotation = {
			proExampleId,
			lineStart,
			lineEnd,
			content,
			createdAt: new Date()
		};
		Annotations.insert(annotation);
	}
});



export const remove = new ValidatedMethod({
	name: 'Annotations.remove',
	validate: new SimpleSchema({
		id: { type: String }
	}).validator(),
	run({ id }) {
		Annotations.remove(id);
	}
});