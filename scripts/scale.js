/**
 * Created by matthewcatellier on 2016-03-01.
 */
function scale0() {
    $(this).transition({ scale: 0 });
}

function scale0(div) {
    div.transition({ scale: 0});
}
function scale0(div, time, effect) {
    div.transition({ scale: 0}, time, effect );
}
function scale1() {
    $(this).transition({ scale: 1 });
}
function scale1(div) {
    div.transition({ scale: 1});
}
function scale1(div, time, effect) {
    div.transition({ scale: 1}, time, effect);
}
// will blowup div and all its children
function scale10() {
    $(this).transition({ scale: 10 });
}
function scale10(div) {
    div.transition({ scale: 10 });
}
// will blowup div and all its children
function scale20() {
    $(this).transition({ scale: 20 });
}
function scale20(div) {
    div.transition({ scale: 20 });
}

// will blowup div and all its children
function scale40() {
    $(this).transition({ scale: 40 });
}
function scale40(div) {
    div.transition({ scale: 40 }, 2000, 'ease' );
}
function scale40(div, time, effect) {
    div.transition({ scale: 40 }, time, effect );
}

function expandMenu(div, time, effect) {
    div.transition({ scale: [60, 70] }, time, effect );
}