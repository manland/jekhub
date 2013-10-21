---
layout: tuto
categories: [tutos]
titre: Créer votre fiche personnelle
description: Apprenez à créer votre fiche personnelle.
---

##Pré-requis

* Etre connecté à [Github](https://github.com/login)

##Marche à suivre

* Rendez vous sur [la page github](https://github.com/manland/jekhub/tree/gh-pages/_posts/membres)
* Créer un nouveau fichier en cliquant sur le plus au dessus des fichiers
* Remplir le champ "Name your file..." en respectant la nomanclature : aaaa-mm-jj-pseudo.md (où aaaa-mm-jj correspond à la date du jour)
* Remplir le contenu en respectant les champs :

> Attention à ne pas toucher les variables layout et categories !

<pre>
	---
	layout: membres
	categories: [membres]
	pseudo: Pseudo
	bio: "Courte bio sur vous"
	photo: "url de votre photo"
	github: "http://github.com/votrepseudo"
	facebook: "url de votre facebook ou vide (sans double quote) pour ne pas être pris en compte"
	twitter: "url de votre twitter ou vide (sans double quote) pour ne pas être pris en compte"
	viadeo: "url de votre viadeo ou vide (sans double quote) pour ne pas être pris en compte"
	linkedin: "url de votre linkedin ou vide (sans double quote) pour ne pas être pris en compte"
	googleplus: "url de votre g+ ou vide (sans double quote) pour ne pas être pris en compte"
	blog: "url de votre blog ou vide (sans double quote) pour ne pas être pris en compte"
	---
</pre>

* Remplir le "commit summary" avec votre prénom
* Valider en cliquant sur "Commit New File"
* Finalement, faites une pull-request de votre fiche