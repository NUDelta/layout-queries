import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default class ProExampleSlide extends React.Component {



	constructor(props) {
		super(props);
	}



	render() {

		classes = classNames({
			active: this.props.active
		});

		return (
			<li className={classes}>
				<Link to={"/examples/"+this.props.proExample._id}>
					<span className="url">{this.props.proExample.source}</span>
					<div className="confidence">
						<i className="fa fa-circle"></i>
						<span>{0.98}</span>
					</div>
				</Link>
			</li>
		);
	}
}



ProExampleSlide.propTypes = {
	proExample: React.PropTypes.object.isRequired,
	active:     React.PropTypes.bool.isRequired
};