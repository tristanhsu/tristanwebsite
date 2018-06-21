$("document").ready(function(){

	$(".name").click(function(){
		$('html, body').animate({
			scrollTop: $("html").offset().top
		}, 1000);
	});

	$("#link_video").click(function(){
		$('html, body').animate({
			scrollTop: $(".video_section").offset().top - 65
		}, 1000);
	});

	$("#link_photo").click(function(){
		$('html, body').animate({
			scrollTop: $(".photo_section").offset().top - 65
		}, 1000);
	});

	$("#link_mixed").click(function(){
		$('html, body').animate({
			scrollTop: $(".mixed_section").offset().top - 65
		}, 1000);
	});

	$("#link_bio").click(function(){
		$('html, body').animate({
			scrollTop: $(".bio_section").offset().top - 65
		}, 1000);
	});

	
	// $('.photo_cage').slick({
	// 	dots: true,
	// 	lazyLoad: 'ondemand',
	// 	speed: 300,
	// 	variableWidth: true,
	// 	centerMode: true,
	// 	centerPadding: '200px',
	// 	slidesToShow: 1,
	// 	responsive: [
	// 	{
	// 		breakpoint: 1100,
	// 		settings: {
	// 			dots:false
	// 		}
	// 	}
	// 	]
	// });

	$('.photo_cage').slick({
		dots: true,
		lazyLoad: 'ondemand',
		speed: 300,
		variableWidth: true,
		centerMode: true,
		centerPadding: '200px',
		slidesToShow: 1,
		prevArrow: $(".pp2"),
		nextArrow: $(".nn2")
	});
	

});
