<?php
   session_start();

  include("include/class.php");
  
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
        <div id="resultat">
      
    </div>
        <section id="conteneur">
        <h1> Inscription </h1>

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
                <input id="password" type="password" name='mdp1' required />
            
                <label>Confirmation Password</label>
                <input type="password" name='mdp2' required />
            
            <input id="bouton" type='submit' name='valider' value='Inscription' />

           <?php

           $register = new user();

           $login = $_POST['login'];
           $mdp= password_hash($_POST["mdp1"], PASSWORD_DEFAULT, array('cost' => 12));
           $nom =$_POST['nom'];
           $prenom = $_POST['prenom'];       
           $email=$_POST['mail'];
           $register->register($login,$nom,$prenom,$email,$mdp);           
        
    ?> 

        </form>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
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

