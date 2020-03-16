<?php
   session_start();
  
   ?>

   <!DOCTYPE html>

<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title> Inscription</title>
    <link rel="stylesheet" href="">
    
</head>

<body class="topic">
    <header>

    <?php 
    include ('include/bar-nav.php');
     if (!isset($_SESSION["login"]))
  { 

    ?>

    </header>

        <section id="inscription">
        <h1> Inscription </h1>
<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="script.js"></script>
        <form method='POST' action=''>
           
                <label>Login</label>
                <input id="login" type="text" name='login' required />
                
                 <label>Nom</label>
                <input id="nom" type="text" name='nom' required /> 

                <label>Prenom</label>
                <input id="prenom" type="text" name='prenom' required />

                <label>Email</label>
                <input id="email" type="text" name='mail'/>
                        
                <label>Password</label>
                <input id="mdp1" type="password" name='mdp1' required />
            
                <label>Confirmation Password</label>
                <input id="mdp2" type="password" name='mdp2' required />
            
            <input id="button" type='submit' name='valider' value='Inscription' />

           <?php

           $connexion = new PDO('mysql:host=localhost;dbname=bigjob', 'root', '');
        if ($_POST['mdp1']==$_POST['mdp2'])
            {
            $reponse = $connexion->query("SELECT* FROM utilisateurs WHERE login='".$_POST['login']."'");
            $resultat=$reponse->fetchAll();
            $trouve=false;
            foreach ($resultat as $key => $value) 
            {
            if ($resultat[$key][1]==$_POST['login'])
            {
               $trouve=true;
               echo "<p class='erreur'><b>Login déja existant!!</b></p>";
            }
           }
           if ($trouve==false)
           {
            $sql = $connexion->query( "INSERT INTO utilisateurs (login,nom,prenom,email,password)
                VALUES (:login, :prenom, :nom, :email, :mdp1)");      
           
            }
           }
           else
           {
              echo "<p class='erreur'><b>Les mots de passe doivent être identique!</b></p>";
           }      
        
    ?> 

        </form>
        
     </section>
    <?php
    }
    else 
    {
    ?>
    <section id="notcon">
      <p>Vous êtes déjà connecté impossible de s'inscrire !!</p>
    </section>
        <?php
    }
    ?>

