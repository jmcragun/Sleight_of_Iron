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
var strCount = 0;
var agiCount = 0;
var dexCount = 0;
var endCount = 0;
var intCount = 0;
var wisCount = 0;
var fatCount = 0;
var mysCount = 0;
var perCount = 0;
var lukCount = 0;
$(document).ready(function () {
	$("#firstq").hide().delay(500).fadeIn(1000);
	$("#attributeList").hide().delay(500).fadeIn(1000);
	$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
	$("#strCount").html(strCount);
	$("#agiCount").html(agiCount);
	$("#dexCount").html(dexCount);
	$("#endCount").html(endCount);
	$("#intCount").html(intCount);
	$("#wisCount").html(wisCount);
	$("#fatCount").html(fatCount);
	$("#mysCount").html(mysCount);
	$("#perCount").html(perCount);
	$("#lukCount").html(lukCount);
	$("#totalAttrPnts").hide();
	$("#attributeCount").hide();
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
		$("#attributeCount li").fadeOut(500);
		$(".return").delay(500).fadeIn(500);
		$(this).children().delay(500).fadeIn(500);
	});
	$(".return").click(function () {
		$("li").children().fadeOut(500);
		$("#attributeCount").delay(500).fadeIn(500);
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
			$("#attributeCount").delay(500).fadeIn(500);
			$("#totalAttrPnts").delay(500).fadeIn(500);
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
			$("#attributeCount").delay(500).fadeIn(500);
			$("#totalAttrPnts").delay(500).fadeIn(500);
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
			$("#attributeCount").delay(500).fadeIn(500);
			$("#totalAttrPnts").delay(500).fadeIn(500);
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
			$("#attributeCount").delay(500).fadeIn(500);
			$("#totalAttrPnts").delay(500).fadeIn(500);
			$("#secondq").delay(500).fadeIn(500);
			$("#as1").delay(500).fadeIn(500);
			$(".return").fadeOut(500);
			return false;
		}
	});
	$("#incStr").click(function () {
		if (strCount >= 0){
			attrRemain--;
			strCount++;
		}
	});
	$("#decStr").click(function () {
		if (strCount >= 0){
			attrRemain++;
			strCount--;
		}
	});
	$("#incAgl").click(function () {
		if (agiCount >= 0){
			attrRemain--;
			agiCount++;
		}
	});
	$("#decAgl").click(function () {
		if (agiCount >= 0){
			attrRemain++;
			agiCount--;
		}
	});
	$("#incDex").click(function () {
		if (dexCount >= 0){
			attrRemain--;
			dexCount++;
		}
	});
	$("#decDex").click(function () {
		if (dexCount >= 0){
			attrRemain++;
			dexCount--;
		}
	});
	$("#incEnd").click(function () {
		if (endCount >= 0){
			attrRemain--;
			endCount++;
		}
	});
	$("#decEnd").click(function () {
		if (endCount >= 0){
			attrRemain++;
			endCount--;
		}
	});
	$("#incInt").click(function () {
		if (intCount >= 0){
			attrRemain--;
			intCount++;
		}
	});
	$("#decInt").click(function () {
		if (intCount >= 0){
			attrRemain++;
			intCount--;
		}
	});
	$("#incWis").click(function () {
		if (wisCount >= 0){
			attrRemain--;
			wisCount++;
		}
	});
	$("#decWis").click(function () {
		if (wisCount >= 0){
			attrRemain++;
			wisCount--;
		}
	});
	$("#incFat").click(function () {
		if (fatCount >= 0){
			attrRemain--;
			fatCount++;
		}
	});
	$("#decFat").click(function () {
		if (fatCount >= 0){
			attrRemain++;
			fatCount--;
		}
	});
	$("#incMys").click(function () {
		if (mysCount >= 0){
			attrRemain--;
			mysCount++;
		}
	});
	$("#decMys").click(function () {
		if (mysCount >= 0){
			attrRemain++;
			mysCount--;
		}
	});
	$("#incPer").click(function () {
		if (perCount >= 0){
			attrRemain--;
			perCount++;
		}
	});
	$("#decPer").click(function () {
		if (perCount >= 0){
			attrRemain++;
			perCount--;
		}
	});
	$("#incLuc").click(function () {
		if (lukCount >= 0){
			attrRemain--;
			lukCount++;
		}
	});
	$("#decLuc").click(function () {
		if (lukCount >= 0){
			attrRemain++;
			lukCount--;
		}
	});
});