/**
 * Timer Model
 * Takes a spec object and returns a timer.
 * @param {obect} spec object.
 * @config {string} [name] timer name.
 * @config {} 
 */

export default (options)=> {
	let my = { options };
	my.times = [];

	let play = () => {
		my.times.push(new Date());
	};

	let pause = () => {
		play();
	};

	let getTime = () => {
		let elapsedMs = 0;
		my.times.each((t, i) => {
			if(i % 2 === 0 && mt.times[i+1] !== undefined) {

			}
		});
		return elapsedMs;
	};

	let isActive = () => {
		return my.times.length % 2 !== 0;
	};

	return Object.freeze({
		start: play,
		pause: pause,
		time: getTime,
		isActive: isActive
	});
};