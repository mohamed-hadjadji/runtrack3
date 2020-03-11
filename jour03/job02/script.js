$(document).ready(function(){
  
  $("#button").click(function(){
     var parent = $("#melangees");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
  });
  $("#arc1").click(function(){
    $("#arc1").appendTo("#rangees");
   });
  $("#arc2").click(function(){
    $("#arc2").appendTo("#rangees");
   });
  $("#arc3").click(function(){
    $("#arc3").appendTo("#rangees");
   });
  $("#arc4").click(function(){
    $("#arc4").appendTo("#rangees");
   });
  $("#arc5").click(function(){
    $("#arc5").appendTo("#rangees");
   });
  $("#arc6").click(function(){
    $("#arc6").appendTo("#rangees");
   });
});        