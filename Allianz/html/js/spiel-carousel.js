$('.spiel-carousel').carousel({
	interval:false
});
$('.spiel-carousel .item').each(function() {
	var carousel = $('.spiel-carousel');
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));
	
	for (var i = 0; i < 1; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		
		next.children(':first-child').clone().appendTo($(this));
	}
	
	var j=0;
	$('.spiel-item.active').children().each(function(){
		if ($(window).width() >= 1200){
			if (j==1){
				this.setAttribute('style','padding-bottom:55px;background-color:white;');
				}else{
				this.setAttribute('style','margin-top:20px;');
			}
			}else if($(window).width() >= 769){
			if (j==1){
				this.setAttribute('style','padding-bottom:85px;background-color:white;');
				}else{
				this.setAttribute('style','margin-top:20px;');
			}
		}
		j = j+1;
	});
	
});
$( '.spiel-carousel' ).on( 'slid.bs.carousel', function () {
	$('.spiel-item').children().each(function(){
		this.setAttribute('style','');
	});
	
	var j=0;
	$('.spiel-item.active').children().each(function(){
		if ($(window).width() >= 1200){
			if (j==1){
				this.setAttribute('style','padding-bottom:55px;background-color:white;');
				}else{
				this.setAttribute('style','margin-top:20px;');
			}
			}else if($(window).width() >= 769){
			if (j==1){
				this.setAttribute('style','padding-bottom:85px;background-color:white;');
				}else{
				this.setAttribute('style','margin-top:20px;');
			}
		}
		j = j+1;
	});
});