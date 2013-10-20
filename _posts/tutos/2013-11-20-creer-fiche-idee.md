---
layout: tuto
categories: [tutos]
titre: Créer une fiche idée
description: Apprenez à créer une fiche pour une idée.
---
##Pré-requis

* Etre connecté à [Github](https://github.com/login)
* Avoir créé votre [fiche personnelle]({{site.baseurl}}/tutos/2013/11/20/creer-fiche-membre.html)

##Marche à suivre

* Rendez vous sur [la page github](https://github.com/manland/jekhub/tree/gh-pages/_posts/idees)
* Créer un nouveau fichier en cliquant sur le plus au dessus des fichiers
* Remplir le champ "Name your file..." en respectant la nomanclature : aaaa-mm-jj-idee.md (où aaaa-mm-jj correspond à la date du jour)
* Remplir le contenu en respectant les champs :

> Attention à ne pas toucher les variables layout et categories !

<pre>
	---
	layout: default
	categories: [idees]
	pseudo_referer: Le pseudo de votre fiche
	titre: titre de l'idée
	description: "Courte description de votre idée"
	---
	Longue description de votre idée au format md et/ou html.
</pre>

* Remplir le "commit summary" avec votre prénom
* Valider en cliquant sur "Commit New File"
* Finalement, faites une pull-request de votre idée