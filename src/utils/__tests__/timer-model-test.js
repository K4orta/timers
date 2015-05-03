import Timer from '../timer-model';
import tk from 'timekeeper';

describe('The Timer Model', function() {
	beforeEach(() => {
		this.timer = Timer();
	});

	it('returns an object', ()=> {		
		expect(this.timer).to.be.an('object');
	});

	it('has a unique ID', ()=> {
		let t2 = Timer({
			id: 1
		});
		expect(this.timer.id).to.not.equal(t2.id);
	});

	it('can start', ()=> {
		this.timer.start();
		expect(this.timer.isActive()).to.equal(true)
	});

	it('can pause', ()=> {
		this.timer.start();
		expect(this.timer.isActive()).to.equal(true)
		this.timer.pause();
		expect(this.timer.isActive()).to.equal(false)
	});

	it('keeps time', ()=> {
		tk.freeze(new Date(0));
		this.timer.start();
		tk.freeze(new Date(1000));

		expect(this.timer.getElapsed()).to.equal(1000);
	});

	it('keeps accurate time after pausing and restarting', ()=> {
		tk.freeze(new Date(0));
		this.timer.start();
		tk.freeze(new Date(1000));
		this.timer.pause();
		tk.freeze(new Date(1500));
		this.timer.start();
		tk.freeze(new Date(2000));

		expect(this.timer.getElapsed()).to.equal(1500);
	});
});