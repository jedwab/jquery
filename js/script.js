
$(function(){
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 3000);

	function changeSlide(){
		carouselList.animate({'marginLeft':0}, 1200, moveFirstSlide);
<<<<<<< HEAD
		}
=======
	}
>>>>>>> 6d07a023a0888c6bf5b607275c9deab4743b5c0c

	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
<<<<<<< HEAD
		}
});
=======
	}
});
>>>>>>> 6d07a023a0888c6bf5b607275c9deab4743b5c0c
