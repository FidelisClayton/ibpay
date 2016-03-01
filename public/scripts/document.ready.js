
$(document).ready(function(){

	$('.right.menu.open').on("click",function(e) {
	   	e.preventDefault();
		$('.ui.horizontal.menu').toggle();
	});
	
	$('.ui.dropdown').dropdown();
	$('div.row div.three.wide.column').delegate('a.item','click',clickSegmentActive);
	$('#aba-de-aplicativo').delegate('a.menu');
	
});


