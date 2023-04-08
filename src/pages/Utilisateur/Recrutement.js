import React, { useState, useEffect } from 'react';
import "../../styles/Utilisateur/Pages/Recrutement.css"
import Recrue from '../../components/Utilisateur/recrue';

import { Button } from '@material-ui/core';

import { getChercheurs } from '../../api/apiReact/apiUtilisateurs';

function Recrutement() {
  const [demandeRecue, setdemandeRecue] = useState(false);
  const [chercheurs, setChercheurs] = useState([]);

  useEffect(() => {
    const recupChercheurs = async () => {
      let data = await getChercheurs();
      setChercheurs(data)
    };
    recupChercheurs();
  }, []);

  const updateChercheur = async () => {
    let data = await getChercheurs();
    setChercheurs(data)
  };

  return (<div className="global">
    <div className='recrutement'>
      <h2>Recrutement</h2>
      {chercheurs.length === 0 ? (
        <> oui</>
      ) : (
        chercheurs.map((chercheur) => (
          <React.Fragment key={chercheur.InfosChercheur.IdChercheur}>
            <Recrue idChercheur={chercheur.InfosChercheur.IdChercheur} infoChercheur={chercheur.InfosChercheur.Nom + " " + chercheur.InfosChercheur.Prenom + " " + chercheur.InfosChercheur.Filiere} updateChercheur={updateChercheur} description={chercheur.InfosChercheur.Description} demandeRecue={chercheur.DemandesChercheurs.length === 0 ? false : true} />
            <hr />
          </React.Fragment>
        ))
      )}

      <Button variant="contained" color="primary" href="/accueil1">
        Retour
      </Button>
    </div>
  </div>
  );
}

export default Recrutement;
