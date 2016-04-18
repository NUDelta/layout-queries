import { Meteor } from 'meteor/meteor';
import Annotations from '../Annotations.js';

Meteor.publish('Annotations.public', function () {
	return Annotations.find({});
});