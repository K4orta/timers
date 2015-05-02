import React from 'react';
import {RouteHandler} from 'react-router';

class Layout extends React.Component {
	render() {
		return (
			<div>
				<RouteHandler />
			</div>
		);
	}
};

export default Layout;