$('.partners-carousel[data-type="multi"] .item').each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));
	
	for (var i = 0; i < 4; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		
		next.children(':first-child').clone().addClass('cloned-item').appendTo($(this));
	}
});
//$( '.partners-carousel' ).on( 'slid.bs.carousel', function () {
//	$('.partner-logo.active').setAttribute('style','display:none;');
//});