$(document).ready(function(){
    var answer=22;
    $("button").click(function(){
        var person = $("#password").val();
        person=parseInt(person)
     if (person>answer) {
         $("div").append("the answer is too high");
     }
         else if (person<answer) {
         $("div").append("the answer is too low");
     }
        else if (person === answer) {
            $("div").append("CONGRATULATIONS,YOU GUESSED IT!!!");
        }
        else{
           $("div").append("what you typed is not a number."); 
        }
    });
});

