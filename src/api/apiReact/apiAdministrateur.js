const urlBase = "http://projetlibre/src/api/apiPHP/API";

const getParticipants = async () => {
    const url = `${urlBase}/extract.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'RecupListeParticipants'
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

const getEquipes = async () => {
    const url = `${urlBase}/extract.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'RecupListeEquipe'
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

const getMaterielsGlobal = async () => {
    const url = `${urlBase}/extract.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'RecupListeMaterielsGlobale'
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

const getMaterielsParEquipe = async () => {
    const url = `${urlBase}/extract.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'RecupListeMaterielsEquipe'
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

const ajouterOrganisateur = async (mail, mdp, type) => {
    const url = `${urlBase}/extract.php`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            action: 'AjouterOrganisateur',
            Mail: mail,
            MDP: mdp,
            Type: type
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

const resetDatabase = async () => {

}

const bloquerInscriptions = async () => {

}

const comparerListes = async () => {

}

const getInfosSalle = async () => {

}

const affecterSalles = async () => {

}


export {
    affecterSalles, getInfosSalle, comparerListes, bloquerInscriptions, resetDatabase, ajouterOrganisateur, getMaterielsGlobal, getMaterielsParEquipe,
    getParticipants, getEquipes
};