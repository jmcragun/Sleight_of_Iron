localStorage.getItem('Strength');
localStorage.getItem('Agility');
localStorage.getItem('Dexterity');
localStorage.getItem('Faith');
localStorage.getItem('Endurance');
localStorage.getItem('Intelligence');
localStorage.getItem('Luck');
localStorage.getItem('Mysterium');
localStorage.getItem('Personality');
localStorage.getItem('User_Name');
var race = localStorage.Race;
var attrRemain = 25;
var nextCounter = 0;
var strCount; 
var agiCount;
var dexCount; 
var endCount;
var intCount;
var wisCount;
var fatCount;
var mysCount;
var perCount;
var lukCount;
var switchtoAtt = function() {
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
};
var switchtoSki = function() {
	$("li").children().fadeOut(500);
	$("li").removeClass("inactive");
	$("li").removeClass("active");
	$("#secondq").fadeOut(500);
	$("ul#attributeList li").fadeOut(500);
	$("#counters").fadeOut(500);
	$("#totalAttrPnts").fadeOut(500);
	$(".attributeContainer").fadeOut(500);
	$("#as1").fadeOut(500);
	$("ul#skillList li").delay(500).fadeIn(500);
	$("#thirdq").delay(500).fadeIn(500);
	nextCounter++;
};
$(document).ready(function () {
	$("#userNamePreview").html("Name: ");
	$("#userNamePreview").append(localStorage.User_Name);
	$("#firstq").hide().delay(500).fadeIn(1000);
	$("#attributeList").hide().delay(500).fadeIn(1000);
	$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
	$("#totalAttrPnts").hide();
	$(".return").hide();
	$(".next").hide();
	$("#as1").hide();
	$("#secondq").hide();
	$("#thirdq").hide();
	$("#counters").hide();
	$("ul#skillList li").hide();
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
			console.log(race);
			localStorage.Health = 50;
			localStorage.Mana = 50;
			localStorage.Stamina = 50;
			$("#healthPreview").html("Health: ");
			$("#healthPreview").append(localStorage.Health);
			$("#manaPreview").html("Mana: ");
			$("#manaPreview").append(localStorage.Mana);
			$("#staminaPreview").html("Stamina: ");
			$("#staminaPreview").append(localStorage.Stamina);
			$("#racePreview").html("Race: ");
			$("#racePreview").append(localStorage.Race);			
			$("#attackRatingPreview").html("Attack Rating: ");
			$("#attackRatingPreview").append(localStorage.Attack_rating);				
			$("#physicalDefPreview").html("Physical Defence: ");
			$("#physicalDefPreview").append(localStorage.Physical_defense);
			$("#mysAttackPreview").html("Mystic Attack: ");
			$("#mysAttackPreview").append(localStorage.Mystic_attack);
			$("#mysDefPreview").html("Mystic Defence: ");
			$("#mysDefPreview").append(localStorage.Mystic_defence);
			$("#priorityPntsPreview").html("Priority Points: ");
			$("#priorityPntsPreview").append(localStorage.Priority_Points);
			$("#actionDeductPreview").html("Action Deduction: ");
			$("#actionDeductPreview").append(localStorage.Action_deduction);
			$("#trainingAffinityPreview").html("Training Affinity: ");
			$("#trainingAffinityPreview").append(localStorage.Training_affinity);
			$("#magicAffinityPreview").html("Magic Affinity: ");
			$("#magicAffinityPreview").append(localStorage.Magic_affinity);
			$("#critChancePreview").html("Critical Chance: ");
			$("#critChancePreview").append(localStorage.Critical_chance);
			$("#magicCritChancePreview").html("Magic Critical Chance: ");
			$("#magicCritChancePreview").append(localStorage.Magic_critical_chance);
			$("#skillPntsPreview").html("Skill Points: ");
			$("#skillPntsPreview").append(localStorage.Skill_points);			
			strCount = 1;
			agiCount = 1;
			dexCount = 1;
			endCount = 1;
			intCount = 1;
			wisCount = 1;
			fatCount = 1;
			mysCount = 1;
			perCount = 1;
			lukCount = 1;
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
			switchtoAtt();
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
			console.log(race);
			localStorage.Health = 40;
			localStorage.Mana = 75;
			localStorage.Stamina = 40;
			$("#healthPreview").html("Health: ");
			$("#healthPreview").append(localStorage.Health);
			$("#manaPreview").html("Mana: ");
			$("#manaPreview").append(localStorage.Mana);
			$("#staminaPreview").html("Stamina: ");
			$("#staminaPreview").append(localStorage.Stamina);
			$("#racePreview").html("Race: ");
			$("#racePreview").append(localStorage.Race);				
			strCount = 0;
			agiCount = 1;
			dexCount = 2;
			endCount = 0;
			intCount = 1;
			wisCount = 1;
			fatCount = 1;
			mysCount = 2;
			perCount = 1;
			lukCount = 1;
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
			switchtoAtt();
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
			console.log(race);
			localStorage.Health = 60;
			localStorage.Mana = 35;
			localStorage.Stamina = 60;
			$("#healthPreview").html("Health: ");
			$("#healthPreview").append(localStorage.Health);
			$("#manaPreview").html("Mana: ");
			$("#manaPreview").append(localStorage.Mana);
			$("#staminaPreview").html("Stamina: ");
			$("#staminaPreview").append(localStorage.Stamina);
			$("#racePreview").html("Race: ");
			$("#racePreview").append(localStorage.Race);		
			strCount = 2;
			agiCount = 0;
			dexCount = 1;
			endCount = 1;
			intCount = 2;
			wisCount = 1;
			fatCount = 1;
			mysCount = 0;
			perCount = 1;
			lukCount = 1;
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
			switchtoAtt();
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
			console.log(race);
			localStorage.Health = 75;
			localStorage.Mana = 15;
			localStorage.Stamina = 60;
			$("#healthPreview").html("Health: ");
			$("#healthPreview").append(localStorage.Health);
			$("#manaPreview").html("Mana: ");
			$("#manaPreview").append(localStorage.Mana);
			$("#staminaPreview").html("Stamina: ");
			$("#staminaPreview").append(localStorage.Stamina);
			$("#racePreview").html("Race: ");
			$("#racePreview").append(localStorage.Race);						
			strCount = 3;
			agiCount = 1;
			dexCount = 1;
			endCount = 2;
			intCount = 0;
			wisCount = 0;
			fatCount = 1;
			mysCount = 1;
			perCount = 1;
			lukCount = 0;			
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
			switchtoAtt();
			return false;
		}
	});
	$(".incAtt").click(function () {
		if (attrRemain == 1) {
			$(".next").fadeIn(500);
		} 
	});
	$(".decAtt").click(function () {
		$(".next").fadeOut(500);
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
	$(".next").click(function () {
		if (nextCounter == 0) {
			switchtoSki();
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

		/*		

		These will be used once the player submits their values for them
		
		$("#bladePreview").html("Blade: ");
		$("#bladePreview").append(localStorage.blade);
		$("#bluntPreview").html("Blunt: ");
		$("#bluntPreview").append(localStorage.blunt);
		$("#one_handedPreview").html("One Handed: ");
		$("#one_handedPreview").append(localStorage.one_handed);
		$("#two_handedPreview").html("Two Handed: ");
		$("#two_handedPreview").append(localStorage.two_handed);
		$("#light_armorPreview").html("Light Armor: ");
		$("#light_armorPreview").append(localStorage.light_armor);
		$("#heavy_armorPreview").html("Heavy Armor: ");
		$("#heavy_armorPreview").append(localStorage.heavy_armor);
		$("#blockPreview").html("Block: ");
		$("#blockPreview").append(localStorage.block);
		$("#dodgePreview").html("Dodge: ");
		$("#dodgePreview").append(localStorage.dodge);
		$("#brawlerPreview").html("Brawler: ");
		$("#brawlerPreview").append(localStorage.brawler);
		$("#archeryPreview").html("Archery: ");
		$("#archeryPreview").append(localStorage.archery);
		$("#marksmanPreview").html("Marksman: ");
		$("#marksmanPreview").append(localStorage.marksman);
		$("#throwingPreview").html("Throwing: ");
		$("#throwingPreview").append(localStorage.throwing);
		$("#divinationPreview").html("Divination: ");
		$("#divinationPreview").append(localStorage.divination);
		$("#covenantPreview").html("Covenant: ");
		$("#covenantPreview").append(localStorage.covenant);
		$("#pyromancyPreview").html("Pyromancy: ");
		$("#pyromancyPreview").append(localStorage.pyromancy);
		$("#hydromancyPreview").html("Hydromancy: ");
		$("#hydromancyPreview").append(localStorage.hydromancy);
		$("#aeromancyPreview").html("Aeromancy: ");
		$("#aeromancyPreview").append(localStorage.aeromancy);
		$("#geomancyPreview").html("Geomancy: ");
		$("#geomancyPreview").append(localStorage.geomancy);
		$("#electromancyPreview").html("Electromancy: ");
		$("#electromancyPreview").append(localStorage.electromancy);
		$("#fitnessPreview").html("Fitness: ");
		$("#fitnessPreview").append(localStorage.fitness);
		$("#survivalPreview").html("Survival: ");
		$("#survivalPreview").append(localStorage.survival);
		$("#armorerPreview").html("Armorer: ");
		$("#armorerPreview").append(localStorage.armorer);
		$("#weapon_masterPreview").html("Weapon Master: ");
		$("#weapon_masterPreview").append(localStorage.weapon_master);
		$("#alchemyPreview").html("Alchemy: ");
		$("#alchemyPreview").append(localStorage.alchemy);
		$("#engineeringPreview").html("Engineering: ");
		$("#engineeringPreview").append(localStorage.engineering);
		$("#tacticsPreview").html("Tactics: ");
		$("#tacticsPreview").append(localStorage.tactics);
		$("#mappingPreview").html("Mapping: ");
		$("#mappingPreview").append(localStorage.mapping);
		$("#trackingPreview").html("Tracking: ");
		$("#trackingPreview").append(localStorage.tracking);
		$("#looterPreview").html("Looter: ");
		$("#looterPreview").append(localStorage.looter);
		$("#barterPreview").html("Barter: ");
		$("#barterPreview").append(localStorage.barter);
		$("#intimidationPreview").html("Intimidation: ");
		$("#intimidationPreview").append(localStorage.intimidation);
		$("#persuasionPreview").html("Persuasion: ");
		$("#persuasionPreview").append(localStorage.persuasion);
		$("#leadershipPreview").html("Leadership: ");
		$("#leadershipPreview").append(localStorage.leadership);
		$("#deceptionPreview").html("Deception: ");
		$("#deceptionPreview").append(localStorage.deception);
		$("#stealthPreview").html("Stealth: ");
		$("#stealthPreview").append(localStorage.stealth);	
		
		*/
});	