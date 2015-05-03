import { Store } from 'flummox';
import Timer from '../utils/timer-model';

export default class TimerStore extends Store {
	constructor({ timerActions }) {
		super();

		this.register(timerActions.createTimer, this.createTimer);

		this.state = {
			timers: []
		};
	}

	/**
	 * @param {object} spec object.
	 * @config {int} [id] an id, defaults to 0.
	 * @config {int} [name] optional name for this timer. 
	 */
	createTimer(options) {
		this.state.timers.push(Timer(options));
		this.setState({
			timers: this.state.timers
		});
	}

	/**
	 *  Returns the array of timers
	 */
	getTimers() {
		return this.state.timers;
	}
};