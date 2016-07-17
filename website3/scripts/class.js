localStorage.getItem('strength');
localStorage.getItem('agility');
localStorage.getItem('dexterity');
localStorage.getItem('faith');
localStorage.getItem('endurance');
localStorage.getItem('intelligence');
localStorage.getItem('luck');
localStorage.getItem('mysterium');
localStorage.getItem('personality');
var nextCounter = 0;
$(document).ready(function () {
	$("#firstq").hide().delay(500).fadeIn(1000);
	$("#attributeList").hide().delay(500).fadeIn(1000);
	$("#totalAttrPnts").hide().delay(500).fadeIn(1000);
	$(".return").hide();
	$(".next").hide();
	$("#as1").hide();
	$("#secondq").hide();
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
			$("#firstq").fadeOut(500);
			$("#raceList").fadeOut(500);
			$("ul#attributeList li").delay(500).fadeIn(500);
			$("#secondq").delay(500).fadeIn(500);
			$("#as1").delay(500).fadeIn(500);
			$(".return").fadeOut(500);
			return false;
		}
	});
	$("#selectElf").click(function () {
		var acceptElf = confirm("Do you truly wish to walk the sunken path as an elf?");
		if (acceptElf == true) {
			localStorage.mysterium = Number(localStorage.mysterium)+1;
			localStorage.dexterity = Number(localStorage.dexterity)+1;
			localStorage.endurance = Number(localStorage.endurance)-1;
			localStorage.strength = Number(localStorage.strength)-1;
			$("li").children().fadeOut(500);
			$("li").removeClass("inactive");
			$("li").removeClass("active");
			$("ul#attributeList li").delay(500).fadeIn(500);
			$("#firstq").fadeOut(500);
			$("#raceList").fadeOut(500);
			$("#secondq").delay(500).fadeIn(500);
			$("#as1").delay(500).fadeIn(500);
			$(".return").fadeOut(500);
			return false;
		}
	});
	$("#selectDwarf").click(function () {
		var acceptDwarf = confirm("Do you truly wish to walk the sunken path as a dwarf?");
		if (acceptDwarf == true) {
			localStorage.strength = Number(localStorage.strength)+1;
			localStorage.intelligence = Number(localStorage.intelligence)+1;
			localStorage.mysterium = Number(localStorage.mysterium)-1;
			localStorage.agility = Number(localStorage.agility)-1;
			$("li").children().fadeOut(500);
			$("li").removeClass("inactive");
			$("li").removeClass("active");
			$("ul#attributeList li").delay(500).fadeIn(500);
			$("#firstq").fadeOut(500);
			$("#raceList").fadeOut(500);
			$("#secondq").delay(500).fadeIn(500);
			$("#as1").delay(500).fadeIn(500);
			$(".return").fadeOut(500);
			return false;
		}
	});
	$("#selectOrc").click(function () {
		var acceptOrc = confirm("Do you truly wish to walk the sunken path as an orc?");
		if (acceptOrc == true) {
			localStorage.strength = Number(localStorage.strength)+2;
			localStorage.endurance = Number(localStorage.endurance)+1;
			localStorage.intelligence = Number(localStorage.intelligence)-1;
			localStorage.wisdom = Number(localStorage.wisdom)-1;
			localStorage.luck = Number(localStorage.luck)-1;
			$("li").children().fadeOut(500);
			$("li").removeClass("inactive");
			$("li").removeClass("active");
			$("ul#attributeList li").delay(500).fadeIn(500);
			$("#firstq").fadeOut(500);
			$("#raceList").fadeOut(500);
			$("#secondq").delay(500).fadeIn(500);
			$("#as1").delay(500).fadeIn(500);
			$(".return").fadeOut(500);
			return false;
		}
	});
});