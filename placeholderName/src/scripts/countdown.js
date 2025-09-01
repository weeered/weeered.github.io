const countdownElems = document.getElementsByClassName("ctdwn");
var countDownDate = new Date("November 11, 2025 9:00:00").getTime();

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
		if (seconds >= 10) {
			countdownElems[i].innerHTML =
				days +
				"<span class='footer__timer_elem-span'>дн</span> " +
				hours +
				"<span class='footer__timer_elem-span'>час</span> " +
				minutes +
				"<span class='footer__timer_elem-span'>мин</span> " +
				seconds +
				"<span class='footer__timer_elem-span'>сек</span>";
		} else {
			countdownElems[i].innerHTML =
				days +
				"<span class='footer__timer_elem-span'>дн</span> " +
				hours +
				"<span class='footer__timer_elem-span'>час</span> " +
				minutes +
				"<span class='footer__timer_elem-span'>мин</span> " +
				"0" +
				seconds +
				"<span class='footer__timer_elem-span'>сек</span>";
		}
	}

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		for (let i = 0; i < countdownElems.length; i++) {
			countdownElems[i].innerHTML = 0 + ":" + 0 + ":" + 0 + ":" + 0;
		}
	}
}

// Update the count down every 1 second
var x = setInterval(() => timer(), 1000);
