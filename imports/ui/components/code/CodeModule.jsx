import React from 'react';
import CodeContainer from './CodeContainer.jsx';



export default CodeModule = (props) => {



	return (
		<section className="code-module">
			<CodeContainer
				activeExampleId={props.activeExampleId}
				activeCodeStart={props.activeCodeStart}
				activeCodeEnd={props.activeCodeEnd} />
		</section>
	);



};



CodeModule.PropTypes = {
	activeExampleId: React.PropTypes.string.isRequired,
	activeCodeStart: React.PropTypes.number.isRequired,
	activeCodeEnd: React.PropTypes.number.isRequired
};