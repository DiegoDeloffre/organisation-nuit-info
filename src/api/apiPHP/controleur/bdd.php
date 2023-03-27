<?php
$dbName="";
$utilisateur="";
$mdp="";
            try{
			 $bd = new PDO ( "mysql:http://localhost/phpmyadmin/index.php?route=/&route=%2F ;dbname=nuitinfosite","root", "root" );
			 $bd->exec('SET NAMES utf8');
			}
			catch (Exception $e) {
				die ("Erreur: Connexion à la base impossible");
            }
?>