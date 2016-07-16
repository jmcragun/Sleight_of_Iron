var nextCounter = 0;
var userName = "";
var nameAccepted = false;
$(document).ready(function () {
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
					var characterdata = {
						/////////////
						//Character//
						/////////////
						"userName" : userName,
						"Health": 50,
						"Stamina": 50,
						"Mana": 50,
						"gender" : undefined,
						"race" : undefined,
						"eye_color" : undefined,
						"hair_color" : undefined,
						//////////////
						//Attributes//
						//////////////
						"strength" : 1,
						"agility" : 1,
						"dexterity" : 1,
						"wisdom" : 1,
						"faith" : 1,
						"endurance" : 1,
						"intelligence" : 1,
						"luck" : 1,
						"mysterium" : 1,
						"personality" : 1,
						//////////
						//Skills//
						//////////						
						"liar" : 0,
						"intimidation" :0,
						"perception" : 0,
						"persuasion" : 0,
						"sleight_of_hand" : 0,
						"stealth" : 0,
						"survival" : 0,
						"blade" : 0,
						"blunt" : 0, 
						"one_handed" : 0,
						"two_handed" : 0,
						"light_armor" : 0,
						"heavy_armor" : 0,
						"block": 0,
						"dodge" : 0,
						"brawler" : 0,
						"archery" : 0,
						"marksman" : 0,
						"throwing" : 0,
						"divination" : 0,
						"restoration" : 0,
						"covenant" : 0,
						"pyromancy" : 0,
						"hydromany" : 0,
						"aeromancy" : 0,
						"geomancy" : 0,
						"electromancy" : 0,
						"chronomancy" : 0,
						"skeptomancy" : 0,
						"necromancy" : 0,
						"conjuration" : 0,
						"fysomancy" : 0,
						"arcanomancy" : 0, //dark magic
						"fitness" : { "climbing" : 0, "jumping" : 0, "swimming" : 0, },
						"armorer" : 0,
						"weapon_master" : 0,
						"alchemy" : 0,
						"engineering" : 0,
						"tactics" : 0,
						"mapping" : 0,
						"tracking" : 0,
						"looter" : 0,
						"barter" : 0,
						"leadership" : 0,
						"actor" : 0,
						/////////////
						//Inventory//
						/////////////
						"main_hand" : undefined,
						"off_hand" : undefined,
						"gold" : 0					
					};
					// Put the object into storage
					localStorage.setItem('characterdata.js', JSON.stringify(characterdata));
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
