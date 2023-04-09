<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include '../controleur/bdd.php';
include_once '../model/userInsert.php';
include_once '../model/equipeInsert.php';
include_once '../model/utils.php';

if(!empty($_POST["action"])){
    $action = $_POST["action"];

    switch($action){
        case "CreerUtilisateur":
            if(!empty($_POST["Mail"]) && !empty($_POST["MDP"]) && !empty($_POST["Type"]) && !empty($_POST["Nom"]) &&
            !empty($_POST["Prenom"]) && !empty($_POST["Filiere"])){
                if(!empty($_POST["Description"])){
                    CreateNewAccount($_POST["Mail"],$_POST["MDP"],$_POST["Type"],$_POST["Nom"],$_POST["Prenom"],$_POST["Filiere"],$_POST["Description"]);
                }
                else{
                    CreateNewAccount($_POST["Mail"],$_POST["MDP"],$_POST["Type"],$_POST["Nom"],$_POST["Prenom"],$_POST["Filiere"],NULL);
                }
            } 
            break;
        
        case "SupprimerUtilisateur":
            if(!empty($_POST["IdUser"])){
                if(intval($_POST["IdUser"])){
                    deleteUser($_POST["IdUser"]);
                }
            }
            break;
        case "AjouterMembre":
            if(!empty($_POST["IdUser"]) && !empty($_POST["Nom"]) && !empty($_POST["Prenom"]) && !empty($_POST["Filiere"]) && !empty($_POST["Mail"])){
                insertMembre($_POST["IdUser"],$_POST["Nom"],$_POST["Prenom"],$_POST["Mail"],$_POST["Filiere"]);
            }
            break;
        case "SupprimerMembre":
            if(!empty($_POST["IdMembre"])){
                deleteMembre($_POST["IdMembre"]);
            }
            break;
        case "ModifierProfilEquipe":
            if(!empty($_POST["IdUser"]) && !empty($_POST["Description"])){
                UpdateTeamDescription($_POST["IdUser"],$_POST["Description"]);
            }    
            break;
        case "ModifierMateriel":
            if(!empty($_POST["IdUser"]) && !empty($_POST["NbMulti"]) && !empty($_POST["NbClavier"]) && !empty($_POST["NbEcran"]) && !empty($_POST["NbSouris"])){
                if(!empty($_POST["Autres"])){
                    UpdateTeamMateriel($_POST["IdUser"],$_POST["NbMulti"],$_POST["NbEcran"],$_POST["NbSouris"],$_POST["NbClavier"],$_POST["Autres"]);
                }else{
                    UpdateTeamMateriel($_POST["IdUser"],$_POST["NbMulti"],$_POST["NbEcran"],$_POST["NbSouris"],$_POST["NbClavier"]);
                }
                
            }     
            break;
        case "ModifierChoix":
            if(!empty($_POST["IdUser"]) && (!empty($_POST["SalleEquipe"]) || $_POST["SalleEquipe"] == 0) && ((!empty($_POST["Isole"]) || $_POST["Isole"] == 0))){
                UpdateTeamChoices($_POST["IdUser"],$_POST["SalleEquipe"],$_POST["Isole"]);
            }      
            break;
        case "ModifierNomEquipe": 
            if(!empty($_POST["IdUser"]) && !empty($_POST["Nom"])){
                UpdateTeamName($_POST["IdUser"],$_POST["Nom"]);
            }    
            break;
        case "AjouterOrganisateur":
            if(!empty($_POST["Mail"]) && !empty($_POST["MDP"]) && !empty($_POST["Type"])){
                
                CreateNewOrganisateur($_POST["Mail"],$_POST["MDP"],$_POST["Type"]);
            }    
            break;
        case "AjouterDemande":
            if(!empty($_POST["IdUser"]) && !empty($_POST["IdEquipe"])){
                AddDemande($_POST["IdUser"],$_POST["IdEquipe"]);
            }
            break;
        case "AccepterDemande":
            if(!empty($_POST["IdChercheur"]) && !empty($_POST["IdUser"])){
                AcceptDemande($_POST["IdUser"],$_POST["IdChercheur"]);
            }
            break;
        case "AffecterSalle":
            if(!empty($_POST["IdEquipe"]) && !empty($_POST["IdSalle"])){
                UpdateTeamSalle($_POST["IdEquipe"],$_POST["IdSalle"]);
            }
            break;
        case "ModifierProfilChercheur":
            if(!empty($_POST["IdUser"]) && !empty($_POST["Description"])){
                UpdateProfilChercheur($_POST["IdUser"],$_POST["Description"]);
            }
            break;
        case "BloquerInscriptions":
            setBloque();
            break;
        case "modifierEquipeRecrute":
            if(!empty($_POST["IdUser"])){
                echo json_encode(UpdateTeamRecrute($_POST["IdUser"]));
            }
            break;
        case "resetTable":
            resetTable();
            break;
            
    }

}



?>