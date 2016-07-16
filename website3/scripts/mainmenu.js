$(document).ready(function () {
	$("#newG").click(function () {
		var acceptNewG = confirm("Are you sure you want to start a new game?");
		if (acceptNewG == true) {
			location.href='./storypages/newgame.html'
		}
	});
});