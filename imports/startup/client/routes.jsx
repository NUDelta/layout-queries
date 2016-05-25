import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import TimelinePage from './../../ui/pages/TimelinePage.jsx';



export const renderRoutes = () => (
	<Router history={browserHistory}>

		<Route path="/" component={TimelinePage} />
		<Route path="/examples/:exampleId" component={TimelinePage} />

	</Router>
);