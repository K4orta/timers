import { Flummox } from 'flummox';
import TimerActions from './actions/timer-actions';
import TimerStore from './stores/timer-store';

export default class Flux extends Flummox {
	constructor() {
		super();

		const timerActions = this.createActions('timers', TimerActions);
		this.createStore('timers', TimerStore, {timerActions});
	}
}