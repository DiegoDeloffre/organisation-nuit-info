<?php

require('../controleur/bdd.php');

function getUserMail($Mail){
	global $bd;
    $sql="SELECT * FROM users WHERE BINARY Mail=BINARY :Mail";
	$marqueur=array('Mail'=>$Mail);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg=$req->fetchAll();
	$req->closeCursor();
	if(!empty($enreg)){
		return $enreg[0];
	}
	return $enreg;
}

function getIdEquipeFromIdUser($IdUser){
    global $bd;
    $sql="SELECT IdEquipe FROM equipe INNER JOIN chef WHERE equipe.IdChef = chef.IdChef AND chef.IdUser=:IdUser";
	$marqueur=array('IdUser'=>$IdUser);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg=$req->fetchAll();
	$req->closeCursor();
    return $enreg[0];

}

function getIdFiliereFromName($Name){
    global $bd;
    $sql="SELECT IdFiliere FROM filiere WHERE Nom=:Name";
	$marqueur=array('Name'=>$Name);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg=$req->fetchAll();
	$req->closeCursor();
    return $enreg[0];
}

function getFiliereNameFromId($IdFiliere){
    global $bd;
    $sql="SELECT Nom FROM filiere WHERE IdFiliere=:IdFiliere";
	$marqueur=array('IdFiliere'=>$IdFiliere);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg=$req->fetchAll();
	$req->closeCursor();
    return $enreg[0];

}

function getIdChercheurFromIdUser($IdUser){
    global $bd;
    $sql="SELECT IdChercheur FROM chercheur WHERE IdUser=:IdUser";
	$marqueur=array('IdUser'=>$IdUser);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg=$req->fetchAll();
	$req->closeCursor();
    return $enreg[0][0];
}

function getChercheurInfoFromId($IdChercheur){
	global $bd;
    $sql="SELECT Nom,Prenom,IdFiliere FROM chercheur WHERE IdChercheur=:IdChercheur";
	$marqueur=array('IdChercheur'=>$IdChercheur);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg=$req->fetchAll();
	$req->closeCursor();
    return $enreg[0];
}

function getUserMailFromIdChercheur($IdChercheur){
	global $bd;
    $sql="SELECT Mail FROM users WHERE IdUser= (SELECT IdUser FROM chercheur WHERE IdChercheur=:IdChercheur)";
	$marqueur=array('IdChercheur'=>$IdChercheur);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg=$req->fetchAll();
	$req->closeCursor();
    return $enreg[0];
}

function getUserIdFromIdChercheur($IdChercheur){
	global $bd;
    $sql="SELECT IdUser FROM users WHERE IdUser= (SELECT IdUser FROM chercheur WHERE IdChercheur=:IdChercheur)";
	$marqueur=array('IdChercheur'=>$IdChercheur);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg=$req->fetchAll();
	$req->closeCursor();
    return $enreg[0];
}



function getDemande($IdChercheur, $IdEquipe){
	global $bd;
    $sql="SELECT * FROM demande WHERE IdChercheur=:IdChercheur AND IdEquipe=:IdEquipe";
	$marqueur=array('IdChercheur'=>$IdChercheur,'IdEquipe'=>$IdEquipe);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();
    return $enreg;
}

?>