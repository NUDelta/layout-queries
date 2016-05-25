import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ProExamples from '../../../api/ProExamples/ProExamples.js';
import Code from './Code.jsx';



export default createContainer((params) => {



	let example,
		code = '';



	const handle = Meteor.subscribe('ProExamples.public');
	if (handle.ready()) {
		const id = params.activeExampleId;
		if (id) {
			example = ProExamples.findOne(id);
			code = example.code;
		}
	}



	return {
		code: code,
		activeCodeStart: params.activeCodeStart,
		activeCodeEnd: params.activeCodeEnd
	};

}, Code);