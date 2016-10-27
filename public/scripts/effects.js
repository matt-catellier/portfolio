// SOCAIL WOBBLE
var socailLink = $('.icon > a');
socailLink.mouseenter( function() {	// tilting effect
	$(this)
		.transition({
	  		perspective: '100px',
	  		rotate3d: '1,1,1,30deg', // makes it pull to the left
		}, 100, 'snap')
		.transition({
			perspective: '100px',
			rotate3d: '1,1,1,-30deg' // makes it pull to the left
		}, 100, 'snap')
		.transition({
			perspective: '100px',
			rotate3d: '1,1,1,20deg' // makes it pull to the left
		}, 100, 'snap')
		.transition({
			perspective: '100px',
			rotate3d: '1,1,1,-20deg' // makes it pull to the left
		}, 100, 'snap')
		.transition({
			perspective: '100px',
			rotate3d: '1,1,1,10deg' // makes it pull to the left
		}, 100, 'snap')
		.transition({
			perspective: '100px',
			rotate3d: '1,1,1,-10deg' // makes it pull to the left
		}, 100, 'snap')
		.transition({
			perspective: '100px',
			rotate3d: '1,1,1,5deg' // makes it pull to the left
		}, 100, 'snap')
		.transition({
			perspective: '100px',
			rotate3d: '1,1,1,-5deg' // makes it pull to the left
		}, 100, 'snap')
		.transition({
			rotate3d: '1,1,1,0deg' // makes it pull to the left
		}, 100, 'snap');
});


// ABOUT BUBBLING
var bioBlock= $('#about-block');
var bioIcon = $('.bio-icon i');
bioBlock.mouseenter( function() { // enlarge effect
	bioIcon
		.transition({scale: 1.2}, 200, 'ease')
		.transition({scale: 0.8}, 300, 'ease')
		.transition({scale: 1.1}, 200, 'ease')
		.transition({scale: 0.9}, 300, 'ease')
		.transition({scale: 1}, 300, 'ease');
});

var expBlock= $('#portfolio-block');
var expIcon = $('.experience-icon i');
expBlock.mouseenter( function() { // enlarge effect
	expIcon
		.transition({ rotate: '30deg', rotateX: '180deg',  duration: 500 })
		.transition({ rotate: '0deg', rotateX: '0deg',  duration: 500 })
		.transition({ rotate: '-30deg', rotateX: '-180deg',  duration: 500 })
		.transition({ rotate: '0deg', rotateX: '0deg',  duration: 500 });
});

// DIDNT LIKE IT BEUCASE THERE ARE 2 OF THESE DIVS, ONE OF WHICH I HIDE
// SHOULD INSTEAD USE JS TO REARRAGE THE BLOCKS AT DIFFERENT RESOLUTIONS
var contactBlock = $('#contact-block');
var contactIcon = $('#contact-block .contact-icon i');
contactBlock.mouseenter( function () { // move effect
	contactIcon
		.transition({ x: 20 }, 1000, 'ease')
		.transition({ x: -40 }, 3000, 'ease' )
		.transition({ x: 0 }, 2000, 'ease' );
});

var contactBlock = $('#contact-block-main');
var contactIcon2 = $('#contact-block-main .contact-icon i');
contactBlock.mouseenter( function () { // move effect
	contactIcon2
		.transition({ x: 20 }, 1000, 'ease')
		.transition({ x: -40 }, 3000, 'ease' )
		.transition({ x: -0 }, 2000, 'ease' );
});
