$(document).ready(function() {
	init();
	var clock = $('.mystery-clock').FlipClock({
		clockFace: 'DailyCounter',
	});
	var date = new Date(2013, 9, 12, 22,6,10,0);
	var now = new Date();
	var seconds = Math.round((now.getTime() - date.getTime()) / 1000);
	clock.setTime(seconds);
});

$(window).on('resize', function() {
	windowResize();
});