(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
/**
 * Created by matthewcatellier on 2016-03-01.
 */

var scale = require("./scale");
// MENU
var menu = $('#menu');
var nav = $('.main > nav');
var ul = $('.main > nav ul');
var a = $('.main > nav ul a');
var navBox = $('.main > #nav-box');
var originalHeight = navBox.height();

scale.zero({
    'div': nav
});
nav.css({
    'display': 'block'
});

clicked = false;
menu.click(function() {
    if(!clicked) {
        scale.expandMenu(navBox, 1400, 'ease');
        scale.one({
            'div': nav,
            'time': 1500,
            'effect': 'ease'
        });

        clicked = true;
    } else {
        scale.zero({
            'div': nav,
            'time': 1400,
            'effect': 'ease'
        });
        scale.one({
            'div': navBox,
            'time': 1500,
            'effect': 'ease'
        }); // retract menu
        clicked = false;
    }
});

// need to resize the font too...
$(window).resize(function() {
    makeWindowHeight(ul);
    if($(window).height() < 500) {
        a.css({
            'font-size:': '7.0vh'
        });
    } else {
        a.css({
            'font-size': '5.0vh'
        });
    }
});

function makeWindowHeight(div) {
    vph = $(window).height();
    div.css({
        'height': vph + 'px'
    });
}


$('.x-icon').click(function() {
    if(!clicked) {
        scale.expandMenu(navBox, 1400, 'ease');
        scale.one({
            'div': nav,
            'time': 1500,
            'effect': 'ease'
        });

        clicked = true;
    } else {
        scale.zero({
            'div': nav,
            'time': 1400,
            'effect': 'ease'
        });
        scale.one({
            'div': navBox,
            'time': 1500,
            'effect': 'ease'
        }); // retract menu
        clicked = false;
    }
});

},{"./scale":3}],3:[function(require,module,exports){
/**
 * Created by matthewcatellier on 2016-03-01.
 */

 module.exports = {
     scale: function(div, scale, time, effect) {
         div.transition({ scale: scale}, time, effect);
     },
     zero: function(opt) {
        if(!opt) {
            $(this).transition({ scale: 0 });
        } else if(opt.hasOwnProperty('div')) {
            opt.div.transition({ scale: 0});
        }else if(opt.hasOwnProperty('div') && opt.hasOwnProperty('time') && opt.hasOwnProperty('effect') ) {
            opt.div.transition({ scale: 0}, opt.time, opt.effect );
        } else {
           console.log('Error in scale.zero opt parameter: ' + opt);
        }
    },

    one: function(opt) {
       if(!opt) {
           $(this).transition({ scale: 1 });
       }else if(opt.hasOwnProperty('div')) {
           opt.div.transition({ scale: 1});
       } else if(opt.hasOwnProperty('div') && opt.hasOwnProperty('time') && opt.hasOwnProperty('effect') ) {
           opt.div.transition({ scale: 1}, opt.time, opt.effect);
       } else {
          console.log('Error in scale.one opt parameter: ' + opt);
       }
   },

     // will blowup div and all its children
     ten: function(opt) {
         if(!opt) {
             $(this).transition({ scale: 10 });
         }else if(opt.hasOwnProperty('div')) {
             opt.div.transition({ scale: 10 });
         } else {
            console.log('Error in scale.ten opt parameter: ' + opt);
         }
     },
     // will blowup div and all its children
     twenty: function(opt) {
         if(!opt) {
             $(this).transition({ scale: 20 });
         }else if(opt.hasOwnProperty('div')) {
             opt.div.transition({ scale: 20 });
         } else {
            console.log('Error in scale.twenty opt parameter: ' + opt);
         }
     },

     // will blowup div and all its children
     forty: function(opt) {
         if(!opt) {
             $(this).transition({ scale: 40 });
         }else if(opt.hasOwnProperty('div')) {
             opt.div.transition({ scale: 40 });
         } else if(opt.hasOwnProperty('div') && opt.hasOwnProperty('time') && opt.hasOwnProperty('effect') ) {
             opt.div.transition({ scale: 40}, opt.time, opt.effect);
         } else {
             console.log('Error in scale.forty opt parameter: ' + opt);
         }
     },

     expandMenu: function(div, time, effect) {
         div.transition({ scale: [100, 300] }, time, effect );
     }
 };

},{}]},{},[1,2]);
