---
layout: default
title: Idées
---

<pre>Toutes les idées qui nous passent par la tête.</pre>

{% for idee in site.categories.idees %}
* [{{idee.titre}}]({{site.baseurl}}{{idee.url}}) : {{idee.description}}
{% endfor %}

* Pouvoir créer un menu à plusieurs niveaux
* Pouvoir créer des templates
* Pouvoir éditer des templates
* Plusieurs langues

* Bootstrapper le projet
  * Choisir un nom de projet ou garder Jekhub ?
  * Utiliser une organisation Github spéciale pour se projet ?
  * Utiliser [AngularJs](http://www.angularjs.org) ?
  * Utiliser [Boilerplate](http://joshdmiller.github.io/ng-boilerplate/#/home) ?

* Développer le projet
* Ecrire des articles pour frangular