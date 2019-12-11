/* 
This JS file for global style of Navigatiion bar & footer.

Designed by : Sujan Hossain
        SID : X19170602
*/

jQuery(document).ready(function() {
    // Nav bar toggle
    $(".menu").click(function() {
        $(".menus").toggleClass("active");
    });

    //Sticky navigation bar
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (screen.width >= 760) {
            if (top >= 100) {
                $(".menus").addClass("forscrolling");
                // alert("i m 1");
            } else if ($(".menus").hasClass("forscrolling") && top < 80) {
                $(".menus").removeClass("forscrolling");
                // alert("i m 2");
            }
            // alert(screen.width);
        }
        // alert(screen.width);
    });
});

window.addEventListener("DOMContentLoaded", function() {
    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        //form.reset();
        button.style = "display: none ";
        status.innerHTML = "Thanks! Enjoy your subscription";
        document.getElementById("my-form-status").style.padding = "10px";
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}