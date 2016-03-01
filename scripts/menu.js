/**
 * Created by matthewcatellier on 2016-03-01.
 */
// MENU
var menu = $('#menu')
var nav = $('.main > nav')
var navBox = $('.main > #nav-box')

clicked = false;
menu.click(function() {

    if(!clicked) {
        expandMenu(navBox, 1500, 'ease');
        nav.show(1500);
        clicked = true;
    } else {
        scale1(navBox, 1500, 'ease');
        clicked = false;
        nav.hide(1500);
    }
})