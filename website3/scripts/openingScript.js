var nextCounter = 0;
var userName = "";
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
				confirm("So, yer name is " + userName + "?");
			}
		}
	});
});
