import { Store } from 'flummox';

export default class TimerStore extends Store {
	constructor({ timerActions }) {
		super();

		this.register(timerActions.createTimer, this.createTimer);

		this.state = {
			timers: []
		};
	}

	createTimer(timer) {	
		this.state.timers.push(timer);
	}

	getTimers() {
		return this.state.timers;
	}
};