$(document).ready(function(){
	
	renderTime();
	
	$(".dial").bind('click',function(ev){
		
		$(this).blur();
		ev.preventDefault();
		ev.stopPropagation();
		
		slot = $(this).val();

		if(slot!="No Time") {
		
			$('#knob').hide();
			$('#ideas').show();
		
			$('#ideas ul[data-label="'+slot+'"]').each(function(i,el){
				$(el).show();			
			});
			
			$("html, body").animate({ scrollTop: 0 }, "fast");
			
		}
	
	});
	
	renderLabel($('.dial').val());
	
	$('.button').bind('click',function(ev){
		renderTime();
	});
	
});

function renderLabel(value) {
	
	$(this).data('raw',value);
	time = $(this).data('raw');
	$('.dial').data('slot',value);
	label = $('#ideas ul[data-slot="'+time+'"]').data('label');
	$('.dial').val(label);
	
}

function renderTime() {
	
	$("html, body").animate({ scrollTop: 0 }, "fast");
	$('#knob').show();
	
	// Render input
	$(".dial").knob({
		fgColor: '#576027',
		change: function(value){
			renderLabel(value);
		}
	});
	
	// Set up idea UI
	$('#ideas').hide();
	$('#ideas ul').hide();
}