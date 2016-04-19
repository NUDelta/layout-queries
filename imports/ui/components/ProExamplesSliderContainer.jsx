import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { query } from '../../api/ProExamples/methods.js';
import ProExamplesSlider from './ProExamplesSlider.jsx';



export default createContainer((params) => {
	const proExamplesHandle = Meteor.subscribe('ProExamples.public');

	const component = params.selectedComponent;
	const technologies = params.selectedTechnologies;
	const proExampleQuery = {
		component: null,
		technologies: []
	};

	switch(component) {
		case 0:
			proExampleQuery.component = "Image Carousel";
			break;
		case 1:
			proExampleQuery.component = "Lightbox";
			break;
	}
	technologies.forEach((technology) => {
		switch(technology) {
			case 0:
				proExampleQuery.technologies.push("jQuery");
				break;
			case 1:
				proExampleQuery.technologies.push("Angular");
				break;
			case 2:
				proExampleQuery.technologies.push("ngAnimate");
				break;
			case 3:
				proExampleQuery.technologies.push("TweenMax");
				break;
			default:
				break;
		}
	});

	if (proExampleQuery.component !== null) {
		proExamples = query.call({ component: proExampleQuery.component, technologies: proExampleQuery.technologies });
		console.log(proExamples);
	} else {
		proExamples = [];
	}

	return {
		connected: Meteor.status().connected,
		proExamples: proExamples,
		codeIsUploaded: params.codeIsUploaded,
		proExampleId: params.proExampleId
	};
}, ProExamplesSlider);