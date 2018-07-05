$(document).ready(function(){
	$('.collapse-close').on('click', function(){
		$('#firstmenu').collapse('hide');
	});

	$('.smooth').on('click', function(e){
		e.preventDefault();
		var target = $(this).data('target');
		var scroll = $('[data-item='+target+']').offset().top;
        $("html").animate({"scrollTop": (scroll)}, 1000);
        $('#firstmenu').collapse('hide');
	});

	$('.tel').mask('(000) 000-00-00');
});