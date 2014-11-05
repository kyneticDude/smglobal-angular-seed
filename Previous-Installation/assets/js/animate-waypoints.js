//Animate from top
$('.animated').waypoint(function() {
	$(this).toggleClass($(this).data('animated'));
},
{ offset: 'bottom-in-view' });
 
//Animate from bottom
$('.animated').waypoint(function() {
	$(this).toggleClass($(this).data('animated'));
});