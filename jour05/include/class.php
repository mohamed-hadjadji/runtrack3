<?php

class user

{
  private $id = '';
  public $login = '';
  public $prenom = '';
  public $nom = '';
  public $mdp= '';
  public $email ='';

  public function register($login,$nom,$prenom,$email,$mdp) 
    {
        $connexion = new PDO('mysql:host=localhost;dbname=bigjob', 'root', '');
        $login = $_POST['login'];
        $mdp= password_hash($_POST["mdp1"], PASSWORD_DEFAULT, array('cost' => 12));
        $prenom = $_POST['prenom'];
        $nom =$_POST['nom'];
        $email=$_POST['mail'];
         if ($_POST['mdp1']==$_POST['mdp2'])
            {
            $reponse = $connexion->query("SELECT* FROM utilisateurs WHERE login='".$login."'");
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
                VALUES ('$login','$prenom','$nom','$email','$mdp')");      
           
            }
           }
           else
           {
              echo "<p class='erreur'><b>Les mots de passe doivent être identique!</b></p>";
           }

    }
   
}
?>