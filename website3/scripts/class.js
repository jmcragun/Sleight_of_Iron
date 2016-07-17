localStorage.getItem('Strength');
localStorage.getItem('Agility');
localStorage.getItem('Dexterity');
localStorage.getItem('Faith');
localStorage.getItem('Endurance');
localStorage.getItem('Intelligence');
localStorage.getItem('Luck');
localStorage.getItem('Mysterium');
localStorage.getItem('Personality');
var attrRemain = 25;
var nextCounter = 0;
$(document).ready(function () {
	$("#firstq").hide().delay(500).fadeIn(1000);
	$("#attributeList").hide().delay(500).fadeIn(1000);
	$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
	$("#totalAttrPnts").hide();
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
			localStorage.Race = "Human";
			$("li").children().fadeOut(500);
			$("li").removeClass("inactive");
			$("li").removeClass("active");
			$("#firstq").fadeOut(500);
			$("#raceList").fadeOut(500);
			$("ul#attributeList li").delay(500).fadeIn(500);
			$("#totalAttrPnts").hide().delay(500).fadeIn(1000);
			$("#secondq").delay(500).fadeIn(500);
			$("#as1").delay(500).fadeIn(500);
			$(".return").fadeOut(500);
			return false;
		}
	});
	$("#selectElf").click(function () {
		var acceptElf = confirm("Do you truly wish to walk the sunken path as an elf?");
		if (acceptElf == true) {
			localStorage.Mysterium = Number(localStorage.Mysterium)+1;
			localStorage.Dexterity = Number(localStorage.Dexterity)+1;
			localStorage.Endurance = Number(localStorage.Endurance)-1;
			localStorage.Strength = Number(localStorage.Strength)-1;
			localStorage.Race = "Elf";
			$("li").children().fadeOut(500);
			$("li").removeClass("inactive");
			$("li").removeClass("active");
			$("ul#attributeList li").delay(500).fadeIn(500);
			$("#firstq").fadeOut(500);
			$("#raceList").fadeOut(500);
			$("#totalAttrPnts").hide().delay(500).fadeIn(1000);
			$("#secondq").delay(500).fadeIn(500);
			$("#as1").delay(500).fadeIn(500);
			$(".return").fadeOut(500);
			return false;
		}
	});
	$("#selectDwarf").click(function () {
		var acceptDwarf = confirm("Do you truly wish to walk the sunken path as a dwarf?");
		if (acceptDwarf == true) {
			localStorage.Strength = Number(localStorage.Strength)+1;
			localStorage.Intelligence = Number(localStorage.Intelligence)+1;
			localStorage.Mysterium = Number(localStorage.Mysterium)-1;
			localStorage.Agility = Number(localStorage.Agility)-1;
			localStorage.Race = "Dwarf";
			$("li").children().fadeOut(500);
			$("li").removeClass("inactive");
			$("li").removeClass("active");
			$("ul#attributeList li").delay(500).fadeIn(500);
			$("#firstq").fadeOut(500);
			$("#raceList").fadeOut(500);
			$("#totalAttrPnts").hide().delay(500).fadeIn(1000);
			$("#secondq").delay(500).fadeIn(500);
			$("#as1").delay(500).fadeIn(500);
			$(".return").fadeOut(500);
			return false;
		}
	});
	$("#selectOrc").click(function () {
		var acceptOrc = confirm("Do you truly wish to walk the sunken path as an orc?");
		if (acceptOrc == true) {
			localStorage.Strength = Number(localStorage.Strength)+2;
			localStorage.Endurance = Number(localStorage.Endurance)+1;
			localStorage.Intelligence = Number(localStorage.Intelligence)-1;
			localStorage.Wisdom = Number(localStorage.Wisdom)-1;
			localStorage.Luck = Number(localStorage.Luck)-1;
			localStorage.Race = "Orc";
			$("li").children().fadeOut(500);
			$("li").removeClass("inactive");
			$("li").removeClass("active");
			$("ul#attributeList li").delay(500).fadeIn(500);
			$("#firstq").fadeOut(500);
			$("#raceList").fadeOut(500);
			$("#totalAttrPnts").hide().delay(500).fadeIn(1000);
			$("#secondq").delay(500).fadeIn(500);
			$("#as1").delay(500).fadeIn(500);
			$(".return").fadeOut(500);
			return false;
		}
	});
});