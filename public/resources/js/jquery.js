$(document).ready(function() {
    //Waypoint

    var waypoint = new Waypoint({
        element: document.getElementById("food"),
        handler: function(direction) {
            if (direction == "down") {
                $("nav").addClass("sticky-nav");
            } else {
                $("nav").removeClass("sticky-nav");
            }
        },
        offset: "60px",
    });

    //Scroll on buttons
    $(".scroll-to-plans").click(function() {
        $("html ,body").animate({
                scrollTop: $(".jquery-plans").offset().top,
            },
            2000
        );
    });

    $(".scroll-to-start").click(function() {
        $("html ,body").animate({
                scrollTop: $(".jquery-features").offset().top,
            },
            1000
        );
    });

    /*Animations on scroll*/

    var waypoint = new Waypoint({
        element: document.getElementById("wp-1"),
        handler: function(direction) {
            $("#wp-1").addClass("animated animate__fadeIn");
        },
        offset: "50%",
    });

    var waypoint = new Waypoint({
        element: document.getElementById("wp-2"),
        handler: function(direction) {
            $("#wp-2").addClass("animated animate__fadeInUp");
        },
        offset: "50%",
    });

    var waypoint = new Waypoint({
        element: document.getElementById("wp-3"),
        handler: function(direction) {
            $("#wp-3").addClass("animated animate__fadeInDown");
        },
        offset: "50%",
    });

    var waypoint = new Waypoint({
        element: document.getElementById("wp-4"),
        handler: function(direction) {
            $(".jquery-wp-4").addClass("animate__pulse");
        },
        offset: "50%",
    });
    var waypoint = new Waypoint({
        element: document.getElementsByClassName("numAnim"),
        handler: function(direction) {
            $(".numAnim").addClass("animate__lightSpeedInRight");
        },
        offset: "50%",
    });

    /*********************** Mobile Nav ************************/
    $(".jqueryMblNav").click(function() {
        var nav = $(".jqueryAnim");
        var icon = $(".jqueryMblNav i");
        var logo = $(".navlogo");

        nav.slideToggle(200);

        if (icon.hasClass("fa-bars")) {
            icon.addClass("fa-times");
            icon.removeClass("fa-bars");
        } else {
            icon.removeClass("fa-times");
            icon.addClass("fa-bars");
        }
    });
});