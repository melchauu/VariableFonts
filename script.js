
(function ( $ ) {
	'use strict';
   $.fn.heightFull = function() {
	var totalHeight = $('window').height();
	var heightMinus = totalHeight;
	$(this).css('height', heightMinus);
  };
}( jQuery ));

$(".main .item").heightFull();
$(window).resize(function() {
  $(".main .item").heightFull();
});

$(".main").onepage_scroll({
   sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "cubic-bezier(0.175, 0.885, 0.420, 1.210)", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000, // AnimationTime let you define how long each section takes to animate
   pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {}, // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {}, // This option accepts a callback function. The function will be called after the page moves.
   loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   responsiveFallback: 600 // You can fallback to normal page scroll by defining the width of the browser in which you want the responsive fallback to be triggered. For example, set this to 600 and whenever the browser's width is less than 600, the fallback will kick in.
});

const chewSlider = document.getElementById("this-man-this-monster-CHEW"),
	wonkSlider = document.getElementById("this-man-this-monster-WONK"),
	biteSlider = document.getElementById("this-man-this-monster-BITE"),
	monsterHeaderTop = document.getElementById("monsterHeaderTop"),
	monsterHeaderBtm = document.getElementById("monsterHeaderBtm");

const proportionSlider = document.getElementById("recursive-PROP"),
	expressionSlider = document.getElementById("recursive-XPRN"),
	weightSlider = document.getElementById("recursive-wght"),
	slantSlider = document.getElementById("recursive-slnt"),
	italicSlider = document.getElementById("recursive-ital"),
	standardHeaderTop = document.getElementById("standardHeaderTop"),
	standardHeaderBtm = document.getElementById("standardHeaderBtm");

const monsterUpdateFontVariationSettings = function() {
	let ths = this,
		chew = chewSlider.value,
		wonk = wonkSlider.value,
		bite = biteSlider.value,
		updatedFontVarSettings = `"CHEW" ${chew}, "WONK" ${wonk}, "BITE" ${bite}`;

	monsterHeaderTop.style.fontVariationSettings = updatedFontVarSettings;
	monsterHeaderBtm.style.fontVariationSettings = updatedFontVarSettings;
};

chewSlider.oninput = function() {
	monsterUpdateFontVariationSettings();
};

wonkSlider.oninput = function() {
	monsterUpdateFontVariationSettings();
};

biteSlider.oninput = function() {
	monsterUpdateFontVariationSettings();
};

const standardUpdateFontVariationSettings = function() {
	let ths = this,
		prop = proportionSlider.value,
		expr = expressionSlider.value,
		weight = weightSlider.value,
		slant = slantSlider.value,
		ital = italicSlider.value,
		updatedFontVarSettings = `"PROP" ${prop}, "XPRN" ${expr}, "wght" ${weight}, "slnt" ${slant}, "ital" ${ital}`;

	standardHeaderTop.style.fontVariationSettings = updatedFontVarSettings;
	standardHeaderBtm.style.fontVariationSettings = updatedFontVarSettings;
};

proportionSlider.oninput = function() {
	standardUpdateFontVariationSettings();
};

expressionSlider.oninput = function() {
	standardUpdateFontVariationSettings();
};

weightSlider.oninput = function() {
	standardUpdateFontVariationSettings();
};

slantSlider.oninput = function() {
	standardUpdateFontVariationSettings();
};

italicSlider.oninput = function() {
	standardUpdateFontVariationSettings();
};