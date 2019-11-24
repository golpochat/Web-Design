/* 
This JS file for global style of Navigatiion bar & footer.

Designed by : Sujan Hossain
        SID : X19170602
*/

jQuery(document).ready(function() {
    // Nav bar toggle
    $(".menu").click(function() {
        $("ul").toggleClass("active");
    });

    //Sticky navigation bar
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (screen.width >= 760) {
            if (top >= 40) {
                $("nav").addClass("forscrolling");
                $(".brandname").hide();
                // alert("i m 1");
            } else if ($("nav").hasClass("forscrolling")) {
                $("nav").removeClass("forscrolling");
                $(".brandname").show();
                // alert("i m 2");
            }
            // alert(screen.width);
        } else {
            $("nav").addClass("forscrolling");
            $(".brandname").hide();
            // alert("i m 3");
        }
        // alert(screen.width);
    });
});