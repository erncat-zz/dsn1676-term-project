var $toggle = $('.toggle');
var $panel = $('.panel');

var $btnMove = $('.btn-move');
var $fish = $('.fish');

$toggle.on('click', function () {
	$panel.toggleClass('js-panel-open');
});

$btnMove.on('click', function () {
    $fish.toggleClass('js-fish-move');
});

