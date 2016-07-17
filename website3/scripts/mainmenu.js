$(document).ready(function () {
	$("h1").hide().fadeIn(1000);
	$("ul").hide().fadeIn(1000);
	$("#newG").click(function () {
		var acceptNewG = confirm("Are you sure you want to start a new game?");
		if (acceptNewG == true) {
			location.href='./storypages/newgame.html'
		}
	});
	$("#quit").click(function () {
		var acceptQuit = confirm("Are you sure you want to quit?");
		if (acceptQuit == true) {
			window.close();
		}
	});
});