$(document).ready(function() {

    // Captain America
    $('.Captain').one('click', function(){

        // TEXT change
        $('#top').fadeOut('slow', function() {
            $('#top').text('Captain America');
            $('#top').fadeIn("slow");
        });

        // BIG IMAGE change
        $('#bigimg').stop().fadeOut('slow', function () {
            $(this).css("background-image", "url('CSS/Res/Big/CA-full.jpg')").fadeIn();
        });

        $('#info').text("").typeIt({
            speed: 50,
            autoStart: false
        });;
    });
});
