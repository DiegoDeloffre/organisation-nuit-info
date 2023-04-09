import React, { useState, useEffect } from 'react';
import "../../styles/Utilisateur/Pages/AccueilSansEquipe.css"

import ProfilAgent from "../../components/Utilisateur/profilAgent";
import EquipeListe from "../../components/Utilisateur/equipeListe";
import { getEquipesRecrutant, getInfosEquipeFromChercheur } from '../../api/apiReact/apiUtilisateurs';

function AccueilSansEquipe() {
  const [hasJoinedATeam, sethasJoinedATeam] = useState(false);
  const [infosEquipe, setInfosEquipe] = useState([]);
  const [equipesQuiRecrutent, setEquipesQuiRecrutent] = useState([]);

  useEffect(() => {
    const getInfosEquipe = async () => {
      let data = await getInfosEquipeFromChercheur(parseInt(localStorage.idUser,10));
      if (data.length !== 0) {
        sethasJoinedATeam(true)
        setInfosEquipe(data[0])
      }
      console.log(data)
    };

    getInfosEquipe();

    const getEquipesQuiRecrutent = async () => {
      let data = await getEquipesRecrutant();
      if (data.length !== 0) {
        setEquipesQuiRecrutent(data);
      }
    };

    getEquipesQuiRecrutent();
  }, []);

  return (<div className="global">
    <h2>Accueil</h2>
    {hasJoinedATeam ? (
      <>
        <h2>Vous avez rejoint l'équipe</h2>
        <h3>{infosEquipe.Nom}</h3>

        <h2>Le chef d'équipe</h2>
        <h3>{infosEquipe.NomChef} {infosEquipe.PrenomChef}</h3>
        <h3>{infosEquipe.MailChef}</h3>

        <h2>Vous êtes dans la salle</h2>
        <h3>{infosEquipe.Salle !== "" ? infosEquipe.Salle : "Pas de salle affectée"}</h3>
      </>
    ) : (
      <>
        <div className="left-big">
          <ProfilAgent />
        </div>

        <div className="right-big">
          <h2>Equipes</h2>
          {equipesQuiRecrutent.map((equipe) => (
            <React.Fragment key={equipe.Equipe.IdEquipe}>
              <EquipeListe
                idEquipe={equipe.Equipe.IdEquipe}
                nomEquipe={equipe.Equipe.Nom}
                description={equipe.Equipe.Description}
                isole={equipe.Equipe.Isole}
                salleEquipe={equipe.Equipe.SalleEquipe}
                membres={equipe.Membres}
                chef={equipe.Equipe.MailChef}
                nomChef={equipe.Equipe.NomChef}
                prenomChef={equipe.Equipe.PrenomChef}
                demandes={equipe.Demandes}
              />
              <hr />
            </React.Fragment>
          ))}
        </div>
      </>
    )}
  </div>
  );
}

export default AccueilSansEquipe