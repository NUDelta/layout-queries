import React from 'react';
import UserCode from './UserCode.jsx';
import UploadPrompt from './UploadPrompt.jsx';

export default UserPane = React.createClass({



	propTypes: {
		fileName: React.PropTypes.string, // null if none uploaded
		code:     React.PropTypes.string, // null if none uploaded
		readFile: React.PropTypes.func.isRequired
	},



	render() {
		return (
			<section className="user-pane pane">
				{ this.props.code ?
					<UserCode
						fileName={this.props.fileName}
						code={this.props.code}/>
					:
					<UploadPrompt
						readFile={this.props.readFile} />			
				}
			</section>
		);
	}



});