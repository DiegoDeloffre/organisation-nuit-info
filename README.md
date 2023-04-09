# Site d'aide à l'organisation de la nuit de l'info

## Présentation du site

Le site réalisé permet d'aider sur plusieurs aspects de la nuit de l'info.
Un participant à la nuit peut s'inscrire avec ou sans équipe et gérer les paramètres qui en découlent. Une personne sans équipe peut envoyer une demande à une équipe pour la rejoindre et l'équipe peut l'accepter ou non
Un administrateur peut visualiser de nombreuses choses, comparer les listes des inscrits, affecter les salles, ajouter un organisateur, bloquer les inscriptions et reset la base de données
Un organisateur dispose des mêmes vues qu'un administrateur mais ne peut que comparer les listes, il ne peut pas réaliser toutes les autres actions des administrateurs.

## Accès
Le site n'est pour l'instant pas hébergé donc nous utilisons wamp pour simuler un serveur de développement. En revanche, la base de données est en ligne et accessible.

- Accéder à la base de données : 
	 - url : https://phpmyadmin.alwaysdata.com/
	 - username : 305937_bdd
	 - password : NuitInfoSite37+*

## Installation 
- Pour l'installation, il faut : 
	 - Télécharger et configurer wamp
	 - Lancer wamp
	 - Placer le projet dans le répertoire "www" de wamp 
	 - Ouvrir le projet sur vscode
	 - Installer yarn si nécessaire
	 - Installer react-scripts si nécessaire
	 - lancer yarn start pour lancer le projet

Le site est lancé, il n'y a plus qu'à se connecter et l'utiliser.

## Architecture du code
	

	- api 
		- apiPHP
			- API
			- controleur
			- model 				(code des appels API)
		- apiReact
			- apiAdministrateur 	(appels API liés aux pages et composants administrateur)
			- apitools  			(appels API liés à toutes les pages et composants )
			- apiAdministrateur 	(appels API liés aux pages et composants utilisateur)
	 
	- assets

	- components 	(composants inclus dans les pages ou dans d'autres composants)
		- Administrateur
		- Popup
		- Utilisateur

	- pages 		(pages incluse seulement dans les fichiers App.js et menu.js)
		- Administrateur
		- Utilisateur

	- styles
		- Administrateur
		- Popup
		- Utilisateur

# Readme généré par React

## Available Scripts
In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting
This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size
This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app) 

### Advanced Configuration
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn run build` fails to minify
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)