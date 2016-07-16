var nextCounter = 0;
$(document).ready(function () {
	$("h1").hide().delay(500).fadeIn(1000);
	$(".assistant").hide().delay(500).fadeIn(1000);
	$("#attributeList").hide().delay(500).fadeIn(1000);
	$("#totalAttrPnts").hide().delay(500).fadeIn(1000);
	$(".return").hide();
	$(".next").hide();
	$("ul#attributeList li").children().hide();
	$("ul#attributeList li").click(function () {
		$(this).siblings().addClass("inactive");
		$(this).addClass("active");
		$(".inactive").fadeOut(500);
		$(".return").delay(500).fadeIn(500);
		$(this).children().delay(500).fadeIn(500);
	});
	$(".return").click(function () {
		$("li").children().fadeOut(500);
		$(".inactive").delay(500).fadeIn(500);
		$("li").removeClass("inactive");
		$("li").removeClass("active");
		$(".return").fadeOut(500);
	});
});