---
layout: default
title: Créer une page avec Jekyll
---

<pre>Toutes les étapes pour créer une nouvelle page Jekyll.</pre>

> Exemple écrit en parallèle de la création de la page problèmes.

* Créer un fichier problemes.md à la base du site
  
  * Rajouter le header avec le layout et le title

<pre>
---
layout: default
title: Problèmes
---
</pre>

* Ajouter un lien dans le menu (layouts -> default.html) pointant vers cette page

<pre>
<li><a href="{{site.baseurl}}/problemes.html" {% if page.url contains "problemes.html" %}class="active"{% endif %}>Problèmes</a></li>
</pre>

* Ajouter un premier problème pour définir la structure de l'objet problème
  * Créer un fichier dans posts/problemes avec comme nom 2013-10-23-rateLimite.md
  * ajouter son header avec son layout, ses catégories et des variables

<pre>
---
layout: default
categories: [problemes]
pseudo_referer: Manland
titre: Rate limite
description: "Si on fait trop d'appel à l'api github, on va avoir des rate limit"
---
Pour pallier à se problème on peut minimiser le nombre d'appel, localStorage power. 
</pre>

> pseudo_referer : pour pouvoir faire un lien vers la fiche de la personne qui a écrit ce problème (afin de lui demander plus d'explications par exemple)

> titre : pour afficher quelque chose dans la page problèmes

> description : pour décrire rapidement le problème dans la page problèmes 

> Tout en bas se trouve le contenu qui peut contenir du formatage (md dans ce cas là) et qui sera affiché lorsqu'on ira dans sur la page du problème

* Ajouter le contenu de la page problemes.md pour afficher nos problèmes

<pre>
{% for probleme in site.categories.problemes %}
* [{{probleme.titre}}]({{site.baseurl}}{{probleme.url}}) : {{probleme.description}} *(remonté par [{{probleme.pseudo_referer}}]({{site.baseurl}}/membres.html#{{probleme.pseudo_referer}}))*
{% endfor %}
</pre>

* Créer un tuto pour dire aux autres participants comment [créer un problème]({{site.baseurl}}/tutos/2013/10/23/creer-probleme.html).