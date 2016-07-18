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
					localStorage.setItem("liar", 0);
					localStorage.setItem("intimidation", 0);
					localStorage.setItem("perception", 0);
					localStorage.setItem("persuasion", 0);
					localStorage.setItem("sleight_of_hand", 0);	
					localStorage.setItem("stealth", 0);
					localStorage.setItem("survival", 0);
					localStorage.setItem("blade", 0);
					localStorage.setItem("blunt", 0);
					localStorage.setItem("one_handed", 0);	
					localStorage.setItem("two_handed", 0);
					localStorage.setItem("light_armor", 0);
					localStorage.setItem("heavy_armor", 0);
					localStorage.setItem("block", 0);
					localStorage.setItem("dodge", 0);
					localStorage.setItem("brawler", 0);	
					localStorage.setItem("archery", 0);
					localStorage.setItem("marksman", 0);
					localStorage.setItem("throwing", 0);
					localStorage.setItem("divination", 0);
					localStorage.setItem("restoration", 0);
					localStorage.setItem("covenant", 0);	
					localStorage.setItem("pyromancy", 0);
					localStorage.setItem("hydromancy", 0);
					localStorage.setItem("aeromancy", 0);
					localStorage.setItem("geomancy", 0);
					localStorage.setItem("electromancy", 0);
					localStorage.setItem("chronomancy", 0);	
					localStorage.setItem("skeptomancy", 0);
					localStorage.setItem("necromancy", 0);
					localStorage.setItem("conjuration", 0);
					localStorage.setItem("fysomancy", 0);
					localStorage.setItem("arcanomancy", 0);
					localStorage.setItem("climbing", 0);	
					localStorage.setItem("jumping", 0);
					localStorage.setItem("swimming", 0);
					localStorage.setItem("armorer", 0);
					localStorage.setItem("weapon_master", 0);
					localStorage.setItem("alchemy", 0);
					localStorage.setItem("engineering", 0);	
					localStorage.setItem("tactics", 0);
					localStorage.setItem("mapping", 0);
					localStorage.setItem("tracking", 0);
					localStorage.setItem("looter", 0);
					localStorage.setItem("barter", 0);
					localStorage.setItem("leadership", 0);	
					localStorage.setItem("actor", 0);
					localStorage.setItem("Main_hand", undefined);
					localStorage.setItem("Off_hand", undefined);
					localStorage.setItem("Gold", 0);	
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
