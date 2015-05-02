import React from 'react';
import TimerList from './timers/timer-list';
import FluxComponent from 'flummox/component';

class Index extends React.Component {
	render() {
		return (
			<div className='view-container'>
				<FluxComponent connectToStores={'timers'}>
					<TimerList />
				</FluxComponent>
			</div>
		);
	}
}

export default Index;