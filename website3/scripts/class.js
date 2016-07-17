var nextCounter = 0;
$(document).ready(function () {
	$("h1").hide().delay(500).fadeIn(1000);
	$(".assistant").hide().delay(500).fadeIn(1000);
	$("#attributeList").hide().delay(500).fadeIn(1000);
	$("#totalAttrPnts").hide().delay(500).fadeIn(1000);
	$(".return").hide();
	$(".next").hide();
	$("ul#attributeList li").hide();
	$(".unlockable").hide();
	$("ul#raceList li").children().hide();
	$("ul#raceList").hide().delay(500).fadeIn(1000);
	$("ul#raceList li").click(function () {
		$(this).siblings().not(".unlockable").addClass("inactive");
		$(this).addClass("active");
		$(".inactive").fadeOut(500);
		$(".return").delay(500).fadeIn(500);
		$(this).children().delay(500).fadeIn(500);
	});
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
	$("#selectHuman").click(function () {
		var acceptHuman = confirm("Do you truly wish to walk the sunken path as a human?");
		if (acceptHuman == true) {
			$("li").children().fadeOut(500);
			$("li").removeClass("inactive");
			$("li").removeClass("active");
			$("#raceList").fadeOut(500);
			$("ul#attributeList li").delay(500).fadeIn(500);
			$(".return").fadeOut(500);
			return false;
		}
	});
	$("#selectElf").click(function () {
		var acceptElf = confirm("Do you truly wish to walk the sunken path as an elf?");
		if (acceptElf == true) {
			$("li").children().fadeOut(500);
			$("li").removeClass("inactive");
			$("li").removeClass("active");
			$("ul#attributeList li").delay(500).fadeIn(500);
			$("#raceList").fadeOut(500);
			$(".return").fadeOut(500);
			return false;
		}
	});
	$("#selectDwarf").click(function () {
		var acceptDwarf = confirm("Do you truly wish to walk the sunken path as a dwarf?");
		if (acceptDwarf == true) {
			$("li").children().fadeOut(500);
			$("li").removeClass("inactive");
			$("li").removeClass("active");
			$("ul#attributeList li").delay(500).fadeIn(500);
			$("#raceList").fadeOut(500);
			$(".return").fadeOut(500);
			return false;
		}
	});
	$("#selectOrc").click(function () {
		var acceptOrc = confirm("Do you truly wish to walk the sunken path as an orc?");
		if (acceptOrc == true) {
			$("li").children().fadeOut(500);
			$("li").removeClass("inactive");
			$("li").removeClass("active");
			$("ul#attributeList li").delay(500).fadeIn(500);
			$("#raceList").fadeOut(500);
			$(".return").fadeOut(500);
			return false;
		}
	});
});