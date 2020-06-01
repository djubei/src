$(document).ready(function () {
	var button = $('#button');
	var close = $('#close');
	var modal = $('#modal');

	button.on('click', function () {
		modal.addClass('modal_active');
	})

	close.on('click', function () {
		modal.removeClass('modal_active');
	})
})