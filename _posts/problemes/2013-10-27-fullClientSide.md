---
layout: default
categories: [problemes]
pseudo_referer: Manland
titre: Full client-side
description: "Jekhub peut-il être réalisé client-side seulement (sans serveur) ?"
---
Un POC a été réalisé, sur ce site, pour voir la faisabilité du `full client-side`.

##Récupérer un token github

Le plus gros problème de ce système est de récupérer un token de github pour pouvoir réaliser toutes les actions.

Après plusieurs recherches il existe 3 moyens de récupérer un token github :

* Le classique OAuth : nous devons créer une application sur github, nous dirigeons nos utilisateurs sur une page. S'ils acceptent de donner l'accès de jekhub à github, ils sont redirigés vers jekhub avec une token. Ce token doit être `validé` auprès de github avec un secret-code. Ensuite github fournit un token valide que nous pouvons utiliser pour toutes les actions.
  
> Cette solution ne peut être utilisé client-side car le secret-code de l'application serait récupérable (car mis dans le javascript) ! Il nous faut donc absolument un serveur !

* L'authentification http basic : L'utilisateur nous fournit sont pseudo et mot de passe et nous pouvons réaliser les actions avec ceux-ci.

> Cette solution est dangeureuse pour l'utilisateur, qui ne peut pas être certains que nous ne récupérions ses infos.

* L'utilisateur se rend sur [ses applications](https://github.com/settings/applications) génère un token et nous le donne.

> **Cette solution est compliquée pour un utilisateur lambda. Mais c'est celle que j'ai choisis pour réaliser ce POC.**

##Lib github.js

Une fois le token récupéré, nous pouvons commencer à "échanger" des infos avec github. Après une longue recherche, je me suis arrêté sur la lib [Github.js](https://github.com/michael/github). Elle est maintenue par l'équipe qui fait [Prose.io](http://prose.io), qui est un éditeur Github, pas très loin de notre idée d'ailleurs et très bien réalisée.

Cette lib peut d'ailleurs être initialisée de 2 façons (comme c'est étrange :D) :

* En lui passant un token
* En lui passant un login et un password

##Le POC

Maintenant que nous avons tous les éléments, le POC peut commencer.

Comme vous pouvez le voir sur le site j'ai rajouté un petit [script js](https://github.com/manland/jekhub/blob/gh-pages/javascripts/testGithub.js), celui-ci est "activable" en cliquant sur "Editer la page !" (qui se trouve dans le footer de toutes les pages et donc celle-ci) !

![]({{site.baseurl}}/images/problemes/fullClientSide/activateJekhub.png)

Dès lors une fenêtre apparait, vous demandant un token (elle n'apparaitra qu'une fois, ensuite c'est enregistré en localStorage).

![]({{site.baseurl}}/images/problemes/fullClientSide/tokenRequire.png)

Pour obtenir un token il faut aller sur [github applications](https://github.com/settings/applications) et créer un nouveau token.

![]({{site.baseurl}}/images/problemes/fullClientSide/githubToken.png)

Le copier et le coller dans l'interface de Jekhub. Après validation une nouvelle interface apparaît et vous pouvez éditer la page courante.

![]({{site.baseurl}}/images/problemes/fullClientSide/editPage.png)

##Création de pages

Pour finir ce POC, j'ai commencé la création d'une nouvelle page. J'ai choisit de créer un nouveau membre.

Pour cela il faut cliquer sur "Ou là" tout en haut de la page [membres]({{site.baseurl}}/membres.html). 

![]({{site.baseurl}}/images/problemes/fullClientSide/oula.png)

Une nouvelle fenêtre apparaît vous demandant de remplir les différents champs.

![]({{site.baseurl}}/images/problemes/fullClientSide/addMember.png)

Après validation, le nouveau membre est disponible sur la page des [membres]({{site.baseurl}}/membres.html).

C'est déjà beaucoup plus facile que l'[ancien système]({{site.baseurl}}/tutos/2013/11/20/creer-fiche-membre.html) ;)

##Modifier ma page personnelle

Pour pouvoir modifier sa propre page, j'ai rajouté un lien pointant vers elle, sur votre avatar dans la page [membres]({{site.baseurl}}/membres.html). Une fois dessus (cette page est vide car vous il n'y a pas de contenu) vous pouvez cliquer sur "Editer cette page !" dans le footer.

Après, validation votre profil est mise à jour.

##Nouvelles questions

* Comment simplifier la récupération de token ?

> Un serveur juste pour ça sera peut être nécessaire ! Un tout petit truc en nodejs ou ruby qui récupère le token et le donne au client.

* Que faire si l'utilisateur n'a pas le droit de commit sur le repo ?

> Idéallement : fork, commit, pull-request

* Afficher les pull-requests de notre site, directement dans le site ?

* Ce POC est réalisé sur un site déjà créé, comment bootstraper un novueau site ?

> Un site juste pour ça ? Utiliser un prose.io ?