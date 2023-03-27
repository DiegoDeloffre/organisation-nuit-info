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



function deleteUser($idUser){
	global $bd;
    $sql="DELETE FROM users WHERE IdUser=:IdUser ";
	$marqueur=array('IdUser'=>$idUser);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$req->closeCursor();
}


/*
function createBatiment($NomBatiment,$NomSecondaire,$Adresse,$CodePostal,$Ville){
	global $bd;
	$sql="INSERT INTO Batiment (NomBatiment,NomSecondaire,Adresse,CodePostal,Ville) VALUES(:NomBatiment,:NomSecondaire,:Adresse,:CodePostal,:Ville)";
	$marqueur=array('NomBatiment'=>$NomBatiment,'NomSecondaire'=>$NomSecondaire,'Adresse'=>$Adresse,'CodePostal'=>$CodePostal,'Ville'=>$Ville);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$req->closeCursor();
}


function updateBatiment($idBat,$NomBatiment,$NomSecondaire,$Adresse,$CodePostal,$Ville){
	global $bd;
	
	$bat = getBatiment($NomBatiment);
	
	if(!empty($NomBatiment)&&$bat['NomBatiment']!=$NomBatiment){
		$sql="UPDATE Batiment SET NomBatiment=:NomBatiment WHERE  idBat=:idBat";
		$marqueur=array('NomBatiment'=>$NomBatiment,'idBat'=>$idBat);
		$req = $bd->prepare($sql);
		$req->execute($marqueur);
		$req->closeCursor();
	}
	if($bat['NomSecondaire']!=$NomSecondaire){
		$sql="UPDATE Batiment SET NomSecondaire=:NomSecondaire WHERE  idBat=:idBat";
		$marqueur=array('NomSecondaire'=>$NomSecondaire,'idBat'=>$idBat);
		$req = $bd->prepare($sql);
		$req->execute($marqueur);
		$req->closeCursor();
	}
	if($bat['Adresse']!=$Adresse){
		$sql="UPDATE Batiment SET Adresse=:Adresse WHERE  idBat=:idBat";
		$marqueur=array('Adresse'=>$Adresse,'idBat'=>$idBat);
		$req = $bd->prepare($sql);
		$req->execute($marqueur);
		$req->closeCursor();
	}
	if($bat['CodePostal']!=$CodePostal){
		$sql="UPDATE Batiment SET CodePostal=:CodePostal WHERE  idBat=:idBat";
		$marqueur=array('CodePostal'=>$CodePostal,'idBat'=>$idBat);
		$req = $bd->prepare($sql);
		$req->execute($marqueur);
		$req->closeCursor();
	}
	if($bat['Ville']!=$Ville){
		$sql="UPDATE Batiment SET Ville=:Ville WHERE  idBat=:idBat";
		$marqueur=array('Ville'=>$Ville,'idBat'=>$idBat);
		$req = $bd->prepare($sql);
		$req->execute($marqueur);
		$req->closeCursor();
	}

}
*/
?>