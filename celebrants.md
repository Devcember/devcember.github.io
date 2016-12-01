---
layout: page
title: Celebrants
---

These are the folks who've commited to commit content to celebrate Devcember
this year! If you'd like to join them, [edit this file](https://github.com/Devcember/devcember.github.io/edit/master/_data/celebrants.yml). We'll do the rest.

{% for celebrant in site.data.celebrants %}
<h4>
  <a target="_blank" href="{{ celebrant.homepage }}">
  {{ celebrant.name }}
  </a>
</h4>
<ul>
  {% for project in celebrant.projects %}
  <li>
    <a target="_blank" href="{{ project.repo }}">{{ project.name }}</a>
    | implements:
    <ul>
      {% for spec in project.specs %}
      <li>
        <a target="_blank" href="{{ spec.url }}">
          {{ spec.name }}
        </a>
      </li>
      {% endfor %}
    </ul>
  </li>
  {% endfor %}
</ul>
{% endfor %}
