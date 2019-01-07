/**
 * Created by matthewcatellier on 2016-04-05.
 */
// document ready
$(function() {

    var main = $('.main');
    var content = $('.content');
    var footerHeight = 60;

    var height = $(window).height() - footerHeight;
    content.height(height);
    main.height(height);

    $(window).resize(function() {
        height = $(window).height() - footerHeight;
        if(height > 700) {
            content.height(height);
            main.height(height);
        }
    });
});
