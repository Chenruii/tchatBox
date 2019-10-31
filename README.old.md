# tchatBox
 

# STEP 0  initialisation

# STEP 1 Premiere Pas
- Ajouter React à votre projet 
- Importer React dans votre 􀁾chier JS : import React from 'react'
- Builder votre 􀁾chier avec Webpack
- Ouvrez le 􀁾chier généré par Webpack


# STEP 2 Composant fonctionnel
- Créez la structure d'un chat avec des composants fonctionnels :
    - Un composant Chat parent
    - Un composant MessageList disposant de plusieurs
    - MessageItem
    - Un composant MessageBar
- Créez un composant par 􀁾chier JS
- Mettez vos composants dans un dossier "src/components"


# STEP 3 State & Props
- Transformer le composant MessageList en composant de classe :
    - Ajoutez lui un état (tableau de messages)
    - Affchez autant de composants MessageItem qu'il y a de messages
    - Passez le message en props du composant MessageItem
    - Pensez à la validation des props
- Affcher les props dans le composant MessageItem

# STEP 4  Evènement / commmunication
- Rendez fonctionnel le composant MessageBar :
    - Le message doit être stocké dans le state du composant MessageBar
    - Le message dans le state doit être passé à MessageList lors du click sur le bouton
    - Affcher un message s'il n'y en a aucun
    - Permettre l'envoi du message lorsqu'on appuie sur Entrer

# STEP 5 Composant tiers : 
- ajouter le support d'emoji au Tchat
- https://github.com/tommoor/react-emoji-render 

# STEP 6 Redux :Premier pas
- ajouter la libs Redux au Tchat
- passer à l'ajout du message en redux
    - création de reducer
    - ajout de l'action
    - connexion des composant

 # STEP 7  Redux
-   http://redux.js.org/
-   Ajouter la librairie Redux au Tchat
-   Passer l'ajout de message en Redux
    - Création du reducer
    - Ajout de l'action
    - Connexion des composants


# STEP 8 L'asynchrone avec Redux
-   Ajouter la librairie Redux Thunk au Tchat
-   Utilisez https://my-json-server.typicode.com/tlenclos/formationreact-fake-server/messages et le client http Axios
-   Initialiser le chat avec des messages
    - Créer trois actions :
        - LOAD_MESSAGES_PENDING
        - LOAD_MESSAGES_SUCCESS
        - LOAD_MESSAGES_ERROR

# STEP 9 React- Router
-   Créer un middleware Redux permettant de logger toutes les actions Redux de votre chat dans la console

# STEP 10 Redux Middleware 
-  Ajouter une page de  "login" permettant d'entrer son username

# STEP 11 Containers
-   Séparer le composant MessageList en deux composants :
    - Un container qui gère la liaison avec Redux
    - Un composant de présentation avec essentiellement du JSX / CSS


# STEP FiNALISATION Temps réel avec Websocket
-   Utiliser un serveur node avec WebSocket
-   Ce qu'il faut faire
    - Créer un service accéder à la connexion WebSocket ./service/websocket.js
    - Ce service connecte se connecte au serveur websocket et dispatch une action lorsqu'il reçoit un nouveau message
    - Les actions sont partagées sur le réseau, notre tchat est en ligne !