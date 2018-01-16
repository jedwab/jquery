var carouselList = $("#carousel ul");

setInterval(function() {
	changeSlide('rightDirection')}, 5000);

$("#leftArrow").click(function(){
	changeSlide('leftDirection');
});

$("#rightArrow").click(function(){		
	changeSlide('rightDirection');
	
});

function changeSlide(animationDirection) {
	if (animationDirection == 'rightDirection') {
		carouselList.animate({'marginLeft':-400}, 1200, moveRightSide);
	}
	else {
		moveLeftSide();
		carouselList.animate({'marginLeft':0}, 1200);
	}
}

function moveLeftSide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
}

function moveRightSide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
}


