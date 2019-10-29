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

 