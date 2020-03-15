$(document).ready(function(){
 
    $("#button").click(function(e){
        e.preventDefault();
 
        $.post(
            'inscription.php', // Un script PHP que l'on va créer juste après
            {
                username : $("#login").val(),  // Nous récupérons la valeur de nos input que l'on fait passer à connexion.php
                
                nom : $("#nom").val(),
                prenom : $("#prenom").val(),
                email : $("#email").val(),
                password : $("#password").val()

            },
 
            function(data){
 
                if(data == 'Success'){
                     // Le membre est connecté. Ajoutons lui un message dans la page HTML.
 
                     $("#resultat").html("<p>Vous avez été inscrit avec succès !</p>");
                }
                else{
                     // Le membre n'a pas été connecté. (data vaut ici "failed")
 
                     $("#resultat").html("<p>Erreur lors de l'inscription...</p>");
                }
         
            },
            'text'
         );
    });
});