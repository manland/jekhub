---
layout: default
title: Problèmes
---

<pre>Tous les problèmes qu'on doit résoudre. Vous avez un nouveau problème ? N'hésitez pas à <a href="{{site.baseurl}}/tutos/2013/10/23/creer-probleme.html">nous le dire</a>.</pre>

{% for probleme in site.categories.problemes %}
* [{{probleme.titre}}]({{site.baseurl}}{{probleme.url}}) : {{probleme.description}} *(remonté par [{{probleme.pseudo_referer}}]({{site.baseurl}}/membres.html#{{probleme.pseudo_referer}}))*
{% endfor %}