<?php
//include 'utils.php';

function recupEquipe($IdUser){
    global $bd;
    $sql="SELECT DISTINCT membre.IdMembre,membre.Nom,membre.Prenom,filiere.Nom AS 'filiere' FROM membre INNER JOIN filiere INNER JOIN equipe INNER JOIN chef INNER JOIN users WHERE membre.IdEquipe=equipe.IdEquipe AND equipe.IdChef=chef.IdChef AND membre.IdFiliere = filiere.IdFiliere AND chef.IdUser = :IdUser";
	$marqueur=array('IdUser'=>$IdUser);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg["Membres"]=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();

    $sql="SELECT DISTINCT chef.Nom,chef.Prenom,filiere.Nom AS 'filiere' FROM chef INNER JOIN filiere INNER JOIN users WHERE chef.IdUser = :IdUser AND chef.IdFiliere = filiere.IdFiliere;
    ";
	$marqueur=array('IdUser'=>$IdUser);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg["Chef"]=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();
	return $enreg;
}

function recupDescEquipe($IdUser){
    global $bd;
    $sql="SELECT DISTINCT equipe.Description FROM equipe INNER JOIN chef INNER JOIN users WHERE chef.IdUser = :IdUser AND equipe.IdChef = chef.IdChef;
    ";
	$marqueur=array('IdUser'=>$IdUser);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();
	return $enreg;
}

function recupMaterielEquipe($IdUser){
    global $bd;
    $sql="SELECT DISTINCT equipe.NbEcran AS 'Ecrans', equipe.NbMulti AS 'Multiprises', equipe.NbSouris AS 'Souris', equipe.NbClavier AS 'Claviers' FROM equipe INNER JOIN chef INNER JOIN users WHERE chef.IdUser = :IdUser AND equipe.IdChef = chef.IdChef;
    ";
	$marqueur=array('IdUser'=>$IdUser);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();
	return $enreg;
}

function recupChoixEquipe($IdUser){
    global $bd;
    $sql="SELECT DISTINCT equipe.SalleEquipe, equipe.Isole FROM equipe INNER JOIN chef INNER JOIN users WHERE chef.IdUser = :IdUser AND equipe.IdChef = chef.IdChef;
    ";
	$marqueur=array('IdUser'=>$IdUser);
	$req = $bd->prepare($sql);
	$req->execute($marqueur);
	$enreg=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();
	return $enreg;
}

function recupEquipeRecrutant(){
    global $bd;
    $sql="SELECT DISTINCT membre.IdMembre,membre.Nom,membre.Prenom,filiere.Nom AS 'filiere' FROM membre INNER JOIN filiere INNER JOIN equipe INNER JOIN chef INNER JOIN users WHERE membre.IdEquipe=equipe.IdEquipe AND equipe.IdChef=chef.IdChef AND membre.IdFiliere = filiere.IdFiliere AND equipe.Recrute = 1";
	$req = $bd->prepare($sql);
	$req->execute();
	$enreg["Membres"]=$req->fetchAll(PDO::FETCH_ASSOC);
	$req->closeCursor();
}
?>