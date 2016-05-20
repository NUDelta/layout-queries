import React from 'react';
import Codemirror from 'react-codemirror';



export default class CodeModule extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			code: 'hello test'
		};
	}



	getOptions() {
		return {
			lineNumbers: true
		};
	}



	render() {
		return (
			<section className="code-module">
				<Codemirror value={this.state.code} options={this.getOptions()} />
			</section>
		);
	}



}