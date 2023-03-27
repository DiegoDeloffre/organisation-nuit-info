import React, { useState } from 'react';
import "../../styles/Utilisateur/Pages/AccueilSansEquipe.css"

import ProfilAgent from "../../components/Utilisateur/profilAgent";
import EquipeListe from "../../components/Utilisateur/equipeListe";

function AccueilSansEquipe() {
  const [hasJoinedATeam, sethasJoinedATeam] = useState(false);

  return (<div className="global">
    <h2>Accueil</h2>
    {
      hasJoinedATeam ? (
        <>
        <h2>Vous avez rejoint l'équipe</h2>
        <h3>Nom de l'équipe</h3>

        <h2>Le chef d'équipe</h2>
        <h3>Jean-Paul Michel</h3>
        <h3>jean-paul.michel@etu.univ-tours.fr</h3>

        <h2>Vous êtes dans la salle</h2>
        <h3>Non affectée (Attendez la réunion)</h3>
        </>
      ) :
        (
          <>
            <div className="left-big">
              <ProfilAgent infoAgent={'Deloffre - Diego - DI5'} />
            </div>

            <div className="right-big">
              <h2>Equipes</h2>
              <EquipeListe nomEquipe='Les apprentis aventuriers du code' />
              <hr />
              <EquipeListe nomEquipe='Lesgo' />
              <hr />
              <EquipeListe nomEquipe='Lesgo' />
            </div>
          </>
        )
    }
  </div >
  )
}

export default AccueilSansEquipe