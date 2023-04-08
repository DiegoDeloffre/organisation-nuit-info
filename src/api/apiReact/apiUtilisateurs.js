const urlBase = "http://projetlibre/src/api/apiPHP/API";

const getProfilChercheur = async (id) => {
    const url = `${urlBase}/extract.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'RecupProfilChercheur',
            IdUser: 23
        })
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }
        const data = await response.json();
        return data[0].Description;
    } catch (error) {
        console.error(error);
        throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
    }
}

const modifierProfilChercheur = async (id, description) => {
    const url = `${urlBase}/insert.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'ModifierProfilChercheur',
            IdUser: id,
            Description : description
        })
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }
    } catch (error) {
        console.error(error);
        throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
    }
}

const getInfosChercheur = async (id) => {
    const url = `${urlBase}/extract.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'RecupInfosChercheur',
            IdUser: 23
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

const getEquipesRecrutant = async () => {
    const url = `${urlBase}/extract.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'RecupEquipesQuiRecrutent'
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

const getProfilEquipe = async (id) => {
    const url = `${urlBase}/extract.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'RecupProfilEquipe',
            IdUser: id
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

const modifierProfilEquipe = async (id, description) => {
    const url = `${urlBase}/insert.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'ModifierProfilEquipe',
            IdUser: id, 
            Description : description
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

const getNomEquipe = async (id) => {
    const url = `${urlBase}/extract.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'RecupNomEquipe',
            IdUser: id
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
const modifierNomEquipe = async (id, nom) => {
    const url = `${urlBase}/insert.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'ModifierNomEquipe',
            IdUser: id,
            Nom: nom
        })
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }
    } catch (error) {
        console.error(error);
        throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
    }
}

const getMembres = async (id) => {
    const url = `${urlBase}/extract.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'RecupEquipe',
            IdUser: id
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

const ajouterMembreEquipe = async (id, nom, prenom, mail, filiere) => {
    const url = `${urlBase}/insert.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'AjouterMembre',
            IdUser: id, 
            Nom: nom,
            Prenom: prenom, 
            Mail: mail, 
            Filiere: filiere
        })
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }
    } catch (error) {
        console.error(error);
        throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
    }
}

const supprimerMembreEquipe = async (id) => {
    const url = `${urlBase}/insert.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'SupprimerMembre',
            IdMembre: id
        })
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }
    } catch (error) {
        console.error(error);
        throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
    }
}

const getMateriels = async (id) => {
    const url = `${urlBase}/extract.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'RecupMateriels',
            IdUser: id
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

const modifierMaterielEquipe = async (id, nbMultiprises, nbEcrans, nbSouris, nbClaviers, autres) => {
    const url = `${urlBase}/insert.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'ModifierMateriel',
            IdUser: id, 
            NbMulti: nbMultiprises,
            NbEcran: nbEcrans,
            NbSouris : nbSouris,
            NbClavier : nbClaviers,
            Autres : autres
        })
    };

    try {
        console.log(requestOptions)
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

const getChoixEquipe = async (id) => {
    const url = `${urlBase}/extract.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'RecupChoix',
            IdUser: id
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

const modifierChoixEquipe = async (id, salleEquipee, seul) => {
    const url = `${urlBase}/insert.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'ModifierChoix',
            IdUser: id, 
            SalleEquipe: salleEquipee,
            Isole: seul
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

const getEquipeRecrute = async (id) => {
    const url = `${urlBase}/extract.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'RecupProfilChercheur',
            IdUser: 23
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

const modifierEquipeRecrute = async (id) => {
    const url = `${urlBase}/insert.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'modifierEquipeRecrute',
            IdUser: id
        })
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }
    } catch (error) {
        console.error(error);
        throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
    }
}

const getChercheurs = async () => {
    const url = `${urlBase}/extract.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'RecupChercheurs'
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

const accepterDemande = async (idUser, idChercheur) => {
    const url = `${urlBase}/insert.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'AccepterDemande',
            IdUser: idUser,
            IdChercheur: idChercheur
        })
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }
    } catch (error) {
        console.error(error);
        throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
    }
}

const envoyerDemande = async (idChercheur, idEquipe) => {
    const url = `${urlBase}/insert.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'AjouterDemande',
            IdUser: idChercheur,
            IdEquipe: idEquipe
        })
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }
    } catch (error) {
        console.error(error);
        throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
    }
}

const getSalle = async (id) => {
    const url = `${urlBase}/extract.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'RecupSalleEquipe',
            IdUser: id
        })
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(`Une erreur est survenue lors de la requête: ${error.message}`);
    }
}

export {
    getSalle, envoyerDemande, accepterDemande, getChercheurs, modifierEquipeRecrute, modifierChoixEquipe, modifierMaterielEquipe,
    supprimerMembreEquipe, ajouterMembreEquipe, modifierNomEquipe, modifierProfilEquipe, getProfilEquipe, getEquipesRecrutant,
    modifierProfilChercheur, getProfilChercheur, getChoixEquipe, getMateriels, getMembres, getInfosChercheur, getNomEquipe, getEquipeRecrute
};