import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default HeaderExampleSlide = (props) => {



	const confidence = props.confidence || 0;
	const quality = classNames({
		good: confidence >= 0.5,
		mediocre: confidence >= 0.25 && confidence < 0.5,
		bad: confidence < 0.25
	});
	const fillThisMuch = { width: confidence > 0 ? (confidence*100) + '%' : '5%' }; // at least a little red



	const classes = classNames({
		'header-module-slide': true,
		'active': props.isActive
	});



	const url = "/examples/" + props.id;



	return (
		<li className={classes}>
			<Link to={url}>
				<span className="header-module-slide-site">{props.siteName}</span>
				<div className="header-module-slide-confidence">
					<div className="header-module-slide-bar">
						<span className={quality} style={fillThisMuch}></span>
					</div>
					<ul className="header-module-slide-intersections">
						{props.intersections.map( (x, i) => {
							return <li key={i}>{x}</li>
						})}
					</ul>
				</div>
			</Link>
		</li>
	);



};



HeaderExampleSlide.PropTypes = {
	id: React.PropTypes.string.isRequired,
	siteName: React.PropTypes.string.isRequired,
	confidence: React.PropTypes.number.isRequired,
	intersections: React.PropTypes.array.isRequired,
	isActive: React.PropTypes.bool.isRequired
};