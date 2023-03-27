const url = "localhost"

const getInfosChercheur = async (id) => {

}

const modifierProfilChercheur = async (id, description) => {

}

const getEquipesRecrutant = async () => {
    const url = `${url}/api/data`;
    const requestOptions = {
        method: 'GET',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
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

const getInfosEquipe = async (id) => {

}

const modifierProfilEquipe = async (id, description) => {

}

const modifierNomEquipe = async (id, nom) => {

}

const ajouterMembreEquipe = async (id, nom, prenom, mail, promo) => {

}

const supprimerMembreEquipe = async (id) => {

}

const modifierMatérielEquipe = async (id, nbMultiprises, nbEcrans, nbSouris, nbClaviers, nbAutres) => {

}

const modifierChoixEquipe = async (id, salleEquipee, seul) => {

}

const modifierEquipeRecrute = async (id) => {

}

const getChercheurs = async () => {

}

const accepterDemande = async (idEquipe, idChercheur) => {

}

const envoyerDemande = async (idChercheur, idEquipe) => {

}

const getSalle = async (id) => {

}

export {
    getSalle, envoyerDemande, accepterDemande, getChercheurs, modifierEquipeRecrute, modifierChoixEquipe, modifierMatérielEquipe,
    supprimerMembreEquipe, ajouterMembreEquipe, modifierNomEquipe, modifierProfilEquipe, getInfosEquipe, getEquipesRecrutant,
    modifierProfilChercheur, getInfosChercheur
};