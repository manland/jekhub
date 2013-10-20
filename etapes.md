---
layout: default
title: Etapes de création
---

<pre>Cette page, représente les étapes pour créer un site avec Jekyll sur les Github-pages. Jekhub veut simplifier au maximum ces étapes.</pre>

##Pré-requis

* Créer un compte github
* Créer un repo github
  * Soit le repo a comme nom `nom.github.com`
  * Soit créer une branch gh-pages
* Cloner le repo pour le récupérer en local
* Idéalement, installer Jekyll
* Mettre la configuration de github sur Jekyll

##Arborescence

* Créer la structure du site

> Tous les fichiers peuvent être suffixés par html ou md

> "-" == fichier, "+" == dossier

<pre>
- index
- page1
- page2
+ _layouts
  - default.html
  - layout1.html
+ _posts
  + categorie1
    - date-du-post-titre
+ _includes
+ javascripts
  - main.js
+ stylesheets
  - stylesheet.css
</pre>

###Pages

Les pages tout en haut de la structure, correspondent aux pages du site. Elles sont généralement, visibles dans le menu et permettent d'accéder aux différents `posts`.

###Posts

Les posts contiennent le contenu du site html. Généralement écrit en md ou en html. Mais ils peuvent également contenir un ensemble de variables afin de `templater` les `layouts`.

###Layouts

La face visible des `posts`. Chaque post peut avoir un template différent. Le site en lui même est contenu dans le template `default`.

Grâce aux variables des `posts`, on peut catégoriser, hiérarchiser, afficher les `posts` sous une forme ou une autre.

Un layout peut être inclu dans un autre layout.

###Autres

Les dossiers `javascripts` et `stylesheets` contiennent les différents fichiers css et js du site.

Le dossier `includes` permet de mettre des fragments de vue dans les différents `layouts`.

##Coder

Maintenant que tout est en place, nous pouvons commencer à imaginer notre première page. Que cela soit en html ou en md, il nous faut poser nos premières balises. Puis les habiller avec du css.

Lorsque tous les styles principaux sont posés, nous pouvons nous occuper du contenu.

##Rédiger

A partir de là on a deux choix :
* c'est un blog et nous pouvons ajouter tous nos articles dans le dossier `posts`
* c'est un site et nous devons ajouter des `types` pour nos entités
  * Par exemple, pour ce site j'ai créé l'entité `membre` qui comprend différentes variables (pseudo, url github, url twitter...)
  * Créer un template pour afficher ces entités (souvent un simple for sur ces entités)
  * Créer toutes les entités de ce type

##Déployer

Github vient à notre aide pour cette étape, puisqu'un simple `push`, permet de compiler le code et de le déployer sur pseudogithub.github.io/reponame.

##Communautaire

Si on souhaite que d'autres personnes (développeurs pour le moment) modifient notre site, il faut créer des tutos pour leur expliquer quoi faire. Exactement comme c'est le cas pour ce site et les [fiches de membres]({{site.baseurl}}/tutos/2013/11/20/creer-fiche-membre.html) ou encore les [idées]({{site.baseurl}}/tutos/2013/11/20/creer-fiche-idee.html).

<pre>Tout le but de ce projet est de simplifier toutes ces étapes. Je suis certain que nous aurons tous des idées pour le faire. Alors n'hésitez pas à <a href="{{site.baseurl}}/tutos/2013/11/20/creer-fiche-idee.html">nous le dire</a> !</pre>