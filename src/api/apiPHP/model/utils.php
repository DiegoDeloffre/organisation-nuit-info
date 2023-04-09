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

function encryptPassword($MDP){
	// Store the cipher method
	$ciphering = "AES-128-CTR";
	
	// Use OpenSSl Encryption method
	$iv_length = openssl_cipher_iv_length($ciphering);
	$options = 0;
	
	// Non-NULL Initialization Vector for encryption
	$encryption_iv = '1234567891011121';
	
	// Store the encryption key
	$encryption_key = "NuitInfo37";
	
	// Use openssl_encrypt() function to encrypt the data
	$encryption = openssl_encrypt($MDP, $ciphering,
				$encryption_key, $options, $encryption_iv);
	
	return $encryption;

}

function decryptPassword($MDP){
	// Non-NULL Initialization Vector for decryption
	$decryption_iv = '1234567891011121';
	
	// Store the decryption key
	$decryption_key = "NuitInfo37";
	
	// Use openssl_decrypt() function to decrypt the data
	$decryption=openssl_decrypt ($encryption, $ciphering, 
			$decryption_key, $options, $decryption_iv);
			
	return $decryption;
}


?>