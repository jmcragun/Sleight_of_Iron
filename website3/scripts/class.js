$(document).ready(function () {
	$("li").click(function () {
		$(this).siblings().toggleClass("inactive");
		$(".inactive").fadeOut(500);
	});
});