import Store from '../timer-store';
import TimerActions from '../../actions/timer-actions';
import Flummox from 'flummox';

describe('The Timer Store', function() {

	class Flux extends Flummox {
		constructor() {
			super();
			const timerActions = this.createActions('timers', TimerActions);
			this.createStore('timers', Store, {timerActions});
		}
	}

	beforeEach(()=> {
		let flux = new Flux();
		this.store = flux.getStore('timers');
	});

	it('starts with an empty array of timers', ()=> {
		expect(this.store.getTimers().length).to.equal(0);
	});

	it('can add timers', ()=> {
		this.store.createTimer({id: 0});
		this.store.createTimer({id: 1});
		expect(this.store.getTimers().length).to.equal(2);
	});
});