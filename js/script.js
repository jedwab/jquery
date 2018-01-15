$(function(){
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 3000);

	function changeSlide(){
		carouselList.animate({'marginLeft':0}, 1200, moveFirstSlide);
	}

	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
	}
});

