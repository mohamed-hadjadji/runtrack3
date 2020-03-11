$(document).ready(function(){
var bloc=[];
var bloc2=["arc1","arc2","arc3","arc4","arc5","arc6"];
  
  $("#button").click(function(){
     var parent = $("#melangees");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
  });
  $("img").click(function(){
    $(this).appendTo("#rangees");
   var count = $("#rangees img").length;
     
    bloc.push($(this).attr('id'));
    
var i = 1;
 if (count == 6)
 {
    var win= true;

    while( i < 6 ){

         if( bloc[i] != bloc2[i]){
            win = false;          
        }
  i++;    
  }
if (win)
    {
        var p = document.createElement('p');
        var newelement = document.createTextNode("Vous avez gagné");
        p.setAttribute("id", "win");

        document.body.appendChild(p);
        p.appendChild(newelement);
    }

    else {

        var p = document.createElement('p');
        var newelement = document.createTextNode("Vous avez perdu");
        p.setAttribute("id", "loose");
        document.body.appendChild(p);
        p.appendChild(newelement);
    }

}


});
       
});

