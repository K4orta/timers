/**
 * Timer Model
 * Takes a spec object and returns a timer.
 * @param {obect} spec object.
 * @config {string} [name] timer name.
 * @config {} 
 */

export default (options)=> {
	let my = options || {};
	my.times = [];
	if (my.id === undefined) {
		my.id = 0;
	}

	let play = () => {
		my.times.push(new Date());
	};

	let pause = () => {
		play();
	};

	let getElapsed = () => {
		let elapsedMs = 0;
		my.times.forEach((t, i) => {
			if(i % 2 === 0 && my.times[i+1] !== undefined) {
				elapsedMs += my.times[i+1].getTime() - t.getTime();
			}
		});

		if (my.times.length > 0 && isActive()) {
			elapsedMs += new Date().getTime() - my.times[my.times.length-1].getTime();
		}
		return elapsedMs;
	};

	let isActive = () => {
		return my.times.length % 2 !== 0;
	};

	return Object.freeze({
		id: my.id,
		start: play,
		pause: pause,
		getElapsed: getElapsed,
		isActive: isActive
	});
};