import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript.js';
import ProExamples from '../../../../api/ProExamples/ProExamples.js';



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



	const options = {
		lineNumbers: true,
		theme: 'neo'
	};



	return {
		value: code,
		options: options
	}

}, Codemirror);