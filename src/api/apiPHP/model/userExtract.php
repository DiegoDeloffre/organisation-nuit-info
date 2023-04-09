<?php
include 'utils.php';

function connectUser($Mail,$MDP){
    global $bd;
    $sql="SELECT users.IdUser,type.Nom AS 'Type' FROM users INNER JOIN type WHERE users.Mail=:Mail AND users.MDP=:MDP AND type.IdType = users.IdType";
	$marqueur=array('Mail'=>$Mail,'MDP'=>encryptPassword($MDP));
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
    $sql="SELECT DISTINCT chercheur.IdChercheur, chercheur.Description, chercheur.Nom , chercheur.Prenom, chercheur.Recrute, users.Mail, filiere.Nom AS 'Filiere' FROM chercheur INNER JOIN users INNER JOIN filiere WHERE chercheur.IdUser = users.IdUser AND filiere.IdFiliere = chercheur.IdFiliere;
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
	$sql2="SELECT DISTINCT membre.IdMembre,membre.Nom, membre.Prenom, membre.Mail, filiere.Nom AS 'Filiere',salle.Nom AS 'Salle', equipe.Nom AS 'NomEquipe'
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

function recupNameParticipants(){
	global $bd;
    $sql="SELECT DISTINCT chef.Nom AS 'nom', chef.Prenom AS 'prenom', users.Mail AS 'mail'
	FROM chef
	INNER JOIN users ON users.IdUser = chef.IdUser
	UNION
	SELECT DISTINCT membre.Nom AS 'nom', membre.Prenom AS 'prenom', membre.Mail AS 'mail'
	FROM membre
	UNION
	SELECT DISTINCT chercheur.Nom AS 'nom', chercheur.Prenom AS 'prenom', users.Mail AS 'mail'
	FROM chercheur
	INNER JOIN users ON users.IdUser = chercheur.IdUser";
	$req = $bd->prepare($sql);
	$req->execute();
	$enreg=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();
	return json_encode($enreg);
}


function compare_user_lists($json1) {
    $list1 = json_decode($json1, true);
    $list2 = json_decode(recupNameParticipants(), true);
    $not_in_first_list = array();
    $not_in_second_list = array();
    foreach ($list1 as $user1) {
        $found = false;
        foreach ($list2 as $user2) {
            if ( (!empty($user1["prenom"]) && !empty($user2["prenom"]) &&
			!empty($user1["nom"]) & !empty($user2["nom"]) &&
			!empty($user1["mail"]) & !empty($user2["mail"])) && 
			(strtolower($user1["prenom"]) == strtolower($user2["prenom"]) &&
			strtolower($user1["nom"]) == strtolower($user2["nom"]) &&
			strtolower($user1["mail"]) == strtolower($user2["mail"]))) {
                $found = true;
                break;
            }
        }
        if (!$found) {
            $not_in_second_list[] = $user1;
        }
    }
    foreach ($list2 as $user2) {
        $found = false;
        foreach ($list1 as $user1) {
            if ((!empty($user1["prenom"]) && !empty($user2["prenom"]) &&
			!empty($user1["nom"]) & !empty($user2["nom"]) &&
			!empty($user1["mail"]) & !empty($user2["mail"])) && 
			(strtolower($user1["prenom"]) == strtolower($user2["prenom"]) &&
			strtolower($user1["nom"]) == strtolower($user2["nom"]) &&
			strtolower($user1["mail"]) == strtolower($user2["mail"]))) {
                $found = true;
                break;
            }
        }
        if (!$found) {
            $not_in_first_list[] = $user2;
        }
    }
    
    $result = array(
        "not_in_csv_list" => $not_in_first_list,
        "not_in_site_list" => $not_in_second_list
    );
    
    return $result;
}

?>

