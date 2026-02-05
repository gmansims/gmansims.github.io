# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"The Dad Stack" is a Jekyll-based static site blog with a Masters golf tournament-inspired aesthetic. The site is optimized for GitHub Pages and features interactive JavaScript elements, responsive design, and SEO optimization.

## Development Commands

### Local Development
```bash
bundle install                    # Install Ruby dependencies
bundle exec jekyll serve          # Start dev server at http://localhost:4000
bundle exec jekyll build          # Build static site to _site/
```

### Testing
The project uses GitHub Actions for CI/CD validation:
- **HTML validation**: `htmlproofer` checks generated HTML for broken links and accessibility
- **Claude Code Review**: Automated PR reviews check for HTML/CSS issues, broken links, and typos

There are no unit tests - validation focuses on the build output.

## Architecture

### Template Hierarchy
- `_layouts/default.html` - Base layout wrapper
- `_layouts/post.html` - Extends default, used for blog posts
- `_layouts/page.html` - Extends default, used for static pages (About, Contact, etc.)

### Component System
Reusable components in `_includes/`:
- `head.html` - SEO tags, metadata, stylesheets
- `sidebar.html` - Navigation sidebar with active state handling
- `scripts.html` - JavaScript includes

### Configuration-Driven Behavior
`_config.yml` is the single source of truth for:
- Site metadata (title, subtitle, author, URL)
- Navigation links (auto-generates sidebar)
- Plugin configuration (SEO, sitemap, RSS feed)
- Front matter defaults (all posts use `post` layout by default)
- Permalink structure (`/posts/:title/`)

### Content Management
- Posts live in `_posts/` with naming: `YYYY-MM-DD-title.md`
- Each post requires YAML front matter:
  ```yaml
  ---
  layout: post
  title: "Your Title"
  date: 2026-02-03
  read_time: "7 min read"
  categories: [category1, category2]
  excerpt: "Brief description"
  ---
  ```
- Categories automatically populate the Topics page
- Posts auto-generate excerpts if not provided
- Reading time should be calculated manually (assume ~200 words per minute)

### Frontend Architecture

**Styling (assets/css/styles.css)**
- Masters-themed color palette using CSS custom properties:
  - `--primary`: Deep green (#0f3d2e)
  - `--accent-gold`: (#d4af37)
  - `--accent-azalea`: Pink (#f4a6b0)
  - `--background`: Cream (#f9f5ef)
- Typography: Fraunces (serif) for headings, Manrope (sans-serif) for body
- CSS Grid for main layout (sidebar + content), responsive breakpoint at 900px
- No CSS framework - all custom styles

**Interactive Features (assets/js/script.js)**
- Green jacket scroll progress indicator (left edge)
- Reading progress bar (top horizontal)
- Rolling hills parallax effect (desktop only)
- Dynamic scorecard stats (article/topic/reader counts)
- All animations respect `prefers-reduced-motion` for accessibility
- Uses `requestAnimationFrame` for 60fps performance

### Jekyll Plugins
- `jekyll-feed` - RSS feed at `/feed.xml`
- `jekyll-seo-tag` - Auto-generates OpenGraph, Twitter Cards, JSON-LD
- `jekyll-sitemap` - XML sitemap at `/sitemap.xml`

## Important Patterns

### Adding Navigation Links
Edit the `navigation` array in `_config.yml` - changes automatically reflect in sidebar with active state handling.

### Creating New Posts
1. Create file: `_posts/YYYY-MM-DD-title.md`
2. Add front matter (see Content Management above)
3. Write content in Markdown below front matter
4. Posts automatically appear on homepage, archive, and in RSS feed

### Deployment
Push to `main` branch triggers automatic GitHub Pages deployment. The site builds to `https://gmansims.github.io`.

### CI/CD Pipeline
Located at `.github/workflows/ci.yml`:
- Runs on PR and push to `main`
- Build job: Sets up Ruby 3.1, installs dependencies, builds site, validates HTML
- Claude review job: Only on PRs, provides automated code review

## Theme Consistency

The Masters golf aesthetic is central to the design:
- Color palette follows Augusta National's signature greens, gold, and azaleas
- Golf terminology used throughout (fairways, scorecard, green jacket, etc.)
- Interactive elements named with golf themes (e.g., "green jacket scroll progress")

When adding features or content, maintain this thematic consistency in naming, colors, and copy.

## Ruby Environment

- Ruby version: 3.1.6 (specified in `.ruby-version`)
- Jekyll version: ~3.9.3 (GitHub Pages compatible)
- Use Bundler for dependency management
- Platform-specific gems included for Windows/JRuby support
