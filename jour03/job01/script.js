$(document).ready(function(){
  $("p").hide();
  $("#hide").hide();
  $("#button").click(function(){
    $("p").show();
    $("#hide").show();
  });
  $("#hide").click(function(){
    $("p").hide();
    $("#hide").hide();  
  });
  
});        