require('../init');

import React from 'react';
import Router from 'react-router';
import routes from '../routes';
import FluxComponent from 'flummox/component';
import Flux from '../Flux';

const flux = new Flux();

const router = Router.create({
	routes: routes,
	location: Router.HistoryLocation
});

router.run((Handler, state) => {
	const routeInfo = {state, flux};
	React.render(
		<FluxComponent flux={flux}>
			<Handler {...state} />
		</FluxComponent>,
		document.querySelector('.app')
	); 
});