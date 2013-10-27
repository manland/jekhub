---
layout: default
title: Idées
---

<pre>Toutes les idées qui nous passent par la tête. Vous avez une nouvelle idée ? N'hésitez pas à <a href="{{site.baseurl}}/tutos/2013/11/20/creer-fiche-idee.html">nous le dire</a>. <a style="cursor:pointer" onClick="javascript:Jekhub.addIdea()" >Ou là</a></pre>

{% for idee in site.categories.idees %}
* [{{idee.titre}}]({{site.baseurl}}{{idee.url}}) : {{idee.description}} *(imaginée par [{{idee.pseudo_referer}}]({{site.baseurl}}/membres.html#{{idee.pseudo_referer}}))*
{% endfor %}
