$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$("img").animate({left: "-=10px"}, 25);
				break;
			// Up Arrow Pressed
			case 38:
				$("img").animate({top: "-=10px"}, 25);
				break;
			// Right Arrow Pressed
			case 39:
				$("img").animate({left: "+=10px"}, 25);
				break;
			// Down Arrow Pressed
			case 40:
				$("img").animate({top: "+=10px"}, 25);
				break;
		}
	});
});