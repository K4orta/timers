import React from 'react';
import Timer from './timer-list';

class TimerList extends React.Component {
	render() {
		let timers = this.props.timers.map((t) => {
			return (
				<Timer />
			);
		});

		return (
			<div className='row'>
				{timers}
			</div>
		);
	}
};

export default TimerList;