function passwordCheck(input) {
    //Passwörter für jedermann zu sehen
    var passwords = ["DERRINGER","DASGOLDENETICKET"];
    disable_glitch();
    if ($.inArray(input.toUpperCase(), passwords) !== -1) {
        $(".center-bottom").html("<a href='test/test.pdf' target='_blank'>DOWNLOAD</a>");
    } else {
        //$(".center-bottom").html("");
    };
}

$(document).ready(function() {
    $('input').keydown(function(event) {
        if (event.keyCode == 13) {
            var input = $("input").val();
            play_glitch();
            window.setTimeout(passwordCheck,200,input);
            $("input").val("");
            return false;
         }
    });
});