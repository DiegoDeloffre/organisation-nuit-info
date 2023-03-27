import React, { useState } from 'react';
import "../../styles/Utilisateur/Pages/Recrutement.css"
import Recrue from '../../components/Utilisateur/recrue';

import { Button } from '@material-ui/core';

function Recrutement() {
  const [demandeRecue, setdemandeRecue] = useState(false);
    /*const recruesComponents = recrues.map((recrue, index) => (
      <div key={index}>
        <Recrue {...recrue} />
        {index !== recrues.length - 1 && <hr />}
      </div>
    ));*/

    return (<div className="global">
      <div className='recrutement'>
        <h2>Recrutement</h2>
        {/*recruesComponents*/}
        <Recrue infoAgent={'Deloffre - Diego - DI5'} description={"Description de l'équipe Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec,         mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui."} demandeRecue={false} />
        <hr />
        <Recrue infoAgent={'Deloffre - Diego - DI5'} description={"Description de l'équipe Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec,         mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui."} demandeRecue={false} />
        <hr />
        <Recrue infoAgent={'Deloffre - Diego - DI5'} description={"Description de l'équipe Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec,         mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui."} demandeRecue={true}/>

        <Button variant="contained" color="primary" href="/accueil1">
          Retour
        </Button>
      </div>
    </div>
    );
  }

export default Recrutement;
