localStorage.getItem('Strength');
localStorage.getItem('Agility');
localStorage.getItem('Dexterity');
localStorage.getItem('Faith');
localStorage.getItem('Endurance');
localStorage.getItem('Intelligence');
localStorage.getItem('Luck');
localStorage.getItem('Mysterium');
localStorage.getItem('Personality');
var race = localStorage.Race;
var attrRemain = 25;
var nextCounter = 1;
$(document).ready(function () {
	$("#firstq").hide().delay(500).fadeIn(1000);
	$("#attributeList").hide().delay(500).fadeIn(1000);
	$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
	$("#totalAttrPnts").hide();
	$(".return").hide();
	$(".next").hide();
	$("#as1").hide();
	$("#secondq").hide();
	$("#counters").hide();
	$("ul#attributeList li").hide();
	$(".unlockable").hide();
	$("ul#raceList li").children().hide();
	$("ul#raceList").hide().delay(500).fadeIn(1000);
	$("ul#raceList li").click(function () {
		$(this).siblings().not(".unlockable").addClass("inactive2");
		$(this).addClass("active2");
		$(".inactive2").fadeOut(500);
		$(".return").delay(500).fadeIn(500);
		$(this).children().delay(500).fadeIn(500);
	});
	$("ul#attributeList li").click(function () {
		if ($(this).hasClass("inactive")) {
			$(this).removeClass("inactive");
		}
		$(this).addClass("active");
		$(this).siblings().removeClass("active").addClass("inactive");
	});		
	$("ul#attributeList li").click(function () {
		if ($(this).hasClass("inactive")) {
			$(this).removeClass("inactive");
		}
		$(this).addClass("active");
		$(this).siblings().removeClass("active").addClass("inactive");
	});
	$(".return").click(function () {
		$("li").children().fadeOut(500);
		$(".inactive2").delay(500).fadeIn(500);
		$("li").removeClass("inactive2");
		$("li").removeClass("active2");
		$(".return").fadeOut(500);
	});
	$("#selectHuman").click(function () {
		var acceptHuman = confirm("Do you truly wish to walk the sunken path as a human?");
		if (acceptHuman == true) {
			localStorage.Race = "Human";
			var strCount = 1;
			var agiCount = 1;
			var dexCount = 1;
			var endCount = 1;
			var intCount = 1;
			var wisCount = 1;
			var fatCount = 1;
			var mysCount = 1;
			var perCount = 1;
			var lukCount = 1;
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
			$("li").children().fadeOut(500);
			$("li").removeClass("inactive");
			$("li").removeClass("active");
			$("#firstq").fadeOut(500);
			$("#raceList").fadeOut(500);
			$("ul#attributeList li").delay(500).fadeIn(500).children().fadeIn(500);
			$("#counters").delay(500).fadeIn(500);
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
			var mysCount = 2;
			var dexCount = 2;
			var endCount = 0;
			var strCount = 0;
			var agiCount = 1;
			var perCount = 1;
			var lukCount = 1;
			var wisCount = 1;
			var fatCount = 1;	
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
			$("li").children().fadeOut(500);
			$("li").removeClass("inactive");
			$("li").removeClass("active");
			$("ul#attributeList li").delay(500).fadeIn(500).children().fadeIn(500);
			$("#firstq").fadeOut(500);
			$("#raceList").fadeOut(500);
			$("#counters").delay(500).fadeIn(500);
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
			var strCount = 2;
			var intCount = 2;
			var mysCount = 0;
			var agiCount = 0;
			var perCount = 1;
			var lukCount = 1;
			var wisCount = 1;
			var fatCount = 1;
			var dexCount = 1;
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
			$("li").children().fadeOut(500);
			$("li").removeClass("inactive");
			$("li").removeClass("active");
			$("ul#attributeList li").delay(500).fadeIn(500).children().fadeIn(500);
			$("#firstq").fadeOut(500);
			$("#raceList").fadeOut(500);
			$("#counters").delay(500).fadeIn(500);
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
			var strCount = 3;
			var endCount = 3;
			var intCount = 0;
			var wisCount = 0;
			var lukCount = 0;
			var agiCount = 1;
			var dexCount = 1;	
			var fatCount = 1;
			var mysCount = 1;
			var perCount = 1;	
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
			$("li").children().fadeOut(500);
			$("li").removeClass("inactive");
			$("li").removeClass("active");
			$("ul#attributeList li").delay(500).fadeIn(500).children().fadeIn(500);
			$("#firstq").fadeOut(500);
			$("#raceList").fadeOut(500);
			$("#counters").delay(500).fadeIn(500);
			$("#totalAttrPnts").delay(500).fadeIn(500);
			$("#secondq").delay(500).fadeIn(500);
			$("#as1").delay(500).fadeIn(500);
			$(".return").fadeOut(500);
			return false;
		}
	});
	$("#incStr").click(function () {
		if (attrRemain >= 1){
			attrRemain--;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			strCount++;
			$("#strCount").html(strCount);
		}
	});
	$("#decStr").click(function () {
		if (race == "Dwarf"){
			if (strCount >= 3) {
				attrRemain++;
				$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
				strCount--;
				$("#strCount").html(strCount);
			}
		}
		else if (race == "Orc") {
			if (strCount >= 4) {
				attrRemain++;
				$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
				strCount--;
				$("#strCount").html(strCount);
			}
		}
		else if (race == "Elf") {
			if (strCount >= 1) {
				attrRemain++;
				$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
				strCount--;
				$("#strCount").html(strCount);
			}
		}
		else if (strCount >= 2) {
			attrRemain++;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			strCount--;
			$("#strCount").html(strCount);
		}
	});
	$("#incAgl").click(function () {
		if (attrRemain >= 1){
			attrRemain--;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			agiCount++;
			$("#agiCount").html(agiCount);
		}
	});
	$("#decAgl").click(function () {
		if (race == "Elf"){
			if (agiCount >= 3) {
				attrRemain++;
				$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
				agiCount--;
				$("#agiCount").html(agiCount);
			}
		}
		else if (race == "Dwarf"){
			if (agiCount >= 1) {
				attrRemain++;
				$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
				agiCount--;
				$("#agiCount").html(agiCount);
			}
		}
		else if (agiCount >= 2) {
			attrRemain++;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			agiCount--;
			$("#agiCount").html(agiCount);
		}
	});
	$("#incDex").click(function () {
		if (attrRemain >= 1){
			attrRemain--;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			dexCount++;
			$("#dexCount").html(dexCount);
		}
	});
	$("#decDex").click(function () {
		if (race == "Elf"){
			if (dexCount >= 3) {
				attrRemain++;
				$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
				dexCount--;
				$("#dexCount").html(dexCount);
			}
		}
		else if (dexCount >= 2) {
			attrRemain++;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			dexCount--;
			$("#dexCount").html(dexCount);
		}
	});
	$("#incEnd").click(function () {
		if (attrRemain >= 1){
			attrRemain--;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			endCount++;
			$("#endCount").html(endCount);
		}
	});
	$("#decEnd").click(function () {
		if (race == "Elf") {
			if (endCount >= 1) {
				attrRemain++;
				$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
				endCount--;
				$("#endCount").html(endCount);
			}
		}
		else if (race == "Orc") {
			if (endCount >= 3) {
				attrRemain++;
				$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
				endCount--;
				$("#endCount").html(endCount);
			}
		}
		else if (endCount >= 2){
			attrRemain++;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			endCount--;
			$("#endCount").html(endCount);
		}
	});
	$("#incInt").click(function () {
		if (attrRemain >= 1){
			attrRemain--;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			intCount++;
			$("#intCount").html(intCount);
		}
	});
	$("#decInt").click(function () {
		if (race == "Dwarf") {
			if (intCount >= 3) {
				attrRemain++;
				$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
				intCount--;
				$("#intCount").html(intCount);
			}
		}
		else if (race == "Orc") {
			if (intCount >= 1) {
				attrRemain++;
				$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
				intCount--;
				$("#intCount").html(intCount);
			}
		}
			else if (intCount >= 2){
			attrRemain++;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			intCount--;
			$("#intCount").html(intCount);
		}
	});
	$("#incWis").click(function () {
		if (attrRemain >= 1){
			attrRemain--;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			wisCount++;
			$("#wisCount").html(wisCount);
		}
	});
	$("#decWis").click(function () {
		if (race == "Orc") {
			if (wisCount >= 1) {
				attrRemain++;
				$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
				wisCount--;
			$("#wisCount").html(wisCount);
			}
		}
		else if (wisCount >= 2){
			attrRemain++;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			wisCount--;
			$("#wisCount").html(wisCount);
		}
	});
	$("#incFat").click(function () {
		if (attrRemain >= 1){
			attrRemain--;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			fatCount++;
			$("#fatCount").html(fatCount);
		}
	});
	$("#decFat").click(function () {
		if (fatCount >= 2){
			attrRemain++;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			fatCount--;
			$("#fatCount").html(fatCount);
		}
	});
	$("#incMys").click(function () {
		if (attrRemain >= 1){
			attrRemain--;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			mysCount++;
			$("#mysCount").html(mysCount);
		}
	});
	$("#decMys").click(function () {
		if (race == "Elf") {
			if (mysCount >= 3) {
				attrRemain++;
				$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
				mysCount--;
				$("#mysCount").html(mysCount);
			}
		}
		else if (race == "Dwarf") {
			if (mysCount >= 1) {
				attrRemain++;
				$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
				mysCount--;
				$("#mysCount").html(mysCount);
			}
		}
		else if (mysCount >= 2){
			attrRemain++;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			mysCount--;
			$("#mysCount").html(mysCount);
		}
	});
	$("#incPer").click(function () {
		if (attrRemain >= 1){
			attrRemain--;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			perCount++;
			$("#perCount").html(perCount);
		}
	});
	$("#decPer").click(function () {
		if (perCount >= 2){
			attrRemain++;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			perCount--;
			$("#perCount").html(perCount);
		}
	});
	$("#incLuc").click(function () {
		if (attrRemain >= 1){
			attrRemain--;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			lukCount++;
			$("#lukCount").html(lukCount);
		}
	});
	$("#decLuc").click(function () {
		if (race == "Orc") {
			if (lukCount >= 1) {
				attrRemain++;
				$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
				lukCount--;
				$("#lukCount").html(lukCount);
			}
		}
		else if (lukCount >= 2){
			attrRemain++;
			$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
			lukCount--;
			$("#lukCount").html(lukCount);
		}
	});
});	