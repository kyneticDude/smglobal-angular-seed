jQuery(document).ready(function(){

// OffCanvas Navigation

	$(".open-panel").click(function(){
	  
	  $("html").addClass("openNav");
	  
	});
		
	$(".close-panel, .page").click(function(){
	  
	$("html").removeClass("openNav");
	  
	});
});

/*===========================================================*/
/*	Preloader 
/*===========================================================*/	

//<![CDATA[
//	$(window).load(function() { // makes sure the whole site is loaded
//		$("#status").fadeOut(); // will first fade out the loading animation
//		$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
//	})
//]]>
