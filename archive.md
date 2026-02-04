---
layout: page
title: Archive
description: A complete chronological list of all articles.
permalink: /archive/
---

{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}

{% for year in postsByYear %}
<section class="card" style="margin-bottom: 24px;">
  <h2>{{ year.name }}</h2>

  {% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%B'" %}
  {% for month in postsByMonth %}
    <h3 style="color: var(--masters-green); font-size: 16px; margin-top: 24px; margin-bottom: 12px;">{{ month.name }}</h3>
    <ul class="list">
      {% for post in month.items %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <span style="color: #6b7b73; font-size: 13px; margin-left: 8px;">{{ post.date | date: "%b %-d" }}</span>
        </li>
      {% endfor %}
    </ul>
  {% endfor %}
</section>
{% endfor %}

<section class="card">
  <p style="text-align: center;">
    Browse articles by category on the <a href="{{ '/topics/' | relative_url }}">Topics</a> page,
    or return to the <a href="{{ '/' | relative_url }}">home page</a> for recent posts.
  </p>
</section>
