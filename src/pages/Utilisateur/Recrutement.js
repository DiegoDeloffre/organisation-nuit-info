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
      console.log(data)
      setChercheurs(data)
      console.log(chercheurs)

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
        <></>
      ) : (
        chercheurs.map((chercheur) => (
          <React.Fragment key={chercheur.IdChercheur}>
            <Recrue idChercheur={chercheur.IdChercheur} infoChercheur={chercheur.Nom + " " + chercheur.Prenom} updateChercheur={updateChercheur} description={"Description du chercheur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec,         mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui."} demandeRecue={false} />
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
