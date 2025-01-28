// Set the date we're counting down to
const countdownElems = document.getElementsByClassName("ctdwn");
var countDownDate = new Date("April 24, 2025 9:00:00").getTime();

timer();

function timer() {
	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"

	for (let i = 0; i < countdownElems.length; i++) {
		countdownElems[i].innerHTML =
			"<span class='countdown__text'>До cимпозиума:</span><span  class='countdown__time'><span class='countdown__box'>" +
			days +
			"<span class='countdown__time-name'>дн </span></span><span class='countdown__box'>" +
			hours +
			"<span class='countdown__time-name'>час </span></span><span class='countdown__box'>" +
			minutes +
			"<span class='countdown__time-name'>мин </span></span><span class='countdown__box'>" +
			seconds +
			"<span class='countdown__time-name'>сек</span></span></span>";
	}

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		for (let i = 0; i < countdownElems.length; i++) {
			countdownElems[i].innerHTML =
				"<span class='countdown__text'>До cимпозиума:</span><span  class='countdown__time'><span class='countdown__box'>" +
				0 +
				"<span class='countdown__time-name'>дн </span></span><span class='countdown__box'>" +
				0 +
				"<span class='countdown__time-name'>час </span></span><span class='countdown__box'>" +
				0 +
				"<span class='countdown__time-name'>мин </span></span><span class='countdown__box'>" +
				0 +
				"<span class='countdown__time-name'>сек</span></span></span>";
		}
	}
}

// Update the count down every 1 second
var x = setInterval(() => timer(), 1000);
