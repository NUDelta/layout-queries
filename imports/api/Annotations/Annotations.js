import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';



class AnnotationCollection extends Mongo.Collection {};
export default Annotations = new AnnotationCollection('Annotations');



Annotations.schema = new SimpleSchema({
	proExampleId: { type: String },
	lineStart:    { type: Number },
	lineEnd:      { type: Number },
	content:      { type: String },
	order:        { type: Number },
	createdAt:    { type: Date }
});