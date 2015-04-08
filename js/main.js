 var $toggle = $('.toggle');
var $panel = $('.panel');

var $aiStarToggle = $('.ai-star-toggle');
var $aiStarPanel = $('.ai-star-panel');

var $aeStarToggle = $('.ae-star-toggle');
var $aeStarPanel = $('.ae-star-panel');

var $idStarToggle = $('.id-star-toggle');
var $idStarPanel = $('.id-star-panel');

var $psStarToggle = $('.ps-star-toggle');
var $psStarPanel = $('.ps-star-panel');


$toggle.on('click', function () {
	$panel.toggleClass('js-panel-open');
});

$aiStarToggle.on('click', function () {
	$aiStarPanel.toggleClass('js-star-panel-open');
});

$aeStarToggle.on('click', function () {
	$aeStarPanel.toggleClass('js-star-panel-open');
});

$idStarToggle.on('click', function () {
	$idStarPanel.toggleClass('js-star-panel-open');
});

$psStarToggle.on('click', function () {
	$psStarPanel.toggleClass('js-star-panel-open');
    console.log 
});


$('.nav').localScroll();

$('.top-scroll').localScroll();
