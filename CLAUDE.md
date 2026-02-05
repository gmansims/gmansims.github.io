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
- **HTML validation**: `htmlproofer` performs basic HTML validation and checks for broken links (note: ignores missing alt text, so not comprehensive accessibility testing)
- **Claude Code Review**: Automated PR reviews check for HTML/CSS issues, broken links, and typos

There are no unit tests - validation focuses on the build output.

## Testing Before Commits

Always run tests before committing changes to ensure the site builds correctly.

### For Code Changes (layouts, CSS, JavaScript, configuration)
```bash
bundle exec jekyll build          # Verify site builds without errors
bundle exec jekyll serve          # Visually inspect changes at http://localhost:4000
```

### For Content Changes (new posts, page updates)
```bash
bundle exec jekyll build          # Ensure post front matter is valid
```

### What to Check
- Build completes without errors or warnings
- Site renders correctly in the browser (for code changes)
- Navigation links work as expected
- No broken internal links
- Responsive design works on mobile and desktop viewports

Documentation-only changes (like CLAUDE.md, README.md) don't require build validation.

## Commit Message Format

Use conventional commit format for all commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New feature or enhancement
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: CSS/styling changes (or code formatting that doesn't affect functionality)
- `refactor`: Code restructuring without changing behavior
- `chore`: Build process, dependencies, or tooling changes

### Examples
```
feat(posts): add reading time calculation

docs: add CLAUDE.md with codebase guidance

fix(sidebar): correct active state on Topics page

style(css): update drop cap styling for better readability

chore(deps): update Jekyll to 3.9.3
```

### Scope
Optional but recommended. Common scopes:
- `posts` - Blog post changes
- `layout` - Template/layout changes
- `css` or `styles` - Styling changes
- `js` or `scripts` - JavaScript changes
- `ci` - CI/CD workflow changes
- `config` - Jekyll configuration changes

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
- Plugin configuration (SEO, sitemap, RSS feed)
- Front matter defaults (all posts use `post` layout by default)
- Permalink structure (`/posts/:title/`)

### Data Files
`_data/` directory contains structured data:
- `navigation.yml`: Site navigation menu (auto-generates sidebar with active states)

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
- Reading time is calculated automatically using 250 words per minute (industry standard)

### Frontend Architecture

**Styling (Sass architecture)**
- Organized using Sass partials in `_sass/`:
  - `_variables.scss`: CSS custom properties, color palette, shadows, font imports
  - `_base.scss`: Resets, body styles, links, focus states
  - `_layout.scss`: Page grid, sidebar, content area, responsive breakpoints
  - `_components.scss`: UI components (nav, cards, scorecard, forms, etc.)
  - `_effects.scss`: Scroll progress, parallax setup, reduced motion
- Main file: `css/styles.scss` imports all partials
- Masters-themed color palette using CSS custom properties:
  - `--masters-green`: Deep green (#0f3d2e)
  - `--gold`: Gold (#d4af37)
  - `--azalea`: Pink (#f4a6b0)
  - `--cream`: Cream (#f9f5ef)
  - `--ink`: Text black (#1f2a24)
  - Plus expanded palette: `--pine-deep`, `--pine-light`, `--fairway`, `--morning-mist`, `--azalea-light`, `--gold-shine`, `--gold-dark`, `--water-blue`, `--sand`
- Typography: Fraunces (serif) for headings, Manrope (sans-serif) for body
- CSS Grid for main layout (sidebar + content), responsive breakpoint at 900px

**Interactive Features (assets/js/script.js)**
- Green jacket scroll progress indicator (left edge)
- Reading progress bar (top horizontal)
- Rolling hills parallax effect (desktop only)
- Dynamic scorecard stats (article/topic/reader counts)
- All animations respect `prefers-reduced-motion` for accessibility
- Uses `requestAnimationFrame` for 60fps performance

**Accessibility Notes**
- Golf flag emoji (⚑) in navigation is a CSS ::before pseudo-element and cannot receive ARIA attributes
- Active navigation state is also indicated by font weight for accessibility
- Color contrast meets WCAG AA standards (meta text: #5a6560)

### Jekyll Plugins
- `jekyll-feed` - RSS feed at `/feed.xml`
- `jekyll-seo-tag` - Auto-generates OpenGraph, Twitter Cards, JSON-LD
- `jekyll-sitemap` - XML sitemap at `/sitemap.xml`

## Important Patterns

### Adding Navigation Links
Edit `_data/navigation.yml` to add or modify navigation items:
```yaml
- title: New Page
  url: /new-page/
```
Changes reflect immediately during `jekyll serve` (no restart required). Navigation automatically handles active states.

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
