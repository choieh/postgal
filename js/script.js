$(document).ready(function () {


    /*nav-bar*/
    $(".nav-bar").click(function () {

        if ($(".nav-bar").hasClass("clicked")) {
            $("nav").fadeOut();
            $(".nav-bar").removeClass("clicked");
        } else {
            $("nav").fadeIn();
            $(".nav-bar").addClass("clicked");
        }

    });

    $("nav li").click(function (event) {

        $(this).addClass("select").siblings().removeClass("select");

    });


    /*chat - mobile*/
    $(".chat-btn").click(function (e) {
        e.preventDefault();
        $(".chat-wrap").fadeIn();
    });

    $(".chat-top").click(function (e) {
        e.preventDefault();
        $(".chat-wrap").fadeOut();
    });


    /*chat - msg-sand*/
    $("#chat-text").keydown(function (key) {

        if (key.keyCode == 13) {

            var text = $("#chat-text").val();

            $("#chat-text").val('');

            $(".chat-con").prepend("<div class='msg-send'>" + text + "</div>");

        }

    });

});
