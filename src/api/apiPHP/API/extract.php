<?php
header('Content-Type: application/json');

include '../controleur/bdd.php';
include_once '../model/userExtract.php';
include_once'../model/equipeExtract.php';

if(!empty($_POST["action"])){
    $action = $_POST["action"];

    switch($action){
        case "ConnecterUtilisateur":
            if(!empty($_POST["Mail"]) && !empty($_POST["MDP"])){
                echo json_encode(connectUser($_POST["Mail"],$_POST["MDP"]));
            }
            break;
        
        case "RecupEquipe":
            if(!empty($_POST["IdUser"])){
                echo json_encode(recupEquipe($_POST["IdUser"]));
            }
            break;
        case "RecupProfilEquipe":
            if(!empty($_POST["IdUser"])){
                echo json_encode(recupDescEquipe($_POST["IdUser"]));
            }
            break;
        case "RecupMateriels":
            if(!empty($_POST["IdUser"])){
                echo json_encode(recupMaterielEquipe($_POST["IdUser"]));
            }
            break;
        case "RecupChoix":
            if(!empty($_POST["IdUser"])){
                echo json_encode(recupChoixEquipe($_POST["IdUser"]));
            }
            break;
        case "RecupProfilChercheur":
            if(!empty($_POST["IdUser"])){
                echo json_encode(recupDescChercheur($_POST["IdUser"]));
            }
            break;
        case "RecupEquipesQuiRecrutent":
            echo json_encode(recupEquipeRecrutant());
            break;
        case "RecupChercheurs":
            //
            break;
        case "AjouterOrganisateur":
            //
            break;
        case "RecupListeParticipants":
            //
            break;
        case "RecupListeEquipe":
            //
            break;
        case "RecupListeMateriels":
            //
            break;
    }

}



?>