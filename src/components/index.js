import React from 'react';
import TimerList from './timers/timer-list';
import CreateBtn from './ui/create-btn';
import FluxComponent from 'flummox/component';

class Index extends React.Component {
	render() {
		return (
			<div className='view-container'>
				<FluxComponent connectToStores={'timers'}>
					<CreateBtn />
					<TimerList />
				</FluxComponent>
			</div>
		);
	}
}

export default Index;