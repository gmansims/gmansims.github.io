---
layout: page
title: Topics
description: Articles organized by theme and subject matter.
permalink: /topics/
---

{% assign categories = site.posts | map: 'categories' | join: ',' | split: ',' | uniq | sort %}

<section class="card" style="margin-bottom: 24px;">
  <h2>🏌️ Consistency & Habits</h2>
  <p style="color: #6b7b73; margin-top: 8px;">
    Building sustainable practices that compound over time.
  </p>
  <ul class="list" style="margin-top: 16px;">
    {% for post in site.posts %}
      {% if post.categories contains 'consistency' or post.categories contains 'habits' %}
        <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
      {% endif %}
    {% endfor %}
  </ul>
</section>

<section class="card" style="margin-bottom: 24px;">
  <h2>📋 Planning & Process</h2>
  <p style="color: #6b7b73; margin-top: 8px;">
    Frameworks and systems for better project outcomes.
  </p>
  <ul class="list" style="margin-top: 16px;">
    {% for post in site.posts %}
      {% if post.categories contains 'planning' or post.categories contains 'process' %}
        <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
      {% endif %}
    {% endfor %}
  </ul>
</section>

<section class="card" style="margin-bottom: 24px;">
  <h2>🎯 Focus & Deep Work</h2>
  <p style="color: #6b7b73; margin-top: 8px;">
    Strategies for sustained attention and meaningful progress.
  </p>
  <ul class="list" style="margin-top: 16px;">
    {% for post in site.posts %}
      {% if post.categories contains 'focus' or post.categories contains 'deep-work' %}
        <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
      {% endif %}
    {% endfor %}
  </ul>
</section>

<section class="card">
  <h2>Browse All Articles</h2>
  <p>
    Looking for something specific? Visit the <a href="{{ '/archive/' | relative_url }}">archive</a> to see all articles by date,
    or return to the <a href="{{ '/' | relative_url }}">home page</a> for recent posts.
  </p>
</section>
