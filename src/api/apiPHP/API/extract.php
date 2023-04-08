<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

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
            echo json_encode(recupChercheur());
            break;
        case "AjouterOrganisateur":
            //
            break;
        case "RecupListeParticipants":
            echo json_encode(recupListeParticipant());
            break;
        case "RecupListeEquipe":
            echo json_encode(recupListeEquipe());
            break;
        case "RecupListeMaterielsEquipe":
            echo json_encode(recupListeMaterielEquipe());
            break;
        case "RecupListeMaterielsGlobale":
            echo json_encode(recupListeMaterielGlobale());
            break;
        case "RecupSalleEquipe":
            if(!empty($_POST["IdUser"])){
                echo json_encode(recupSalleEquipe($_POST["IdUser"]));
            }
            break;
        case "RecupSalles":
            echo json_encode(getAllSalles());
            break;
        case "RecupFilieres":
            echo json_encode(getAllFilieres());
            break;
        case "RecupContactsOrga":
            echo json_encode(getContactOrga());
            break;
        case "RecupInfosChercheur":
            if(!empty($_POST["IdUser"])){
                echo json_encode(recupInfosChercheur($_POST["IdUser"]));
            }
            break;
        case "RecupNomEquipe":
            if(!empty($_POST["IdUser"])){
                echo json_encode(getNomEquipe($_POST["IdUser"]));
            }
            break;
        case "RecupSalleEquipe":
            if(!empty($_POST["IdUser"])){
                echo json_encode(getSalleEquipe($_POST["IdUser"]));
            }
            break;
        case "getBloque":
            echo json_encode(getBloque());
            break;
        case "ComparerListes":
            if(!empty(($_POST["JsonList"]))){
                echo json_encode(compare_user_lists($_POST["JsonList"]));
            }
            break;
            
    }

}



?>