import React, { useState, useEffect } from 'react';
import "../../styles/Utilisateur/Pages/AccueilSansEquipe.css"

import ProfilAgent from "../../components/Utilisateur/profilAgent";
import EquipeListe from "../../components/Utilisateur/equipeListe";
import { getEquipesRecrutant } from '../../api/apiReact/apiUtilisateurs';

function AccueilSansEquipe() { 
  const [hasJoinedATeam, sethasJoinedATeam] = useState(false);
  const [equipesQuiRecrutent, setEquipesQuiRecrutent] = useState([]);

  useEffect(() => {
    const getEquipesQuiRecrutent = async () => {
      let data = await getEquipesRecrutant();
      setEquipesQuiRecrutent(data);
    };

    getEquipesQuiRecrutent();
  }, []);

  return (<div className="global">
    <h2>Accueil</h2>
    {hasJoinedATeam ? (
      <>
        <h2>Vous avez rejoint l'équipe</h2>
        <h3>Nom de l'équipe</h3>

        <h2>Le chef d'équipe</h2>
        <h3>Jean-Paul Michel</h3>
        <h3>jean-paul.michel@etu.univ-tours.fr</h3>

        <h2>Vous êtes dans la salle</h2>
        <h3>Non affectée (Attendez la réunion)</h3>
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