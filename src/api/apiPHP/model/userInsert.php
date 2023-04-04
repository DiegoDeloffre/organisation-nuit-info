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
function CreateNewOrganisateur($Mail,$Password){
	global $bd;

	$sql="INSERT INTO users (Mail,MDP,IdType) VALUES (:Mail,:MDP,2)";
	$marqueur=array('Mail'=>$Mail,'MDP'=>$Password);
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
/*
function setBloque(){

}
*/
?>