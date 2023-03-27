const url = "localhost"

const signup = async (mail, mdp, nom, prenom, promo, nomEquipe) => {

}

const login = async () => {
  const url = `${url}/api`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone: '0612345678', campaignId: 63080118, customerId: 318 })
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
    throw new Error('Une erreur est survenue lors de la requête');
  }
}


export {
  login, signup
};