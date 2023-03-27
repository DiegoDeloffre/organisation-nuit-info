import React from 'react';
import "../../styles/Utilisateur/Components/materiel.css"

function Materiel({title, valeur, setValeur}) {
    function incrementer() {
      setValeur(valeur + 1);
    }
  
    function decrementer() {
      if (valeur > 0) {
        setValeur(valeur - 1);
      }
    }
  
    return (
        <div className='materiel'>
          <h3 className='materiel-title'>{title}</h3>
          <input className='materiel-input' type="text" value={valeur} readOnly />
          <div className='materiel-buttons'>
            <button onClick={incrementer}>
              <span>&#9650;</span>
            </button>
            <button onClick={decrementer}>
              <span>&#9660;</span>
            </button>
          </div>
        </div>
    );
  
}

export default Materiel;
