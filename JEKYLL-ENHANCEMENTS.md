# Jekyll Conversion & Modern Enhancements

## What Changed

### ✅ Problems Solved

1. **No More Repeated HTML** - Sidebar defined once in `_includes/sidebar.html`
2. **Write in Markdown** - Blog posts are now simple `.md` files in `_posts/`
3. **Dynamic Content** - Post lists, stats, and archives auto-generate
4. **Better SEO** - Automatic meta tags, sitemaps, and structured data

## Modern Enhancements Added

### 1. **Dynamic Navigation with Auto-Active States**
- Navigation items defined once in `_config.yml`
- Active state automatically applied based on current page
- No manual updates needed when adding pages

### 2. **Automatic Stats Counter**
- Article count: `{{ site.posts | size }}` - counts actual posts
- Topics count: Automatically counts unique categories
- No more manual updates!

### 3. **Smart Post Looping**
- Homepage automatically shows latest posts
- Archive auto-organizes by year and month
- Topics page auto-groups by category
- Add a new post → it appears everywhere automatically

### 4. **SEO & Metadata**
- `jekyll-seo-tag` plugin adds:
  - OpenGraph tags for social sharing
  - Twitter Cards
  - JSON-LD structured data
  - Automatic title/description tags
- `jekyll-sitemap` generates XML sitemap for Google
- `jekyll-feed` creates RSS feed automatically

### 5. **URL Structure**
- Clean, readable URLs: `/posts/green-jacket-effect/`
- No more `.html` extensions
- Customizable permalink structure in `_config.yml`

### 6. **Front Matter Power**
- Each post has metadata at the top:
  ```yaml
  ---
  title: "Post Title"
  date: 2026-02-03
  read_time: "5 min read"
  categories: [coding, learning]
  excerpt: "Brief description"
  ---
  ```
- Use variables anywhere: `{{ page.title }}`
- Default values set in `_config.yml`

### 7. **Template Inheritance**
- `default.html` → base template
- `post.html` → extends default for blog posts
- `page.html` → extends default for static pages
- Change sidebar once → updates everywhere

### 8. **Markdown Features**
You can now use:
- **Headers**: `## My Header`
- **Lists**: Just use `- Item` or `1. Item`
- **Links**: `[text](url)`
- **Code blocks**: Triple backticks
- **Bold/Italic**: `**bold**` and `*italic*`
- **Images**: `![alt](image.jpg)`

## Additional Modern Features Available

### Currently Implemented:
✅ Automatic post dates and formatting
✅ Excerpt generation
✅ Category/tag support
✅ RSS feed
✅ Sitemap
✅ SEO tags

### Easy to Add:
- **Related Posts** - Show similar articles at end of posts
- **Search** - Client-side search with lunr.js
- **Comments** - Add Disqus or giscus
- **Reading Progress** - Already have scroll progress!
- **Dark Mode Toggle** - CSS custom properties make this easy
- **Table of Contents** - Auto-generate from headings
- **Pagination** - Already configured in `_config.yml`
- **Draft Posts** - Add `published: false` to front matter
- **Future Posts** - Set future dates, won't show until that date

## How to Use

### Writing a New Post

1. Create file: `_posts/2026-02-10-my-new-post.md`
2. Add front matter:
   ```yaml
   ---
   layout: post
   title: "My Amazing Post"
   date: 2026-02-10
   read_time: "4 min read"
   categories: [coding]
   excerpt: "What this post is about"
   ---
   ```
3. Write content in Markdown
4. Commit and push → Done!

### Testing Locally

```bash
bundle install           # First time only
bundle exec jekyll serve # Start server
```

Visit `http://localhost:4000` to preview

### Deployment

Just push to GitHub:
```bash
git push origin main
```

GitHub Pages builds automatically - no manual build step!

## File Structure Benefits

### Before (Static HTML):
```
about.html (300 lines, repeated sidebar)
contact.html (300 lines, repeated sidebar)
article1.html (350 lines, repeated sidebar)
article2.html (350 lines, repeated sidebar)
```
**Total duplication:** Sidebar repeated 20+ times

### After (Jekyll):
```
_includes/sidebar.html (15 lines, used everywhere)
about.md (20 lines, just content)
contact.md (25 lines, just content)
_posts/2026-02-03-article.md (80 lines, just content)
```
**Total:** Sidebar defined once, content files 80% smaller

## Customization Examples

### Change Site Title
Edit `_config.yml`:
```yaml
title: My New Title
subtitle: My new tagline
```

### Add a Navigation Item
Edit `_config.yml`:
```yaml
navigation:
  - title: Portfolio
    url: /portfolio/
```

### Change Colors
Edit `assets/css/styles.css`:
```css
:root {
  --masters-green: #yourcolor;
}
```

### Add a New Page
1. Create `portfolio.md`
2. Add front matter with `layout: page`
3. Write content in Markdown
4. Add to navigation in `_config.yml`

## Benefits Summary

| Feature | Before (Static) | After (Jekyll) |
|---------|----------------|----------------|
| **New Post** | Edit HTML, copy sidebar, format content manually | Create `.md` file, write in Markdown |
| **Update Sidebar** | Edit 20+ files | Edit 1 file |
| **Add Nav Item** | Edit 20+ files | Edit `_config.yml` |
| **Post List** | Manual HTML for each | Automatic loop |
| **Stats Counter** | Manual JavaScript | Automatic template vars |
| **SEO Tags** | Manual in each file | Automatic plugin |
| **RSS Feed** | Build manually | Automatic plugin |
| **Preview Changes** | Upload to server | Run locally with `jekyll serve` |

## Next Steps

1. **Test locally**: Run `bundle install` then `bundle exec jekyll serve`
2. **Commit changes**: Push to GitHub
3. **Wait for build**: GitHub Pages will build (2-3 minutes)
4. **Visit site**: Check https://gmansims.github.io

Your blog is now **modern, maintainable, and markdown-powered**! 🎉
