---
layout: default
title: Contributions
permalink: /contributions/
---
<div class="site-content">
  <div class="section-header">
    <h2 class="section-title">Open Source Contributions</h2>
  </div>

  {% if site.data.contributions.size > 0 %}
    <div class="post-grid">
      {% for contrib in site.data.contributions %}
        <a href="{{ contrib.url }}" class="contrib-card" target="_blank" rel="noopener">
          <div class="contrib-card-header">
            <span class="contrib-project">{{ contrib.project }}{% if contrib.pr %} #{{ contrib.pr }}{% endif %}</span>
            {% if contrib.status %}
              <span class="contrib-status contrib-status--{{ contrib.status }}">{{ contrib.status }}</span>
            {% endif %}
          </div>
          <div class="contrib-card-body">
            <div class="contrib-card-title">{{ contrib.title }}</div>
            {% if contrib.description %}
              <div class="contrib-card-desc">{{ contrib.description }}</div>
            {% endif %}
            {% if contrib.tags %}
              <div class="contrib-tags">
                {% for tag in contrib.tags %}
                  <span class="contrib-tag">{{ tag }}</span>
                {% endfor %}
              </div>
            {% endif %}
            <div class="post-card-date">{{ contrib.date | date: "%Y.%m.%d" }}</div>
          </div>
        </a>
      {% endfor %}
    </div>
  {% else %}
    <div class="empty-state">No contributions yet.</div>
  {% endif %}
</div>
