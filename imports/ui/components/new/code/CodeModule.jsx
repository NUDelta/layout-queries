import React from 'react';
import CodeContainer from './CodeContainer.jsx';



export default CodeModule = (props) => {



	return (
		<section className="code-module">
			<CodeContainer
				activeExampleId={props.activeExampleId} />
		</section>
	);



};



CodeModule.PropTypes = {
	activeExampleId: React.PropTypes.string.isRequired
};