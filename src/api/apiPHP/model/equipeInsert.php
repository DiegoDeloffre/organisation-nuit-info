<?php 

//include 'utils.php';

function insertMembre($IdUser,$Nom,$Prenom,$Mail,$Filiere){
    global $bd;

	$sql="INSERT INTO membre (IdEquipe,Nom,Prenom,Mail,IdFiliere) VALUES (:IdEquipe,:Nom,:Prenom,:Mail,:filiere)";
	$marqueur=array('IdEquipe'=>getIdEquipeFromIdUser($IdUser)[0],'Nom'=>$Nom,'Prenom'=>$Prenom,'Mail'=>$Mail,'filiere'=>getIdFiliereFromName($Filiere)[0]);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$req->closeCursor();
}

function deleteMembre($IdMembre){
	global $bd;
    $sql="DELETE FROM membre WHERE IdMembre=:IdMembre ";
	$marqueur=array('IdMembre'=>$IdMembre);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$req->closeCursor();
}

function UpdateTeamDescription($IdUser,$Description){
	global $bd;
    $sql="UPDATE equipe SET Description=:Description WHERE IdEquipe=:IdEquipe ";
	$marqueur=array('Description'=>$Description,'IdEquipe'=>getIdEquipeFromIdUser($IdUser)[0]);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$req->closeCursor();
}

function UpdateTeamMateriel($IdUser,$NbMulti,$NbEcran,$NbSouris,$NbClavier,$Autres){
	global $bd;
	
	$sql="UPDATE equipe INNER JOIN chef SET NbMulti=:NbMulti,NbEcran=:NbEcran,NbSouris=:NbSouris,NbClavier=:NbClavier,autres=:autres WHERE equipe.IdChef=chef.IdChef AND chef.IdUser=:IdUser ";
	$marqueur=array('NbClavier'=>$NbClavier,'NbMulti'=>$NbMulti,'NbEcran'=>$NbEcran,'NbSouris'=>$NbSouris,'IdUser'=>$IdUser,'autres'=>$Autres);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$req->closeCursor();
	
    
}

function UpdateTeamChoices($IdUser,$SalleEquipe,$Isole){
	global $bd;
    $sql="UPDATE equipe SET SalleEquipe=:SalleEquipe,Isole=:Isole WHERE IdEquipe=:IdEquipe ";
	$marqueur=array('SalleEquipe'=>$SalleEquipe,'Isole'=>$Isole,'IdEquipe'=>getIdEquipeFromIdUser($IdUser)[0]);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$req->closeCursor();
}

function UpdateTeamName($IdUser,$Nom){
	global $bd;
    $sql="UPDATE equipe SET Nom=:Nom WHERE IdEquipe=:IdEquipe ";
	$marqueur=array('Nom'=>$Nom,'IdEquipe'=>getIdEquipeFromIdUser($IdUser)[0]);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$req->closeCursor();
}

function AddDemande($IdUser,$IdEquipe){
    global $bd;

	$sql="INSERT INTO demande (IdChercheur,IdEquipe) VALUES (:IdChercheur,:IdEquipe)";
	$marqueur=array('IdChercheur'=>getIdChercheurFromIdUser($IdUser)[0],'IdEquipe'=>$IdEquipe);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$req->closeCursor();
}

function AcceptDemande($IdUser,$IdChercheur){
    global $bd;
	if(!empty(getDemande($IdChercheur,getIdEquipeFromIdUser($IdUser)[0]))){
		$sql="DELETE FROM demande WHERE IdChercheur=:IdChercheur";
		$marqueur=array('IdChercheur'=>$IdChercheur);
		$req = $bd->prepare($sql);
		$req->execute($marqueur);
		$req->closeCursor();

		$ChercheurInfo = getChercheurInfoFromId($IdChercheur);

		insertMembre($IdUser,$ChercheurInfo[0],$ChercheurInfo[1],getUserMailFromIdChercheur($IdChercheur)[0],getFiliereNameFromId($ChercheurInfo[2])[0]);

		$sql="UPDATE chercheur SET Recrute=:IdEquipe WHERE IdChercheur=:IdChercheur ";
		$marqueur=array('IdChercheur'=>$IdChercheur,'IdEquipe'=>getIdEquipeFromIdUser($IdUser)[0]);
		$req = $bd->prepare($sql);
		$req->execute($marqueur);
		$req->closeCursor();
	}
	
}


function UpdateTeamSalle($IdUser, $IdSalle){
	global $bd;
	$sql="UPDATE equipe SET IdSalle=:IdSalle WHERE IdEquipe=:IdEquipe";
	$marqueur=array('IdSalle'=>$IdSalle,'IdEquipe'=>getIdEquipeFromIdUser($IdUser)[0]);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$req->closeCursor();
}

function UpdateTeamRecrute($IdUser){
	global $bd;
	$IdEquipe = getIdEquipeFromIdUser($IdUser)[0];
	$sql="SELECT recrute FROM equipe WHERE IdEquipe=:IdEquipe";
	$marqueur=array('IdEquipe'=>$IdEquipe);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();
	
	if($enreg[0]["recrute"] == '1'){
		$sql="UPDATE equipe SET recrute= 0 WHERE IdEquipe=:IdEquipe";
		$marqueur=array('IdEquipe'=>$IdEquipe);
		$req = $bd->prepare($sql);
		$req->execute($marqueur);
		$req->closeCursor();
		return 0;
	}else{
		$sql="UPDATE equipe SET recrute= 1 WHERE IdEquipe=:IdEquipe";
		$marqueur=array('IdEquipe'=>$IdEquipe);
		$req = $bd->prepare($sql);
		$req->execute($marqueur);
		$req->closeCursor();

		return 1;
	}
	
}

?>