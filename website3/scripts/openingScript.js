var nextCounter = 0;
var userName = "";
var nameAccepted = false;
$(document).ready(function () {
	$("#whatsYourName").hide();
	$("#next").click(function () {
		if (nextCounter == 0) {
			$("#whatsYourName").fadeIn(1000);
			nextCounter++;
		}
		else if (nextCounter == 1) {
			userName = $("#whatsYourName").val();
			if (userName.length == 0) {
				alert("Come on now, ye do have a name, don't ye?");
			} else {
				var nameAccepted = confirm("So, yer name is " + userName + "?");
				if (nameAccepted == true) {
					$("#greeting").fadeOut(1000);
					$("#whatsYourName").fadeOut(1000);
					$("<p>Well then " + userName + ", a world in turmoil rests at your feet. Will you save it, or shall you destroy it?</p>").hide().appendTo("body").fadeIn(1000);
					nextCounter++;
				}
			}
		}
	});
});
