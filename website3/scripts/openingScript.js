var nextCounter = 0;
var userName = "";
var nameAccepted = false;
$(document).ready(function () {
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
					localStorage.setItem("weapon_master", 1);
					localStorage.setItem("alchemy", 1);
					localStorage.setItem("engineering", 1);	
					localStorage.setItem("tactics", 1);
					localStorage.setItem("mapping", 1);
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
					localStorage.setItem("Gold", 1);	
					$("#greeting").fadeOut(1000);
					$("#whatsYourName").fadeOut(1000);
					var statement1 = "<p>Well then " + userName + ", a world in turmoil rests at your feet. Will you save it, or shall you destroy it?</p>";
					$(statement1).hide().delay(1000).appendTo("body").fadeIn(1000);
					nextCounter++;
				}
			}
		} else if (nextCounter == 2) {
			$(statement1).fadeOut(1000);
			var statement2 = "<p>But before you are cast into this world, tell me about yourself.</p>";
			$(statement2).hide().appendTo("body").fadeIn(1000);
			nextCounter++;
		} else if (nextCounter == 3) {
			location.href='../storypages/classselector.html'
		}
	});
});
