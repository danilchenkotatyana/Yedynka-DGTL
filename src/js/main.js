//= ../../node_modules/jquery-custom/jquery.2/dist/jquery.min.js
//var $ = require("jquery");
//carausel

$(document).ready(function() {
	var leftUIEl = $('.b-arrows__left');
	var rightUIEl = $('.b-arrows__right');
	var elementsList = $('.m-new-products__container');

	var pixelsOffset = 33;
	var currentLeftValue = 0;
	var elementsCount = elementsList.find('.m-new-products__product').length;
	var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
	var maximumOffset = 0;

	leftUIEl.click(function() {
		if (currentLeftValue != maximumOffset) {
			currentLeftValue += pixelsOffset;
			elementsList.animate({ left : currentLeftValue + "%"}, 500);
		}
	});

	rightUIEl.click(function() {
		if (currentLeftValue != minimumOffset) {
			currentLeftValue -= pixelsOffset;
			elementsList.animate({ left : currentLeftValue + "%"}, 500);
		}
	});
});
//