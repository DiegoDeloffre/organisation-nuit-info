export const tutoChercheur = {
    steps: [
        {
            target: '.profil-agent',
            title: "Profil de l'utilisateur",
            content:
                <div>
                    <p>Voici la composition de votre équipe. Vous êtes déjà inscrit en tant que chef.</p>
                    <p>Vous pouvez ajouter des membres en cliquant sur le bouton 'Ajouter'. Ainsi, vous pouvez renseigner le nom, prénom, la filière ainsi que l'adresse mail du nouveau membre. </p>
                    <p>Vous pouvez également supprimer des membres à l'aide du bouton situé à droite de chaque membre.</p>
                </div>,
            placement: 'bottom'
        },
        {
            target: '.right-big',
            title: "Liste des équipes",
            content: "Ici, vous pouvez voir la liste de toutes les équipes que vous pourriez rejoindre avec différentes informations"
        },
        {
            target: '.equipe-liste h2',
            title: "Nom de l'équipe",
            content: "Voici le nom de l'équipe que vous pourriez rejoindre.",
            placement: 'top'
        },
        {
            target: '.equipe-membre-recrute',
            title: "Membres de l'équipe",
            content: "La liste des membres de l'équipe avec Nom, Prénom, Filière.",
            placement: 'top'
        },
        {
            target: '.description',
            title: "Profil de l'équipe",
            content: "Le profil de l'équipe, vous pouvez donc voir quelles équipes pourraient vous correspondre.",
            placement: 'top'
        },
        {
            target: '.criteres',
            title: "Critères de la salle",
            content:
                <div>
                    <p>Les critères de choix de la salle.</p>
                    <p>Salle équipée signifie que l'équipe sera dans une salle de TP (Windows A et B). Salle non équipée signifie que l'équipe sera dans n'importe quelle autre salle.</p>
                    <p>Seul signifie que l'équipe souhaite être seule dans une salle (108,110, Avosti). Non seul signifie que l'équipe sera dans une salle de TD avec d'autres équipes.</p>
                </div>,
            placement: 'top'
        },
        {
            target: '.button-message',
            title: "Coordonnées du chef de l'équipe",
            content: "Avec ce bouton vous pouvez avoir les coordonnées du chef de l'équipe si vous souhaitez le contacter.",
            placement: 'top'
        },
        {
            target: '.button-demande',
            title: "Demande de rejoignement",
            content: "Si vous avez discuté avec l'équipe et qu'elle accepte que vous la rejoignez, cliquez ici pour leur envoyer une demande. Après cela, il faudra que le chef de l'équipe accepte la demande. Attention, une fois la demande acceptée, votre compte sera supprimé et vous serez ajouté à votre nouvelle équipe.",
            placement: 'top'
        }
    ]
};

export const tutoEquipe = {
    steps: [
        {
            target: '.equipe',
            title: 'Composition de l\'équipe',
            content: (
                <div>
                    <p>Voici la composition de votre équipe. Vous êtes déjà inscrit en tant que chef.</p>
                    <p>Vous pouvez ajouter des membres en cliquant sur le bouton 'Ajouter'. Ainsi, vous pouvez renseigner le nom, prénom, la filière ainsi que l'adresse mail du nouveau membre. Vous pouvez également supprimer des membres à l'aide du bouton situé à droite de chaque membre.</p>
                </div>
            ),
            placement: 'right',
        },
        {
            target: '.profil-equipe',
            title: 'Profil de l\'équipe',
            content: (
                <div>
                    <p>Voici le profil de votre équipe. Cette description sert à définir quelle type d'équipe vous êtes (sérieux/fun, expérimenté/débutant) ainsi que vos domaines de compétences.</p>
                    <p>Ainsi, les élèves n'ayant pas encore d'équipe pourront savoir s'ils veulent rejoindre la vôtre.</p>
                    <p>Si vous ne souhaitez pas recruter d'autres membres, cette section est facultative.</p>
                </div>
            ),
        },
        {
            target: '.interrupteur-wrapper',
            title: 'Interrupteur de recrutement',
            content: (
                <div>
                    <p>Ce petit interrupteur sert à indiquer si vous souhaitez recruter d'autres membres ou si vous acceptez qu'une personne n'ayant pas d'équipe vous rejoigne.</p>
                    <p>En déplaçant l'interrupteur sur 'Oui', un bouton va apparaître pour permettre de voir les potentielles recrues.</p>
                </div>
            ),
            placement: 'top',
        },
        {
            target: '.materiels',
            title: 'Liste du matériel',
            content: (
                <div>
                    <p>Voici la liste de matériels nécessaires pour toute votre équipe.</p>
                    <p>Sélectionnez la valeur que vous souhaitez pour chaque type de matériel à l'aide des boutons, puis cliquez sur le bouton 'Valider' pour confirmer vos changements.</p>
                </div>
            ),
            placement: 'top',
        },
        {
            target: '.salle',
            title: 'Critères de la salle',
            content: (
                <div>
                    <p>Voici les préférences que vous pouvez sélectionner pour l'affectation des salles.</p>
                    <p>Si vous avez absolument besoin d'une salle équipée, i-e nue salle de TP avec des ordinateurs (Windows A et B), sélectionnez 'Oui' pour la première question.</p>
                    <p>Ensuite, vous pouvez choisir d'être seul dans une salle (salles 108 ou 110 par exemple), ou d'être avec d'autres équipes (salles de TD par exemple). Vous pouvez également choisir de ne pas choisir, auquel cas vous pourrez être placés dans n'importe quelle salle.</p>
                    <p> Pour ce qui est de l'affectation des salles, elle est réalisée de manière semi-automatique en fonction de vos choix et du nombre de membres. Les 'conflits' seront restants seront gérés pendant une réunion.</p>
                    <p>Une fois l'affectation des salles réalisée, le nom de votre salle apparaitra ici.</p>
                </div>
            ),
            placement: 'left'

        }
    ]
};

export const tutoRecrutement = {
    steps: [
      {
        target: '.recrue',
        title: "Recrue potentielle",
        content:
          <div>
            <p>Sur cette page vous pouvez voir la liste des personnes sans équipe avec différentes informations les concernant.</p>
            <p>Si vous êtes sur cette page, c'est que vous êtes ouvert à accueillir un nouveau membre dans votre équipe. C'est sur cette page que le processus de recrutement aura lieu.</p>
            <p>Sachez également que les personnes sans équipes ont une page similaire et ont accès à votre mail.</p>
          </div>
      },
      {
        target: '.recrue-infos',
        title: "Informations de l'étudiant",
        content: "Voici les informations de l'étudiant avec son Nom, son Prénom et sa Filière"
      },
      {
        target: '.recrue-description',
        title: "Profil de l'étudiant",
        content:
        <div>
          <p>Ici, vous pouvez voir la description rédigée par l'étudiant.</p>
          <p>Vous pouvez ainsi voir ses compétences et intentions pour la nuit de l'info et ainsi choisir la recrue parfaite pour votre équipe.</p>
        </div>
      },
      {
        target: '.recrue-button-message',
        title: "Membres de l'équipe",
        content: "Avec ce bouton vous pouvez avoir les coordonnées de l'étudiant si vous souhaitez le contacter.",
      },
      {
        target: '.recrue-button-demande',
        title: "Profil de l'équipe",
        content:
        <div>
          <p>Ce bouton permet d'accpeter la demande d'un étudiant et de l'ajouter à votre équipe. Ainsi, lorsque vous cliquez sur le bouton, le compte de l'étudiant est supprimé et il est automatiquement ajouté dans votre équipe.</p>
          <p>Pensez à mettre à jour le matériel nécessaire de votre équipe et également bien rester en contact avec votre nouvelle recrue pour lui transmettre les informations nécessaires.</p>
          <p>PS : Ce bouton ne sera cliquable que si l'étudiant a fait une demande pour rejoindre votre équipe.</p>
        </div>
      }
    ]
  };