function passwordCheck(i) {
    //Passwörter für jedermann zu sehen
    var passwords = ["SCHOENEERSCHEINUNG","MEINSCHWERSTERVERZICHT","HOLTMICHHIERRAUS","BEGIBDICHINGEFAHR"];
    disable_glitch();
    var input = i.trim().split(" ").join("").toUpperCase(); //Sanitize input
    if ($.inArray(input, passwords) !== -1) {
        $(".center-main").html("<a href='dl/DerRinger-DasGoldeneTicket.zip' target='_blank'>DOWNLOAD</a>");
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