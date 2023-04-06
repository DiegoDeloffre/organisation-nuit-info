const urlBase = "http://projetlibre/src/api/apiPHP/API"

const signup = async (mail, mdp, nom, prenom, filiere, nomEquipe, type) => {
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
      Filiere : filiere,
      Description : nomEquipe
    })
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error('La requête a échoué');
    }
    const data = await response.json();
    console.log(data[0].Description);
    return data;
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
    if (!response.ok) {
      throw new Error('La requête a échoué');
    }
    const data = await response.json();
    console.log(data[0].Description);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
  }
}

const getFilieres = async () => {
  const url = `${urlBase}/extract.php`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      action: 'ConnecterUtilisateur'
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
      action: 'recupContactsOrga'
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
  login, signup, getFilieres, getSalles, getAdmin
};