import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';



class ProExampleCollection extends Mongo.Collection {};
export default ProExamples = new ProExampleCollection('ProExamples');



ProExamples.schema = new SimpleSchema({
	source:           { type: String },
	code:             { type: String },
	componentPattern: { type: String },
	technologies:     { type: [String] },
	createdAt:        { type: Date },
});