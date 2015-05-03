import { Store } from 'flummox';
import Timer from '../utils/timer-model';

export default class TimerStore extends Store {
	constructor({ timerActions }) {
		super();

		if(timerActions !== undefined) {
			this.register(timerActions.createTimer, this.createTimer);
		}

		this.state = {
			timers: []
		};
	}

	createTimer(options) {	
		this.state.timers.push(Timer(options));
	}

	getTimers() {
		return this.state.timers;
	}
};