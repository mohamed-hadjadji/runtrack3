$(document).ready(function(){
 
    $("#button").click(function(){
        var login = $("#login").val();
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var email = $("#email").val();
        var mdp1 = $("#mdp1").val();
        var mdp2 = $("#mdp2").val();

        if(login == "" || nom == "" || prenom == "" || email == "" || mdp1 == "" || mdp2 == ""){
                            status.html("Veuillez remplir tous les champs").fadeIn(400);
        } 
        else if(mdp1 != mdp2) {
             status.html("Les deux mots de passe sont différents").fadeIn(400);
        } 
        else {    
            $.ajax({
                type: "post",
                url:  "inscription.php",
                data: {
                        'nom'    : nom,
                        'prenom' : prenom,
                        'pseudo' : pseudo,
                        'email' : email,
                        'mdp1' : mdp1,
                        'mdp2' : mdp2,
                         
                      },
                              
                 success: function(data){
                    if(data != "inscription_success"){
                            status.html(data).fadeIn(400);
                            $("#button").attr("value", "Inscription");
                            $("#button").addClass("btn-primary").css("color", "white");
                     } 
                    else {
                            $("#presentation").hide();
                            $("#connexion h1").html("Connexion");
                            $("#inscription").html("<strong>Juste une dernière étape " + prenom + " " + nom + " !</strong><br/>Un lien d'activation de votre compte vient de vous être envoyé à l'adresse électronique indiquée lors de l'inscription.<br/>Veuillez tout simplement cliquer ce lien et vous serez définitivement membre du <strong>TDN SOCIAL NETWORK</strong>.<br/><em>(Pensez à vérifier vos spams ou courriers indésirables, si vous ne voyez pas ce mail dans votre boîte de réception)</em><br/><br/>Une fois que ceci est fait, vous n'aurez plus qu'à vous connecter!<br/>Alors, on se dit à très bientôt ;) !").css("width", "inherit").fadeIn(400);
                         }
                    }
            });
          
        }
    });
});