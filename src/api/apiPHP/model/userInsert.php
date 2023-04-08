<?php 
//include 'utils.php';

function CreateNewAccount($Mail,$Password,$Type,$Nom,$Prenom,$filiere,$Description){
	global $bd;

	if($Type == "chercheur"){
		$sql="INSERT INTO users (Mail,MDP,IdType) VALUES (:Mail,:MDP,(SELECT IdType FROM type WHERE Nom=:Type))";
		$marqueur=array('Mail'=>$Mail,'MDP'=>$Password,'Type'=>$Type);
		$req = $bd->prepare($sql);
		$req->execute($marqueur);
		$req->closeCursor();

		$sql="INSERT INTO chercheur (IdUser,Nom,Prenom,IdFiliere,Description) VALUES (:IdUser,:Nom,:Prenom,(SELECT IdFiliere FROM filiere WHERE Nom=:filiere),:Description)";
		$marqueur=array('IdUser'=>getUserMail($Mail)[0],'Nom'=>$Nom,'Prenom'=>$Prenom,'filiere'=>$filiere,'Description'=>$Description);
		$req = $bd->prepare($sql);
		$req->execute($marqueur);
		$req->closeCursor();
	}
	if($Type == "chef"){
		$sql="INSERT INTO users (Mail,MDP,IdType) VALUES (:Mail,:MDP,(SELECT IdType FROM type WHERE Nom=:Type))";
		$marqueur=array('Mail'=>$Mail,'MDP'=>$Password,'Type'=>$Type);
		$req = $bd->prepare($sql);
		$req->execute($marqueur);
		$req->closeCursor();

		$sql="INSERT INTO chef (IdUser,Nom,Prenom,Idfiliere) VALUES (:IdUser,:Nom,:Prenom,(SELECT IdFiliere FROM filiere WHERE Nom=:filiere))";
		$marqueur=array('IdUser'=>getUserMail($Mail)[0],'Nom'=>$Nom,'Prenom'=>$Prenom,'filiere'=>$filiere);
		$req = $bd->prepare($sql);
		$req->execute($marqueur);
		$req->closeCursor();

		$sql="INSERT INTO equipe (IdChef,Nom,Recrute) VALUES ((SELECT IdChef FROM chef WHERE IdUser = :IdUser),:Prenom,0)";
		$marqueur=array('IdUser'=>getUserMail($Mail)[0],'Prenom'=>$Prenom);
		$req = $bd->prepare($sql);
		$req->execute($marqueur);
		$req->closeCursor();
	}
	
}
function CreateNewOrganisateur($Mail,$Password,$Type){
	global $bd;

	$sql="INSERT INTO users (Mail,MDP,IdType) VALUES (:Mail,:MDP,(SELECT IdType FROM type WHERE Nom=:Type))";
	$marqueur=array('Mail'=>$Mail,'MDP'=>$Password,'Type'=>$Type);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$req->closeCursor();
}



function deleteUser($idUser){
	global $bd;
    $sql="DELETE FROM users WHERE IdUser=:IdUser ";
	$marqueur=array('IdUser'=>$idUser);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$req->closeCursor();
}

function UpdateProfilChercheur($IdUser,$Description){
	global $bd;
    $sql="UPDATE chercheur SET Description=:Description WHERE IdUser=:IdUser ";
	$marqueur=array('Description'=>$Description,'IdUser'=>$IdUser);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$req->closeCursor();
}

function setBloque(){
	global $bd;
    $sql="SELECT * FROM bloquerInscription";
	$req = $bd->prepare($sql);
	$req->execute();
	$enreg=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();

	if(empty($enreg)){
		$sql="INSERT INTO bloquerInscription (bloque) VALUES (1)";
		$req2 = $bd->prepare($sql);
		$req2->execute();
		$req2->closeCursor();
	} else{
		$sql="DELETE FROM bloquerInscription WHERE bloque = 1";
		$req3 = $bd->prepare($sql);
		$req3->execute();
		$req3->closeCursor();
	}
}

function resetTable(){
	global $bd;
    $sql="DELETE FROM demande
	
	DELETE FROM bloquerInscription
	
	DELETE FROM users
	WHERE IdType != 1;";
	$req = $bd->prepare($sql);
	$req->execute();
	$req->closeCursor();
}

?>