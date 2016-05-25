import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ProExamples from '../../../api/ProExamples/ProExamples.js';
import Video from './Video.jsx';



export default createContainer((params) => {



	let handle = Meteor.subscribe('ProExamples.public'),
		id = params.activeExampleId,
		example,
		source,
		videoSource = '';

	// wait for mongo connection
	if (handle.ready()) {

		// example id set
		if (id) {

			example = ProExamples.findOne(id);

			// example exists
			if (example) {
				source = example.source;
				videoSource = getVideoSource(source);
			}
		}
	}



	function getVideoSource(source) {
		let videoSource = '/';

		switch (source) {
			case 'xkcd.com':
				videoSource += 'xkcd/';
				break;
			case 'archfire.org':
				videoSource += 'panelWindows/';
				break;
			case 'thorsummoner.github.io':
				videoSource += 'thorsummoner/';
				break;
		}

		videoSource += 'gif.mp4';
		return videoSource;
	}



	return {
		videoTime: params.videoTime,
		setTimelineTime: params.setTimelineTime,
		videoSource: videoSource
	};



}, Video);