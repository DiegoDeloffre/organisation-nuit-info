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
?>

