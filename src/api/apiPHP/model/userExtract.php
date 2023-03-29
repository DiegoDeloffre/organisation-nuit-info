<?php
//include 'utils.php';

function connectUser($Mail,$MDP){
    global $bd;
    $sql="SELECT users.IdUser,type.Nom AS 'Type' FROM users INNER JOIN type WHERE users.Mail=:Mail AND users.MDP=:MDP AND type.IdType = users.IdType";
	$marqueur=array('Mail'=>$Mail,'MDP'=>$MDP);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();
	if(!empty($enreg)){
		return $enreg[0];
	}
    else{
		return 0;
	}
}

function recupDescChercheur($IdUser){
    global $bd;
    $sql="SELECT DISTINCT chercheur.Description FROM chercheur WHERE chercheur.IdUser = :IdUser;
    ";
	$marqueur=array('IdUser'=>$IdUser);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();
	return $enreg;
}

function recupChercheur(){
    global $bd;
    $sql="SELECT DISTINCT chercheur.IdChercheur, chercheur.Nom , chercheur.Prenom, users.Mail, filiere.Nom FROM chercheur INNER JOIN users INNER JOIN filiere WHERE chercheur.IdUser = users.IdUser AND filiere.IdFiliere = chercheur.IdFiliere;
    ";
	$req = $bd->prepare($sql);
	$req->execute();
	$enreg=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();
	return $enreg;
}

function recupListeParticipant(){
	global $bd;
    $sql="SELECT DISTINCT chef.Nom, chef.Prenom, users.Mail, filiere.Nom AS 'Filiere'
	FROM chef
	INNER JOIN users ON users.IdUser = chef.IdUser
	INNER JOIN filiere ON filiere.IdFiliere = chef.IdFiliere
	UNION
	SELECT DISTINCT membre.Nom, membre.Prenom, membre.Mail, filiere.Nom AS 'Filiere'
	FROM membre
	INNER JOIN filiere ON filiere.IdFiliere = membre.IdFiliere
	UNION
	SELECT DISTINCT chercheur.Nom, chercheur.Prenom, users.Mail, filiere.Nom AS 'Filiere'
	FROM chercheur
	INNER JOIN users ON users.IdUser = chercheur.IdUser
	INNER JOIN filiere ON filiere.IdFiliere = chercheur.IdFiliere;";
	$req = $bd->prepare($sql);
	$req->execute();
	$enreg=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();
	return $enreg;
}
?>

