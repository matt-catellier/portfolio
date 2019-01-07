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
