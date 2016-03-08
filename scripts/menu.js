/**
 * Created by matthewcatellier on 2016-03-01.
 */


// MENU
var menu = $('#menu')
var nav = $('.main > nav')
var ul = $('.main > nav ul')
var a = $('.main > nav ul a')
var navBox = $('.main > #nav-box')
var originalHeight = navBox.height();

scale0(nav);
nav.css({'display': 'block' });

clicked = false;
menu.click(function() {

    if(!clicked) {
        expandMenu(navBox, 1400, 'ease');
        scale1(nav, 1500, 'ease');
        clicked = true;
    } else {
        scale1(navBox, 1500, 'ease'); // retract menu
        scale0(nav, 1400, 'ease');
        clicked = false;
    }
})


// need to resize the font too...
$(window).resize(function() {
   makeWindowHeight(ul);
    if($(window).height() < 500) {
        a.css({'font-size:': '7.0vh' });
    } else {
        a.css({'font-size': '5.0vh' });
    }
});

function makeWindowHeight(div) {
    vph = $(window).height();
    div.css({'height': vph + 'px'});
}