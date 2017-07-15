$(document).ready(function() {

    // The Incredible Hulk
    $('.Hulk').one('click', function(){

        // TEXT change
        $('#top').fadeOut('slow', function() {
            $('#top').text('The Incredible Hulk');
            $('#top').fadeIn("slow");
        });

        // BIG IMAGE change
        $('#bigimg').stop().fadeOut('slow', function () {
            $(this).css("background-image", "url('CSS/Res/Big/IH-full.jpg')").fadeIn();
        });
    });
});
