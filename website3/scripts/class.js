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
var skillRemain = 30;
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

var blaCount;
var bluCount;
var onehCount;
var twohCount;
var laCount;
var haCount;
var bloCount;
var dodCount;
var braCount;
var arcCount;
var marCount;
var throCount;
var fitCount;
var divCount;
var covCount;
var pyroCount;
var hydroCount;
var aeroCount;
var geoCount;
var elecCount;
var armoCount;
var wcCount;
var survCount;
var alcCount;
var engCount;
var tactCount;
var trackCount;
var looCount;
var bartCount;
var intimCount;
var pers
var leadCount;
var decCount;
var steCount;
var sidebar_render = function() {
	$("#healthPreview").html("Health: ");
	$("#healthPreview").append(localStorage.Health);
	$("#staminaPreview").html("Stamina: ");
	$("#staminaPreview").append(localStorage.Stamina);
	$("#manaPreview").html("Mana: ");
	$("#manaPreview").append(localStorage.Mana);
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
};
var sidebar_render_2 = function() {
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
	$("#weapon_crafterPreview").html("Weapon Crafter: ");
	$("#weapon_crafterPreview").append(localStorage.weapon_crafter);
	$("#alchemyPreview").html("Alchemy: ");
	$("#alchemyPreview").append(localStorage.alchemy);
	$("#engineeringPreview").html("Engineering: ");
	$("#engineeringPreview").append(localStorage.engineering);
	$("#tacticsPreview").html("Tactics: ");
	$("#tacticsPreview").append(localStorage.tactics);
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
};
var switchtoAtt = function() {
	$("li").children().fadeOut(500);
	$("li").removeClass("inactive");
	$("li").removeClass("active");
	$("#firstq").fadeOut(500);
	$("#raceList").fadeOut(500);
	$("ul#attributeList").delay(500).fadeIn(500);
	$("ul#attributeList li").delay(500).fadeIn(500).children().fadeIn(500);
	$("#counters").delay(500).fadeIn(500);
	$("#totalSkillPnts").hide();
	$("#totalAttrPnts").delay(500).fadeIn(500);
	$("#secondq").delay(500).fadeIn(500);
	$("#as1").delay(500).fadeIn(500);	
	$(".next").css("margin-top", "10px")
	$(".return").fadeOut(500);
};
var switchtoSki = function() {
	save_Attributes();
	$("li").children().fadeOut(500);
	$("li").removeClass("inactive");
	$("li").removeClass("active");
	$("#secondq").fadeOut(500);
	$("ul#attributeList li").fadeOut(500);
	$("#counters").fadeOut(500);
	$("#totalAttrPnts").fadeOut(500);
	$(".attributeContainer").fadeOut(500);
	$("#as1").fadeOut(500);
	$("#skills").children().delay(500).fadeIn(500);
	$("ul#phySkill li").children().delay(500).fadeIn(500);
	$("ul#mysSkill li").children().delay(500).fadeIn(500);
	$("ul#intSkill li").children().delay(500).fadeIn(500);
	$("ul#thiefSkill li").children().delay(500).fadeIn(500);
	$("#thirdq").delay(500).fadeIn(500);
	$("#totalSkillPnts").delay(500).fadeIn(500);
	$("#totalSkillPnts").html("<p>Points remaining: </p>" + skillRemain);
	$(".next").css("margin-top", "35px")
	fade_out_att_page();
	sidebar_render_2();
	fade_in_ski_page();
	nextCounter++;
};
var switchtoRace = function() {
	$(".funText").fadeOut(500);
	$(".next").fadeOut(500);
	$("#firstq").delay(500).fadeIn(500);
	$("ul#raceList").delay(500).fadeIn(500);
};
var save_Attributes = function() {
	localStorage.Strength = strCount;
	localStorage.Agility = agiCount;
	localStorage.Dexterity = dexCount;
	localStorage.Endurance = endCount;
	localStorage.Intelligence = intCount;
	localStorage.Wisdom = wisCount;
	localStorage.Faith = fatCount;
	localStorage.Mysterium = mysCount;
	localStorage.Personality = perCount;
	localStorage.Luck = lukCount;
};
var save_Skills = function() {
	//same configuration as above//
};
var fade_out_att_page = function() {
	$("#attackRatingPreview").delay(500).fadeOut(500);
	$("#physicalDefPreview").delay(500).fadeOut(500);
	$("#mysAttackPreview").delay(500).fadeOut(500);
	$("#mysDefPreview").delay(500).fadeOut(500);
	$("#priorityPntsPreview").delay(500).fadeOut(500);
	$("#actionDeductPreview").delay(500).fadeOut(500);
	$("#trainingAffinityPreview").delay(500).fadeOut(500);
	$("#magicAffinityPreview").delay(500).fadeOut(500);
	$("#critChancePreview").delay(500).fadeOut(500);
	$("#magicCritChancePreview").delay(500).fadeOut(500);
	$("#skillPntsPreview").delay(500).fadeOut(500);
};
var fade_in_ski_page = function() {
	$("#bladePreview").hide();
	$("#bluntPreview").hide();
	$("#one_handedPreview").hide();
	$("#two_handedPreview").hide();
	$("#light_armorPreview").hide();
	$("#heavy_armorPreview").hide();
	$("#blockPreview").hide();
	$("#dodgePreview").hide();
	$("#brawlerPreview").hide();
	$("#archeryPreview").hide();
	$("#marksmanPreview").hide();
	$("#throwingPreview").hide();
	$("#divinationPreview").hide();
	$("#covenantPreview").hide();
	$("#pyromancyPreview").hide();
	$("#hydromancyPreview").hide();
	$("#aeromancyPreview").hide();
	$("#geomancyPreview").hide();
	$("#electromancyPreview").hide();
	$("#fitnessPreview").hide();
	$("#survivalPreview").hide();
	$("#armorerPreview").hide();
	$("#weapon_crafterPreview").hide();
	$("#alchemyPreview").hide();
	$("#engineeringPreview").hide();
	$("#tacticsPreview").hide();
	$("#looterPreview").hide();
	$("#barterPreview").hide();
	$("#intimidationPreview").hide();
	$("#persuasionPreview").hide();
	$("#leadershipPreview").hide();
	$("#deceptionPreview").hide();
	$("#stealthPreview").hide();
	$("#bladePreview").delay(1000).fadeIn(500);
	$("#bluntPreview").delay(1000).fadeIn(500);
	$("#one_handedPreview").delay(1000).fadeIn(500);
	$("#two_handedPreview").delay(1000).fadeIn(500);
	$("#light_armorPreview").delay(1000).fadeIn(500);
	$("#heavy_armorPreview").delay(1000).fadeIn(500);
	$("#blockPreview").delay(1000).fadeIn(500);
	$("#dodgePreview").delay(1000).fadeIn(500);
	$("#brawlerPreview").delay(1000).fadeIn(500);
	$("#archeryPreview").delay(1000).fadeIn(500);
	$("#marksmanPreview").delay(1000).fadeIn(500);
	$("#throwingPreview").delay(1000).fadeIn(500);
	$("#divinationPreview").delay(1000).fadeIn(500);
	$("#covenantPreview").delay(1000).fadeIn(500);
	$("#pyromancyPreview").delay(1000).fadeIn(500);
	$("#hydromancyPreview").delay(1000).fadeIn(500);
	$("#aeromancyPreview").delay(1000).fadeIn(500);
	$("#geomancyPreview").delay(1000).fadeIn(500);
	$("#electromancyPreview").delay(1000).fadeIn(500);
	$("#fitnessPreview").delay(1000).fadeIn(500);
	$("#survivalPreview").delay(1000).fadeIn(500);
	$("#armorerPreview").delay(1000).fadeIn(500);
	$("#weapon_crafterPreview").delay(1000).fadeIn(500);
	$("#alchemyPreview").delay(1000).fadeIn(500);
	$("#engineeringPreview").delay(1000).fadeIn(500);
	$("#tacticsPreview").delay(1000).fadeIn(500);
	$("#looterPreview").delay(1000).fadeIn(500);
	$("#barterPreview").delay(1000).fadeIn(500);
	$("#intimidationPreview").delay(1000).fadeIn(500);
	$("#persuasionPreview").delay(1000).fadeIn(500);
	$("#leadershipPreview").delay(1000).fadeIn(500);
	$("#deceptionPreview").delay(1000).fadeIn(500);
	$("#stealthPreview").delay(1000).fadeIn(500);
};
var calc_basic_stats = function(init, attrLvl, lvl) { /*for health, stamina, and mana */
	return init + 10 * round(attrLvl/lvl) + 10;
};
var calc_attackrating = function(ari, str, lvl) {
	return ari + round((str/lvl) + (str/1000));
};
var calc_defencerating = function(str, lvl) {
	return 100 * (str/lvl);
};
var calc_luckbon = function(luck) {
	return round(.0266667 * luck);
}
var expMod = undefined;
localStorage.setItem("expMod", expMod);
var userName = "";
var nameAccepted = false;
$(document).ready(function () {
	$("#classselector_black").delay(250).fadeOut(500);
	$("#mute_button").click(function() {
        var bool = $("#music").prop("muted");
        $("#music").prop("muted",!bool);
	});
	///////////////////////////////////
	//////////DEVELOPER SKIP///////////
	//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//
	$("#dev_skip").click(function () {
		var bool = $("#music").prop("muted");
        $("#music").prop("muted",!bool);
		userName = "SKIPPED TO SKILLS";
		localStorage.setItem("User_Name", userName);
		$("#userNamePreview").html("Name: ");
		$("#userNamePreview").append(localStorage.User_Name);
		localStorage.setItem("User_Name", userName);
		localStorage.setItem("Health", 69);
		localStorage.setItem("Stamina", 69);
		localStorage.setItem("Mana", 69);
		localStorage.setItem("Race", "Weeaboo");
		switchtoSki();
		$("#greeting").hide();
		$("#preview").delay(500).fadeIn(500);
		sidebar_render();
		sidebar_render_2();
	});	
	//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
	//////////DEVELOPER SKIP///////////
	///////////////////////////////////
	$("#preview").hide();
	$(function() {
		$("form").submit(function() { return false; });
	});
	$("#whatsYourName").hide();
	$(".next").click(function () {
		if (nextCounter == 0) {
			$("#whatsYourName").fadeIn(1000);
			nextCounter++;
		} else if (nextCounter == 1) {
			userName = $("#whatsYourName").val();
			if (userName.length == 0) {
				alert("Come on now, ye do have a name, don't ye?");
			} else {
				var nameAccepted = confirm("So, yer name is " + userName + "?");
				if (nameAccepted == true) {
					/////////////////////////////
					/////////////////////////////
					//SETTING UP CHARACTER DATA//
					/////////////////////////////
					/////////////////////////////

					// Putting the objects into storage
					localStorage.setItem("User_Name", userName);
					localStorage.setItem("Health", 50);
					localStorage.setItem("Stamina", 50);
					localStorage.setItem("Mana", 50);	
					localStorage.setItem("Gender", undefined);
					localStorage.setItem("Race", undefined);
					localStorage.setItem("Eye_color", undefined);
					localStorage.setItem("Hair_color", undefined);
					localStorage.setItem("Strength", 1);
					localStorage.setItem("Agility", 1);	
					localStorage.setItem("Dexterity", 1);
					localStorage.setItem("Wisdom", 1)
					localStorage.setItem("Faith", 1);
					localStorage.setItem("Endurance", 1);
					localStorage.setItem("Intelligence", 1);
					localStorage.setItem("Luck", 1);
					localStorage.setItem("Mysterium", 1);	
					localStorage.setItem("Personality", 1);
					localStorage.setItem("intimidation", 1);
					localStorage.setItem("perception", 1);
					localStorage.setItem("persuasion", 1);
					localStorage.setItem("pickpocket", 1);	
					localStorage.setItem("stealth", 1);
					localStorage.setItem("survival", 1);
					localStorage.setItem("blade", 1);
					localStorage.setItem("blunt", 1);
					localStorage.setItem("one_handed", 1);	
					localStorage.setItem("two_handed", 1);
					localStorage.setItem("light_armor", 1);
					localStorage.setItem("heavy_armor", 1);
					localStorage.setItem("block", 1);
					localStorage.setItem("dodge", 1);
					localStorage.setItem("brawler", 1);	
					localStorage.setItem("archery", 1);
					localStorage.setItem("marksman", 1);
					localStorage.setItem("throwing", 1);
					localStorage.setItem("divination", 1);
					localStorage.setItem("restoration", 0);
					localStorage.setItem("covenant", 1);	
					localStorage.setItem("pyromancy", 1);
					localStorage.setItem("hydromancy", 1);
					localStorage.setItem("aeromancy", 1);
					localStorage.setItem("geomancy", 1);
					localStorage.setItem("electromancy", 1);
					localStorage.setItem("chronomancy", 0);	
					localStorage.setItem("skeptomancy", 0);
					localStorage.setItem("necromancy", 0);
					localStorage.setItem("conjuration", 0);
					localStorage.setItem("fysomancy", 0);
					localStorage.setItem("arcanomancy", 0);
					localStorage.setItem("fitness", 1);	
					localStorage.setItem("armorer", 1);
					localStorage.setItem("weapon_crafter", 1);
					localStorage.setItem("alchemy", 1);
					localStorage.setItem("engineering", 1);	
					localStorage.setItem("tactics", 1);
					localStorage.setItem("tracking", 1);
					localStorage.setItem("looter", 1);
					localStorage.setItem("barter", 1);
					localStorage.setItem("leadership", 1);	
					localStorage.setItem("deception", 1);
					localStorage.setItem("Attack_rating", 1);
					localStorage.setItem("Physical_defense", 1);
					localStorage.setItem("Mystic_attack", 1);
					localStorage.setItem("Mystic_defence", 1);
					localStorage.setItem("Priority_Points", 1);
					localStorage.setItem("Action_deduction", 1);
					localStorage.setItem("Training_affinity", 1);
					localStorage.setItem("Magic_affinity", 1);
					localStorage.setItem("Critical_chance", 1);
					localStorage.setItem("Magic_critical_chance", 1);
					localStorage.setItem("Skill_points", 1);
					localStorage.setItem("Main_hand", undefined);
					localStorage.setItem("Off_hand", undefined);
					localStorage.setItem("Gold",0);	
					$("#greeting").fadeOut(1000);
					$("#whatsYourName").fadeOut(1000);
					var statement1 = "<p class=\"funText\">Well then " + userName + ", a world in turmoil rests at your feet. Will you save it, or shall you destroy it?</p>";
					$(statement1).hide().delay(1000).appendTo(".story_begin_part").fadeIn(1000);
					nextCounter++;
				}
			}
		} else if (nextCounter == 2) {
			$(statement1).fadeOut(1000);
			var statement2 = "<p class=\"funText\">But before you are cast into this world, tell me about yourself.</p>";
			$(statement2).hide().appendTo(".story_begin_part").fadeIn(1000);
			nextCounter++;
		} else if (nextCounter == 3) {
			switchtoRace();
			$("#preview").delay(500).fadeIn(1000);
			$("#userNamePreview").html("Name: ");
			$("#userNamePreview").append(localStorage.User_Name);			
			nextCounter++;
		} else if (nextCounter == 4) {
			switchtoSki();
			nextCounter++
		}
	});
	//$("#userNamePreview").html("Name: ");
	//$("#userNamePreview").append(localStorage.User_Name);
	$("#firstq").hide();
	$("#attributeList").hide();
	$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
	$("#totalAttrPnts").hide();
	$(".return").hide();
	$("#as1").hide();
	$("#secondq").hide();
	$("#thirdq").hide();
	$("#counters").hide();
	$("#skills").children().hide();
	$("ul#attributeList li").hide();
	$(".unlockable").hide();
	$("ul#raceList li").children().hide();
	$("ul#raceList").hide();	
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
	$("ul#phySkill li").click(function () {
		if ($(this).hasClass("inactive")) {
			$(this).removeClass("inactive");
		}
		$(this).not("#head1").addClass("active");
		$(this).siblings().removeClass("active").addClass("inactive");
		$(this).parent().siblings().children().removeClass("active").addClass("inactive");
	});
	$("ul#mysSkill li").click(function () {
		if ($(this).hasClass("inactive")) {
			$(this).removeClass("inactive");
		}
		$(this).not("#head2").addClass("active");
		$(this).siblings().removeClass("active").addClass("inactive");
		$(this).parent().siblings().children().removeClass("active").addClass("inactive");
	});
	$("ul#intSkill li").click(function () {
		if ($(this).hasClass("inactive")) {
			$(this).removeClass("inactive");
		}
		$(this).not("#head3").addClass("active");
		$(this).siblings().removeClass("active").addClass("inactive");
		$(this).parent().siblings().children().removeClass("active").addClass("inactive");
	});
	$("ul#thiefSkill li").click(function () {
		if ($(this).hasClass("inactive")) {
			$(this).removeClass("inactive");
		}
		$(this).not("#head4").addClass("active");
		$(this).siblings().removeClass("active").addClass("inactive");
		$(this).parent().siblings().children().removeClass("active").addClass("inactive");
	});
	$("#selectHuman").click(function () {
		var acceptHuman = confirm("Do you truly wish to walk the sunken path as a human?");
		if (acceptHuman == true) {
			localStorage.Race = "Human";
			race = "Human";
			console.log(race);
			localStorage.Health = 50;
			localStorage.Mana = 50;
			localStorage.Stamina = 50;
			expMod = {
				Physical: 5,
				Mystical: 5,
				Intellectual: 5,
				Other: 5,
			};
			sidebar_render();			
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
			race = "Elf";
			console.log(race);
			localStorage.Health = 40;
			localStorage.Mana = 75;
			localStorage.Stamina = 40;
			expMod = {
				Physical: 0,
				Mystical: 15,
				Intellectual: 5,
				Other: 0,
			};
			sidebar_render();				
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
			race = "Dwarf";
			console.log(race);
			localStorage.Health = 60;
			localStorage.Mana = 35;
			localStorage.Stamina = 60;
			expMod = {
				Physical: 10,
				Mystical: 0,
				Intellectual: 10,
				Other: 0,
			};
			sidebar_render();		
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
			race = "Orc";
			console.log(race);
			localStorage.Health = 75;
			localStorage.Mana = 15;
			localStorage.Stamina = 60;
			expMod = {
				Physical: 20,
				Mystical: 0,
				Intellectual: 0,
				Other: 0,
			};
			sidebar_render();
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
		switch (this.id) {
			case "incStr": 
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					strCount++;
					$("#strCount").html(strCount);
				}
				break;
			case "incAgl":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					agiCount++;
					$("#agiCount").html(agiCount);
				}
				break;
			case "incDex": 
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					dexCount++;
					$("#dexCount").html(dexCount);
				}
				break;
			case "incEnd": 
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					endCount++;
					$("#endCount").html(endCount);
				}
				break;
			case "incInt": 
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					intCount++;
					$("#intCount").html(intCount);
				}
				break;
			case "incWis": 
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					wisCount++;
					$("#wisCount").html(wisCount);
				}
				break;
			case "incFat": 
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					fatCount++;
					$("#fatCount").html(fatCount);
				}
				break;
			case "incMys": 
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					mysCount++;
					$("#mysCount").html(mysCount);
				}
				break;
			case "incPer": 
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					perCount++;
					$("#perCount").html(perCount);
				}
				break;
			case "incLuc": 
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					lukCount++;
					$("#lukCount").html(lukCount);
				}
				break;
		}
	});
	$(".decAtt").click(function () {
		$(".next").fadeOut(500);
		switch (this.id) {
			case "decStr": 
				switch (localStorage.Race) {
					case "Elf": 
						if (strCount >= 1) {
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							strCount--;
							$("#strCount").html(strCount);
						}
						break;
					case "Dwarf":
						if (strCount >= 3) {
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							strCount--;
							$("#strCount").html(strCount);
						}
						break;
					case "Orc":
						if (strCount >= 4) {
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							strCount--;
							$("#strCount").html(strCount);
						}
						break;
					default:
						if (strCount >= 2) {
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							strCount--;
							$("#strCount").html(strCount);
						}
						break;
				}
				break;
			case "decAgl":
				switch (localStorage.Race) {
					case "Dwarf":
						if (agiCount >= 1) {
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							agiCount--;
							$("#agiCount").html(agiCount);
						}
						break;
					default:
						if (agiCount >= 2) {
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							agiCount--;
							$("#agiCount").html(agiCount);
						}
						break;
				}
				break;
			case "decDex":
				switch (localStorage.Race) {
					case "Elf": 
						if (dexCount >= 3) {
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							dexCount--;
							$("#dexCount").html(dexCount);
						}
						break;
					default:
						if (dexCount >= 2) {
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							dexCount--;
							$("#dexCount").html(dexCount);
						}
						break;
				}
				break;
			case "decEnd":
				switch (localStorage.Race) {
					case "Elf":
						if (endCount >= 1) {
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							endCount--;
							$("#endCount").html(endCount);
						}
						break;
					case "Orc":
						if (endCount >= 3) {
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							endCount--;
							$("#endCount").html(endCount);
						}
						break;
					default:
						if (endCount >= 2){
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							endCount--;
							$("#endCount").html(endCount);
						}
						break;
				}
				break;
			case "decInt":
				switch (localStorage.Race) {
					case "Dwarf":
						if (intCount >= 3) {
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							intCount--;
							$("#intCount").html(intCount);
						}
						break;
					case "Orc":
						if (intCount >= 1) {
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							intCount--;
							$("#intCount").html(intCount);
						}
						break;
					default:
						if (intCount >= 2){
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							intCount--;
							$("#intCount").html(intCount);
						}
						break;
				}
				break;
			case "decWis":
				switch (localStorage.Race) {
					case "Orc":
						if (wisCount >= 1) {
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							wisCount--;
							$("#wisCount").html(wisCount);
						}
						break;
					default:
						if (wisCount >= 2){
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							wisCount--;
							$("#wisCount").html(wisCount);
						}
						break;
				}
				break;
			case "decFat":
				if (fatCount >= 2){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					fatCount--;
					$("#fatCount").html(fatCount);
				}
				break;
			case "decMys":
				switch (localStorage.Race) {
					case "Elf":
						if (mysCount >= 3) {
						attrRemain++;
						$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
						mysCount--;
						$("#mysCount").html(mysCount);
					}
						break;
					case "Dwarf":
						if (mysCount >= 1) {
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							mysCount--;
							$("#mysCount").html(mysCount);
						}
						break;
					default:
						if (mysCount >= 2){
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							mysCount--;
							$("#mysCount").html(mysCount);
						}
						break;
				}
				break;
			case "decPer":
				if (perCount >= 2){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					perCount--;
					$("#perCount").html(perCount);
				}
				break;
			case "decLuc":
				switch (localStorage.Race) {
					case "Orc":
						if (lukCount >= 1) {
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							lukCount--;
							$("#lukCount").html(lukCount);
						}
						break;
					default:
						if (lukCount >= 2){
							attrRemain++;
							$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
							lukCount--;
							$("#lukCount").html(lukCount);
						}
						break;
				}
				break;
		}
	});
	$(".incSki").click(function () {
		switch (this.id) {
			case "incBla":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					blaCount++;
					$("#bladePreview").html("Blade: ");
					$("#bladePreview").append(blaCount);
				}
				break;
			case "incBlu":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					bluCount++;
					$("#bluntPreview").html("Blunt: ");
					$("#bluntPreview").append(bluCount);
				}
				break;
			case "inc1h":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					onehCount++;
					$("#one_handedPreview").html("One Handed: ");
					$("#one_handedPreview").append(onehCount);
				}
				break;
			case "inc2h":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					twohCount++;
					$("#two_handedPreview").html("Two Handed: ");
					$("#two_handedPreview").append(twohCount);
				}
				break;
			case "incLA":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					laCount++;
					$("#light_armorPreview").html("Light Armor: ");
					$("#light_armorPreview").append(laCount);
				}
				break;
			case "incHA":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					haCount++;
					$("#heavy_armorPreview").html("Heavy Armor: ");
					$("#heavy_armorPreview").append(haCount);
				}
				break;
			case "incBlo":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					bloCount++;
					$("#blockPreview").html("Block: ");
					$("#blockPreview").append(bloCount);
				}
				break;
			case "incDod":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					dodCount++;
					$("#dodgePreview").html("Dodge: ");
					$("#dodgePreview").append(dodCount);
				}
				break;
			case "incBra":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					braCount++;
					$("#brawlerPreview").html("Brawler: ");
					$("#brawlerPreview").append(braCount);
				}
				break;
			case "incArc":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					arcCount++;
					$("#archeryPreview").html("Archery: ");
					$("#archeryPreview").append(arcCount);
				}
				break;
			case "incMar":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					marCount++;
					$("#marksmanPreview").html("Marksman: ");
					$("#marksmanPreview").append(marCount);
				}
				break;
			case "incThro":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					throCount++;
					$("#throwingPreview").html("Throwing: ");
					$("#throwingPreview").append(throCount);
				}
				break;
			case "incFit":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					fitCount++;
					$("#fitnessPreview").html("Fitness: ");
					$("#fitnessPreview").append(fitCount);
				}
				break;
			case "incDiv":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					divCount++;
					$("#divinationPreview").html("Divination: ");
					$("#divinationPreview").append(divCount);
				}
				break;
			case "incCov":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					covCount++;
					$("#covenantPreview").html("Covenant: ");
					$("#covenantPreview").append(covCount);
				}
				break;
			case "incPyro":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					pyroCount++;
					$("#pyromancyPreview").html("Pyromancy: ");
					$("#pyromancyPreview").append(pyroCount);
				}
				break;
			case "incHydro":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					hydroCount++;
					$("#hydromancyPreview").html("Hydromancy: ");
					$("#hydromancyPreview").append(hydroCount);
				}
				break;
			case "incAero":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					aeroCount++;
					$("#aeromancyPreview").html("Aeromancy: ");
					$("#aeromancyPreview").append(aeroCount);
				}
				break;
			case "incGeo":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					geoCount++;
					$("#geomancyPreview").html("Geomancy: ");
					$("#geomancyPreview").append(geoCount);
				}
				break;
			case "incElec":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					elecCount++;
					$("#electromancyPreview").html("Electromancy: ");
					$("#electromancyPreview").append(elecCount);
				}
				break;
			case "incArmo":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					armoCount++;
					$("#armorerPreview").html("Armorer: ");
					$("#armorerPreview").append(armoCount);
				}
				break;
			case "incWC":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					wcCount++;
					$("#weapon_crafterPreview").html("Weapon Crafter: ");
					$("#weapon_crafterPreview").append(wcCount);
				}
				break;
			case "incSurv":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					survCount++;
					$("#survivalPreview").html("Survival: ");
					$("#survivalPreview").append(survCount);
				}
				break;
			case "incAlc":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					alcCount++;
					$("#alchemyPreview").html("Alchemy: ");
					$("#alchemyPreview").append(alcCount);
				}
				break;
			case "incEng":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					engCount++;
					$("#engineeringPreview").html("Engineering: ");
					$("#engineeringPreview").append(engCount);
				}
				break;
			case "incTact":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					tactCount++;
					$("#tacticsPreview").html("Tactics: ");
					$("#tacticsPreview").append(tactCount);
				}
				break;
			case "incTrack":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					trackCount++;
					$("#trackingPreview").html("Tracking: ");
					$("#trackingPreview").append(trackCount);
				}
				break;
			case "incLoo":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					looCount++;
					$("#looterPreview").html("Looter: ");
					$("#looterPreview").append(looCount);
				}
				break;
			case "incBart":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					bartCount++;
					$("#barterPreview").html("Barter: ");
					$("#barterPreview").append(bartCount);
				}
				break;
			case "incIntim":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					intimCount++;
					$("#intimidationPreview").html("Intimidation: ");
					$("#intimidationPreview").append(intimCount);
				}
				break;
			case "incPers":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					persCount++;
					$("#persuasionPreview").html("Persuasion: ");
					$("#persuasionPreview").append(persCount);
				}
				break;
			case "incLead":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					leadCount++;
					$("#leadershipPreview").html("Leadership: ");
					$("#leadershipPreview").append(leadCount);
				}
				break;
			case "incDec":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					decCount++;
					$("#deceptionPreview").html("Deception: ");
					$("#deceptionPreview").append(decCount);
				}
				break;
			case "incSte":
				if (attrRemain >= 1){
					attrRemain--;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					steCount++;
					$("#stealthPreview").html("Stealth: ");
					$("#stealthPreview").append(steCount);
				}
				break;
		}
	});
	$(".decSki").click(function () {
		switch (this.id) {
			case "decBla":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					blaCount--;
					$("#bladePreview").html("Blade: ");
					$("#bladePreview").append(blaCount);
				}
				break;
			case "decBlu":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					bluCount--;
					$("#bluntPreview").html("Blunt: ");
					$("#bluntPreview").append(bluCount);
				}
				break;
			case "dec1h":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					onehCount--;
					$("#one_handedPreview").html("One Handed: ");
					$("#one_handedPreview").append(onehCount);
				}
				break;
			case "dec2h":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					twohCount--;
					$("#two_handedPreview").html("Two Handed: ");
					$("#two_handedPreview").append(twohCount);
				}
				break;
			case "decLA":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					laCount--;
					$("#light_armorPreview").html("Light Armor: ");
					$("#light_armorPreview").append(laCount);
				}
				break;
			case "decHA":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					haCount--;
					$("#heavy_armorPreview").html("Heavy Armor: ");
					$("#heavy_armorPreview").append(haCount);
				}
				break;
			case "decBlo":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					bloCount--;
					$("#blockPreview").html("Block: ");
					$("#blockPreview").append(bloCount);
				}
				break;
			case "decDod":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					dodCount--;
					$("#dodgePreview").html("Dodge: ");
					$("#dodgePreview").append(dodCount);
				}
				break;
			case "decBra":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					braCount--;
					$("#brawlerPreview").html("Brawler: ");
					$("#brawlerPreview").append(braCount);
				}
				break;
			case "decArc":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					arcCount--;
					$("#archeryPreview").html("Archery: ");
					$("#archeryPreview").append(arcCount);
				}
				break;
			case "decMar":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					marCount--;
					$("#marksmanPreview").html("Marksman: ");
					$("#marksmanPreview").append(marCount);
				}
				break;
			case "decThro":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					throCount--;
					$("#throwingPreview").html("Throwing: ");
					$("#throwingPreview").append(throCount);
				}
				break;
			case "decFit":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					fitCount--;
					$("#fitnessPreview").html("Fitness: ");
					$("#fitnessPreview").append(fitCount);
				}
				break;
			case "decDiv":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					divCount--;
					$("#divinationPreview").html("Divination: ");
					$("#divinationPreview").append(divCount);
				}
				break;
			case "decCov":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					covCount--;
					$("#covenantPreview").html("Covenant: ");
					$("#covenantPreview").append(covCount);
				}
				break;
			case "decPyro":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					pyroCount--;
					$("#pyromancyPreview").html("Pyromancy: ");
					$("#pyromancyPreview").append(pyroCount);
				}
				break;
			case "decHydro":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					hydroCount--;
					$("#hydromancyPreview").html("Hydromancy: ");
					$("#hydromancyPreview").append(hydroCount);
				}
				break;
			case "decAero":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					aeroCount--;
					$("#aeromancyPreview").html("Aeromancy: ");
					$("#aeromancyPreview").append(aeroCount);
				}
				break;
			case "decGeo":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					geoCount--;
					$("#geomancyPreview").html("Geomancy: ");
					$("#geomancyPreview").append(geoCount);
				}
				break;
			case "decElec":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					elecCount--;
					$("#electromancyPreview").html("Electromancy: ");
					$("#electromancyPreview").append(elecCount);
				}
				break;
			case "decArmo":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					armoCount--;
					$("#armorerPreview").html("Armorer: ");
					$("#armorerPreview").append(armoCount);
				}
				break;
			case "decWC":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					wcCount--;
					$("#weapon_crafterPreview").html("Weapon Crafter: ");
					$("#weapon_crafterPreview").append(wcCount);
				}
				break;
			case "decSurv":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					survCount--;
					$("#survivalPreview").html("Survival: ");
					$("#survivalPreview").append(survCount);
				}
				break;
			case "decAlc":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					alcCount--;
					$("#alchemyPreview").html("Alchemy: ");
					$("#alchemyPreview").append(alcCount);
				}
				break;
			case "decEng":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					engCount--;
					$("#engineeringPreview").html("Engineering: ");
					$("#engineeringPreview").append(engCount);
				}
				break;
			case "decTact":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					tactCount--;
					$("#tacticsPreview").html("Tactics: ");
					$("#tacticsPreview").append(tactCount);
				}
				break;
			case "decTrack":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					trackCount--;
					$("#trackingPreview").html("Tracking: ");
					$("#trackingPreview").append(trackCount);
				}
				break;
			case "decLoo":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					looCount--;
					$("#looterPreview").html("Looter: ");
					$("#looterPreview").append(looCount);
				}
				break;
			case "decBart":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					bartCount--;
					$("#barterPreview").html("Barter: ");
					$("#barterPreview").append(bartCount);
				}
				break;
			case "decIntim":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					intimCount--;
					$("#intimidationPreview").html("Intimidation: ");
					$("#intimidationPreview").append(intimCount);
				}
				break;
			case "decPers":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					persCount--;
					$("#persuasionPreview").html("Persuasion: ");
					$("#persuasionPreview").append(persCount);
				}
				break;
			case "decLead":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					leadCount--;
					$("#leadershipPreview").html("Leadership: ");
					$("#leadershipPreview").append(leadCount);
				}
				break;
			case "decDec":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					decCount--;
					$("#deceptionPreview").html("Deception: ");
					$("#deceptionPreview").append(decCount);
				}
				break;
			case "decSte":
				if (attrRemain >= 1){
					attrRemain++;
					$("#totalAttrPnts").html("<p>Points remaining: </p>" + attrRemain);
					steCount--;
					$("#stealthPreview").html("Stealth: ");
					$("#stealthPreview").append(steCount);
				}
				break;
		}
	});
		/*		

		These are currently being used as a reference point...
		
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
