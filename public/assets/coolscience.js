$(document).ready( function() {

	// Menu highlighting
	var menu_item_id = $('body').attr('id');
	$('ul.nav li.' + menu_item_id).addClass('active');

	$('legend').tooltip();

	// Ask a Scientist
	$('a#amaModalButton').click( function() {
		var text = $('textarea#question').val();
		$('.modal-body textarea').val(text)
	});

	// Feature video adjustment
	video_resize();
	$(window).resize( function() {
		video_resize();
	});

	$('#topbar a').tooltip();
	$('#topbar li').tooltip();
	$('#categories a').tooltip();

	var max_height = 0;
	$('.thumbnail.article').each( function() {
		if ( $(this).height() > max_height ) {
			max_height = $(this).height();
		}
	});
	$('.thumbnail.article').height(max_height);
});

function video_resize() {
	var w = $('iframe.feature').width();
	$('iframe.feature').height(w * 0.5625);
}