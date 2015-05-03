import React from 'react';
import TimerList from './timers/timer-list';
import CreateBtn from './ui/create-btn';
import FluxComponent from 'flummox/component';

class Index extends React.Component {
	render() {
		return (
			<div className='view-container'>
				<CreateBtn onClick={this._addTimer.bind(this)} />
				<FluxComponent connectToStores={'timers'}>
					<TimerList />
				</FluxComponent>
			</div>
		);
	}
	/** 
	 * Adds a timer to the timers store.
	 * @param {Event} event passed by the click handler
	 */
	_addTimer(e) {
		let timers = this.props.flux.getStore('timers');
		timers.createTimer({name: ''});

	}
}

export default Index;