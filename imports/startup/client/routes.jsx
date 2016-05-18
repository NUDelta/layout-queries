import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import DashPage     from './../../ui/pages/DashPage.jsx';
import TimelinePage from './../../ui/pages/TimelinePage.jsx';



export const renderRoutes = () => (
	<Router history={browserHistory}>

		<Route path="/" component={DashPage} />
		<Route path="/examples/:proExampleId" component={DashPage} />
		<Route path="/examples/:proExampleId/annotations/:annotationId" component={DashPage} />

		<Route path="/timeline" component={TimelinePage} />

	</Router>
);