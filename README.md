# The Dad Stack

A Masters-inspired blog built with Jekyll, featuring elegant design and interactive elements.

## About

One dad's journey into the world of coding, sharing insights and lessons learned along the way.

## Features

- ✨ Masters golf tournament-inspired aesthetic
- 📝 Markdown-based blog posts
- 🎨 Interactive features (scroll progress, parallax, contour map background)
- 📱 Fully responsive design
- ♿ Accessibility-compliant
- 🔍 SEO optimized
- 📡 RSS feed included

## Local Development

### Prerequisites

- Ruby (2.7 or higher)
- Bundler

### Setup

1. Install dependencies:
   ```bash
   bundle install
   ```

2. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

3. Open your browser to `http://localhost:4000`

### Creating New Posts

1. Create a new file in `_posts/` with the format: `YYYY-MM-DD-title.md`

2. Add front matter at the top:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: 2026-02-03
   read_time: "5 min read"
   categories: [category1, category2]
   excerpt: "A brief description of your post."
   ---
   ```

3. Write your content in Markdown below the front matter

4. Commit and push to GitHub - GitHub Pages will build automatically!

## Project Structure

```
├── _config.yml          # Site configuration
├── _layouts/            # Page templates
│   ├── default.html     # Base layout
│   ├── post.html        # Blog post layout
│   └── page.html        # Static page layout
├── _includes/           # Reusable components
│   ├── head.html        # <head> section
│   ├── sidebar.html     # Navigation sidebar
│   └── scripts.html     # JavaScript includes
├── _posts/              # Blog posts (Markdown)
├── assets/
│   ├── css/
│   │   └── styles.css   # Main stylesheet
│   └── js/
│       └── script.js    # Interactive features
├── about.md             # About page
├── contact.md           # Contact page
├── topics.md            # Topics page
├── archive.md           # Archive page
└── index.html           # Homepage

```

## Deployment

This site is configured for GitHub Pages. Simply push to your repository:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

GitHub Pages will automatically build and deploy your site to `https://yourusername.github.io`

## Customization

### Update Site Settings

Edit `_config.yml` to change:
- Site title and subtitle
- Description
- Author information
- Navigation links

### Modify Styling

Edit `assets/css/styles.css` to customize:
- Colors (CSS custom properties in `:root`)
- Typography
- Layout
- Animations

### Add New Features

JavaScript interactivity is in `assets/js/script.js`:
- Scroll progress indicator
- Parallax effects
- Contour map background animation

## Writing Tips

- Write in Markdown for easy formatting
- Use headings (`##`, `###`) for structure
- Add lists, code blocks, and emphasis naturally
- Jekyll automatically generates excerpts from your content
- Categories help organize posts on the Topics page

## License

All rights reserved.
