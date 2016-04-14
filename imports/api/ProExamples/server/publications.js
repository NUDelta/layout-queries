import { Meteor } from 'meteor/meteor';
import ProExamples from '../ProExamples.js';

Meteor.publish('ProExamples.public', function () {
	return ProExamples.find({});
});