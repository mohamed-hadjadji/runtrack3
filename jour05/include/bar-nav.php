<?php
    if (isset($_SESSION['login'])==false)
    {
    ?>
  

  <nav class="menu">
  
    <li class="menu-item"><a href="index.php">Accueil</a></li>
    <li class="menu-item"><a href="connexion.php">Connexion</a></li>
    <li class="menu-item"><a href="inscription.php">Inscription</a></li>
   
</nav>

    
     <?php
    }
     elseif(isset($_SESSION['login'])==true)

    {
       
    ?>
    <nav class="menu">
      <ol>
      
        <li class="menu-item"><a href="index.php">Home</a></li>
        <li class="menu-itemc"><a href="inscription.php?deconnexion=true">Déconnexion</a>
        </li>
      </ol>
        
      
    </nav>
 
     <?php
                
                if(isset($_GET['deconnexion']))
                { 
                   if($_GET['deconnexion']==true)
                   {  
                      session_unset();
                      header("location:connexion.php");
                   }
                }
    
    }
             
    ?>