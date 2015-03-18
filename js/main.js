var $toggle = $('.toggle');
var $panel = $('.panel');

$toggle.on('click', function () {
	$panel.toggleClass('js-panel-open');
});