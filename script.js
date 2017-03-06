$(document).ready(function(){
    
    $("button").click(function(){
        var person = $("#password").val();
     
        if (person === "22") {
            $("div").append("CONGRATULATIONS,YOU GUESSED IT!!!");
        }
    });
});