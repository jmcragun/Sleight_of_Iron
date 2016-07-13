var nextCounter = 0;
$(document).ready(function () {
	$("#whatsYourName").hide();
	$("#next").click(function () {
		if (nextCounter == 0) {
			$("#whatsYourName").fadeIn(1000);
			nextCounter++;
		}
	});
});
