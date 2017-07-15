$(document).ready(function() {
    
    // Iron Man
    $('.ironMan').one('click', function() {

        // TEXT change
        $('#top').fadeOut('slow', function() {
            $('#top').text('Iron Man');
            $('#top').fadeIn("slow");
        });

        // BIG IMAGE change
        $('#bigimg').stop().slideUp('slow', function () {
            $(this).css("background-image", "url('CSS/Res/Big/IM-full.jpg')").slideDown('slow');
        });
    });
});
