import React, { useState, useEffect } from 'react';
import "../../styles/Utilisateur/Components/materiels.css"

import Materiel from './materiel';

import { Button } from '@material-ui/core';

import { getMateriels,modifierMaterielEquipe } from "../../api/apiReact/apiUtilisateurs";

function Materiels() {
  const [valeur, setValeur] = useState(0);
  const [valeur1, setValeur1] = useState(0);
  const [valeur2, setValeur2] = useState(0);
  const [valeur3, setValeur3] = useState(0);
  const [valeur4, setValeur4] = useState("");
  const [isButtonCliquable, setIsButtonCliquable] = useState(false);
  const [valeursOriginales, setValeursOriginales] = useState([]);

  useEffect(() => {
    recupMateriel();
  }, []);

  const recupMateriel = async () => {
    let data = await getMateriels(4);
    setValeur(parseInt(data[0].Multiprises, 10))
    setValeur1(parseInt(data[0].Ecrans, 10))
    setValeur2(parseInt(data[0].Claviers, 10))
    setValeur3(parseInt(data[0].Souris, 10))
    setValeur4(data[0].autres)
    setValeursOriginales([parseInt(data[0].Multiprises, 10), parseInt(data[0].Ecrans, 10), parseInt(data[0].Claviers, 10), parseInt(data[0].Souris, 10), data[0].autres]);
    setIsButtonCliquable(false);
  };

  const modifierMateriel = async () => {
    await modifierMaterielEquipe(4, valeur, valeur1, valeur2, valeur3, valeur4);
    recupMateriel()
  };

  const handleChangeAutres = (event) => {
    setValeur4(event.target.value);
  };

  function handleValeurChange(index, nouvelleValeur) {
    switch (index) {
      case 0:
        setValeur(nouvelleValeur);
        break;
      case 1:
        setValeur1(nouvelleValeur);
        break;
      case 2:
        setValeur2(nouvelleValeur);
        break;
      case 3:
        setValeur3(nouvelleValeur);
        break;
      
      default:
        break;
    }
  }

  useEffect(() => {
    if (valeursOriginales[0] === undefined) {
      setIsButtonCliquable(false);
    } else if (valeur !== valeursOriginales[0] || valeur1 !== valeursOriginales[1]
      || valeur2 !== valeursOriginales[2] || valeur3 !== valeursOriginales[3] || valeur4 !== valeursOriginales[4]) {
      setIsButtonCliquable(true);
    } else {
      setIsButtonCliquable(false);
    }
  }, [valeur, valeur1, valeur2, valeur3, valeur4]);

  return (
    <div className="materiels">
      <h2>Matériels</h2>
      <Materiel title="Multiprise" valeur={valeur} setValeur={(v) => handleValeurChange(0, v)} />
      <Materiel title="Ecran" valeur={valeur1} setValeur={(v) => handleValeurChange(1, v)} />
      <Materiel title="Clavier" valeur={valeur2} setValeur={(v) => handleValeurChange(2, v)} />
      <Materiel title="Souris" valeur={valeur3} setValeur={(v) => handleValeurChange(3, v)} />
      <div className='materiel autres'>
        <h3 className='materiel-title'>Autres</h3>
        <input className='materiel-input' type="text" value={valeur4} onChange={handleChangeAutres} />
      </div>

      <Button variant="contained" color="primary" disabled={!isButtonCliquable} onClick={modifierMateriel}>
        Valider
      </Button>
    </div>
  );

}

export default Materiels