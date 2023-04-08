const urlBase = "http://projetlibre/src/api/apiPHP/API"

const inscription = async (mail, mdp, nom, prenom, filiere, type, nomEquipe) => {
  console.log(mail)
  console.log(mdp)
  console.log(type)
  console.log(nom)
  console.log(prenom)
  console.log(filiere)
  console.log(nomEquipe)
  const url = `${urlBase}/insert.php`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      action: 'CreerUtilisateur',
      Mail: mail,
      MDP: mdp,
      Type: type,
      Nom: nom,
      Prenom: prenom,
      Filiere: filiere,
      Description: nomEquipe
    })
  };

  try {
    const response = await fetch(url, requestOptions);
    console.log(response)
    if (!response.ok) {
      throw new Error('La requête a échoué');
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
  }
}

const supprimerCompte = async (id) => {
  const url = `${urlBase}/insert.php`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      action: 'SupprimerUtilisateur',
      IdUser: id
    })
  };

  try {
    const response = await fetch(url, requestOptions);
    console.log(response)
    if (!response.ok) {
      throw new Error('La requête a échoué');
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
  }
}

const login = async (mail, mdp) => {
  const url = `${urlBase}/extract.php`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      action: 'ConnecterUtilisateur',
      Mail: mail,
      MDP: mdp
    })
  };

  try {
    const response = await fetch(url, requestOptions);
    console.log(response)
    if (!response.ok) {
      throw new Error('La requête a échoué');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
  }
}

const getBloque = async () => {
  const url = `${urlBase}/extract.php`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      action: 'getBloque'
    })
  };

  try {
    const response = await fetch(url, requestOptions);
    console.log(response)
    if (!response.ok) {
      throw new Error('La requête a échoué');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
  }
}

const getAllFilieres = async () => {
  const url = `${urlBase}/extract.php`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      action: 'RecupFilieres'
    })
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error('La requête a échoué');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
  }
}

const getSalles = async () => {
  const url = `${urlBase}/extract.php`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      action: 'RecupSalles'
    })
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error('La requête a échoué');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
  }
}

const getAdmin = async () => {
  const url = `${urlBase}/extract.php`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      action: 'RecupContactsOrga'
    })
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error('La requête a échoué');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
  }
}




export {
  login, inscription, getAllFilieres, getSalles, getAdmin, supprimerCompte, getBloque
};