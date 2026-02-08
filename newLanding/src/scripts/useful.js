function throttle(func, time) {
	let inThrottle;

	return function () {
		if (!inThrottle) {
			func();
			inThrottle = true;
			setTimeout(() => (inThrottle = false), time);
		}
	};
}

function debounce(func, time) {
	let resizeTimeout;

	return function () {
		clearTimeout(resizeTimeout);

		resizeTimeout = setTimeout(() => {
			func();
		}, time);
	};
}
