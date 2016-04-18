import React from 'react';
import ComponentSelect from './ComponentSelect.jsx';
import TechnologySelect from './TechnologySelect.jsx';
import ProExamplesSliderContainer from './ProExamplesSliderContainer';

export default class Header extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {
		return (
			<section className="header">
				<ComponentSelect
					codeIsUploaded={this.props.codeIsUploaded} />
				<TechnologySelect
					codeIsUploaded={this.props.codeIsUploaded} />
				<ProExamplesSliderContainer
					codeIsUploaded={this.props.codeIsUploaded}
					proExampleId={this.props.proExampleId} />
			</section>
		);
	}



}



Header.propTypes = {
	codeIsUploaded: React.PropTypes.bool.isRequired,
	proExampleId: React.PropTypes.string // null if pro pane not active
};