function disable_glitch() {
    $(".buzz_wrapper").attr('class', 'buzz_wrapper_off');
    $('.buzz_wrapper_span').remove();
}

function play_glitch() {
    disable_glitch(); //Safeguard to prevent glitch from running more than once
    
    //Toggle buzz_wrapper class to enable animation
    $(".buzz_wrapper_off").attr('class', 'buzz_wrapper');
    
    // Create temporary clones of all <spans> for color distortion
    var spans = $('.buzz_wrapper span');
    $.each(spans,function (s,e) {
        for(i=0;i<4;i++) {
          $(e).clone().prependTo(e).addClass('buzz_wrapper_span');
        };
    });
};

// Intercept link clicks and set timeout before redirecting to allow animation
$(document).ready(function() {
        $('a').click(function(e) {
            var timeoutlength = 200;
            // Only intercept internal links
            if ($(this).attr('target') !== "_blank") {
                var h = $(this).attr('href');
                e.preventDefault();
                play_glitch();
                window.setTimeout(function (){window.location = h},timeoutlength);
            }
        });
});