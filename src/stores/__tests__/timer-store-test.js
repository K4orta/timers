import Store from '../timer-store';
import TimerActions from '../../actions/timer-actions';
import Flux from 'flummox';

describe('The Timer Store', function() {
	beforeEach(()=> {
		let timerActions = new Flux().createActions('timers', TimerActions);
		this.store = new Store(timerActions);
	});

	it('starts with an empty array of timers', ()=> {
		expect(this.store.getTimers().length).to.equal(0);
	});

	it('can add timers', ()=> {
		this.store.createTimer({id: 0});
		expect(this.store.getTimers().length).to.equal(1);
	});
});