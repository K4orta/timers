import React from 'react';
import Timer from './timer';

class TimerList extends React.Component {
	render() {
		let timers = this.props.timers.map((t) => {
			return (
				<Timer timer={t} />
			);
		});

		return (
			<ul className='timer-list'>
				{timers}
			</ul>
		);
	}
};

export default TimerList;