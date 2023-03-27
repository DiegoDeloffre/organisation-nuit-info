<?php
$dbName="";
$utilisateur="";
$mdp="";
            try{
			 $bd = new PDO ( "mysql:host=mysql-nuitinfosite.alwaysdata.net;dbname=nuitinfosite_bdd","305937_bdd", "NuitInfoSite37+*" );
			 $bd->exec('SET NAMES utf8');
			}
			catch (Exception $e) {
				die ("Erreur: Connexion à la base impossible");
            }
?>