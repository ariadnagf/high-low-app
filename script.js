$(document).ready(function(){
    var answer=Math.floor(Math.random() * 10);
    $("#click").click(function(){
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
    $("#reset").click(function(){
        answer=Math.floor(Math.random() * 10);
        $("div").empty(); 
    });
});


