var nextCounter = 0;
$(document).ready(function () {
	$("h1").hide().delay(500).fadeIn(1000);
	$(".assistant").hide().delay(500).fadeIn(1000);
	$("#attributeList").hide().delay(500).fadeIn(1000);
	$(".return").hide();
	$(".next").hide();
	$("li").click(function () {
		$(this).siblings().addClass("inactive");
		$(".inactive").fadeOut(500);
		$(".return").delay(500).fadeIn(500);
	});
	$(".return").click(function () {
		$(".inactive").fadeIn(500);
		$("li").removeClass("inactive");
		$(".return").fadeOut(500);
	});
});