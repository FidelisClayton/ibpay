
function segmentFormActive() {

	$('#grupo-de-dados>a.item').removeClass('active');
	$('.sessao-de-dados').addClass('hidden');
  
	$($('#grupo-de-dados>a.item')[0]).addClass('active');
	$($('.sessao-de-dados')[0]).removeClass('hidden');
	
}