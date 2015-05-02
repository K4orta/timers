import Timer from '../timer-model';

describe('The Timer Model', function() {
	beforeEach(() => {
		this.timer = Timer();
	});

	it('returns an object', ()=> {		
		expect(this.timer).to.be.an('object');
	});

	it('can start', ()=> {
		this.timer.start();
		expect(this.timer.isActive()).to.equal(true)
	});

	it('can stop', ()=> {
		this.timer.start();
		expect(this.timer.isActive()).to.equal(true)
		this.timer.pause();
		expect(this.timer.isActive()).to.equal(false)
	});
});