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

function recupInfosChercheur($IdUser){
	global $bd;
    $sql="SELECT DISTINCT chercheur.Nom, chercheur.Prenom, filiere.Nom AS 'Filiere', users.Mail FROM chercheur INNER JOIN filiere INNER JOIN users WHERE chercheur.IdUser = :IdUser AND users.IdUser = chercheur.IdUser AND chercheur.IdFiliere = filiere.IdFiliere;
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
    $sql="SELECT DISTINCT chercheur.IdChercheur, chercheur.Description, chercheur.Nom , chercheur.Prenom, users.Mail, filiere.Nom AS 'Filiere' FROM chercheur INNER JOIN users INNER JOIN filiere WHERE chercheur.IdUser = users.IdUser AND filiere.IdFiliere = chercheur.IdFiliere;
    ";
	$req = $bd->prepare($sql);
	$req->execute();
	$i = 0;
	$enreg = array();
	foreach($req->fetchAll(PDO::FETCH_ASSOC) as $foo){
		$enreg[$i]["InfosChercheur"]= $foo;
		$sqlM="SELECT IdEquipe FROM demande WHERE IdChercheur= :IdChercheur";
		$reqM = $bd->prepare($sqlM);
		$marqueur=array('IdChercheur'=>$enreg[$i]["InfosChercheur"]["IdChercheur"]);
		$reqM->execute($marqueur);
		$enreg[$i]["DemandesChercheurs"]=$reqM->fetchAll(PDO::FETCH_ASSOC);
		$reqM->closeCursor();
		$i++;
	}
	$req->closeCursor();

   
	return $enreg;
}

function recupListeParticipant(){
	global $bd;
    $sql1="SELECT DISTINCT chef.IdUser,chef.Nom, chef.Prenom, users.Mail, filiere.Nom AS 'Filiere', salle.Nom AS 'Salle', equipe.Nom AS 'NomEquipe'
	FROM chef
	INNER JOIN users ON users.IdUser = chef.IdUser
	INNER JOIN filiere ON filiere.IdFiliere = chef.IdFiliere
	INNER JOIN equipe ON equipe.IdChef = chef.IdChef
	INNER JOIN salle ON salle.IdSalle = equipe.IdSalle
	";
	$sql2="SELECT DISTINCT membre.Nom, membre.Prenom, membre.Mail, filiere.Nom AS 'Filiere',salle.Nom AS 'Salle', equipe.Nom AS 'NomEquipe'
	FROM membre
	INNER JOIN filiere ON filiere.IdFiliere = membre.IdFiliere
	INNER JOIN equipe ON equipe.IdEquipe = membre.IdEquipe
	INNER JOIN salle ON salle.IdSalle = equipe.IdSalle
	";
	$sql3="SELECT DISTINCT chercheur.IdUser,chercheur.Nom, chercheur.Prenom, users.Mail, filiere.Nom AS 'Filiere'
	FROM chercheur
	INNER JOIN users ON users.IdUser = chercheur.IdUser
	INNER JOIN filiere ON filiere.IdFiliere = chercheur.IdFiliere;";
	$req = $bd->prepare($sql1);
	$req->execute();
	$enreg["Chefs"]=$req->fetchAll(PDO::FETCH_ASSOC);

	$req = $bd->prepare($sql2);
	$req->execute();
	$enreg["Membres"]=$req->fetchAll(PDO::FETCH_ASSOC);

	$req = $bd->prepare($sql3);
	$req->execute();
	$enreg["Chercheurs"]=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();
	return $enreg;
}

function getContactOrga(){
	global $bd;
    $sql="SELECT Mail FROM users WHERE IdType = 2;
    ";
	$req = $bd->prepare($sql);
	$req->execute();
	$enreg=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();
	return $enreg;
}

function getBloque(){
	global $bd;
    $sql="SELECT * FROM bloquerInscription";
	$req = $bd->prepare($sql);
	$req->execute();
	$enreg=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();

	if(empty($enreg)){
		return 0;
	} else{
		return 1;
	}
}

?>

