/* 
This JS file for global style of Navigatiion bar & footer.

Designed by : Sujan Hossain
        SID : X19170602
*/

jQuery(document).ready(function() {
    // Nav bar toggle
    $('.menu').click(function() {
        $('ul').toggleClass('active');
    });

    //Sticky navigation bar
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (top >= 40) {
            $("nav").addClass('forscrolling');
            //    alert('I am not called!');
        } else
        if ($("nav").hasClass('forscrolling')) {
            $("nav").removeClass('forscrolling');
        }
    });
});