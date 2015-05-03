import React from 'react';

class Timer extends React.Component {
	render() {
		return (
			<li className='timer'>
				{this.props.timer.id}
			</li>
		);
	}
};

export default Timer;