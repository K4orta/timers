import React from 'react';
import {RouteHandler} from 'react-router';

class Layout extends React.Component {
	render() {
		return (
			<div>
				<RouteHandler {...this.props} />
			</div>
		);
	}
};

export default Layout;