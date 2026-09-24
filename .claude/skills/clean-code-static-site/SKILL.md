---
name: clean-code-static-site
description: Engineering checklist for this Jekyll/HTML/CSS/JS site, distilled from a real cleanup pass. Use before considering any page, stylesheet, or script "done" on this project, and when reviewing a diff on it.
---

# Clean code checklist for Synapse-Website

This project is a hand-written Jekyll site (plain HTML + Liquid front matter, no JS framework).
These rules come from a real audit of this exact codebase, not generic advice, each one fixes a
bug that actually happened here.

## CSS

- **One `:root` per file, ever.** This codebase used to have 4 separate `:root` blocks in a
  single file, each silently overriding the last for shared variable names. That's how
  `--text-primary` ended up rendering tan instead of the intended dark grey, nobody noticed
  because CSS doesn't warn on redeclaration. If a stylesheet needs new variables, add them to the
  existing single `:root`, or better, to the shared `CSS/variables.css`.
- **Never hardcode a hex value that already has a token in `CSS/variables.css`.** Check that file
  first. If you're about to write `#01acd3` or `#3b9b9f` etc., use `var(--color-primary)` /
  `var(--color-primary-dark)` instead.
- **No duplicate CDN font/icon loads.** Cairo and Font Awesome 6.4.0 are already loaded once,
  sitewide, in `_includes/head.html`. Don't add another `<link>` for them on a specific page.
  If a page needs an extra one-off library (like remixicon for the kids bootcamp page), load it
  through `page_extra_head` front matter pointing at a small `_includes/extra-head-*.html`
  partial, not inline in the page.
- **kebab-case for all class names.** No camelCase (`.logoINnav`, `.curveMapUp`, etc., these were
  real bugs found and fixed here).
- **External `<link>`/`<script>` tags need Subresource Integrity.** `integrity="sha..."
  crossorigin="anonymous" referrerpolicy="no-referrer"`. Get the hash from the cdnjs API
  (`api.cdnjs.com/libraries/<lib>/<version>?fields=sri`) or compute it yourself with
  `openssl dgst -sha384 -binary file | openssl base64 -A` for non-cdnjs CDNs.

## HTML / Jekyll structure

- **Never hand-duplicate `<head>`, header nav, or footer.** They live once in
  `_includes/head.html`, `_includes/header.html`, `_includes/footer.html`, pulled in via
  `_layouts/default.html` (full chrome) or `_layouts/landing.html` (minimal, for focused
  conversion pages like the kids bootcamp). A new page gets `layout: default` (or `landing`) in
  its front matter, nothing more.
- **No duplicate script/link includes.** `index.html` used to load `aos.js` and `js/script.js`
  twice each, a leftover from a bad paste. Check the rendered `<head>`/`<body>` in your diff
  before shipping.
- **Every page needs `title`, `description`, and `image` in front matter.** These feed
  `jekyll-seo-tag`'s `{% seo %}` call in `head.html`, which generates the actual meta/OG/Twitter
  tags. A page with no `description` front matter ships with no meta description, that was the
  state of the entire site before this cleanup. `image` must be the object form
  (`{path, width, height}`), not a plain string, so `og:image:width`/`height` render correctly.
  When you reference it in a template, use `.path` (`page.image.path`/`post.image.path`), never
  the bare field, that stringifies the whole hash into the URL. Real regression, actually shipped
  once.
- **No large commented-out dead code blocks left in shipped HTML.** If content is genuinely
  retired, delete it (git history keeps it). If it's a real future feature, note it in
  `note/note.md` instead of leaving 100+ line HTML comments in a live page.
- **`lang="ar" dir="rtl"` on every page.** This site is Arabic-only; don't add English pages
  without deciding on hreflang first.

## Structured data / SEO

- Site-wide `Organization`/`NGO` JSON-LD lives once, in `_includes/head.html`. Don't repeat it
  per page.
- **Don't hand-write a `BlogPosting` JSON-LD block.** `jekyll-seo-tag`'s `{% seo %}` call already
  auto-generates one for every document in the `_posts` collection (headline, description, dates,
  the image object, publisher, mainEntityOfPage, url). A hand-written one was added once in
  `_layouts/post.html` and just produced two duplicate `BlogPosting` blocks per post, removed.
- `BreadcrumbList` comes from `_includes/breadcrumbs.html`, included by `_layouts/default.html`
  (skipped on the homepage and on `landing`). Give a page `breadcrumb:` front matter when its
  `title:` has a suffix that shouldn't show in the trail.
- Don't add a site-wide `author:` in `_config.yml` to try to get `jekyll-seo-tag` to attribute
  posts, it defaults to `@type: Person`, which is factually wrong for an organizational byline.
  `publisher` (already `Organization`) is the correct, accurate attribution here.
- Only mark up content that's actually visible on the page. Don't add `FAQPage` schema unless the
  page has a real, visible FAQ section (see `KidsAIBootcamp.html`'s `faq:` front matter for the
  pattern).

## Copy / content

- No em dashes, and generally avoid the more obvious AI-writing tells (see the `humanizer` skill
  if unsure): no "in today's world" filler opens, no rule-of-three-everything, no inflated
  claims about content that isn't actually on the page.
- Direct-answer style for blog posts: answer the core question in the first 40-60 words, then use
  question-shaped `## H2` headings for the rest. This is what actually gets cited by AI answer
  engines, not keyword stuffing.
- Never fabricate a quote, event, or team member. If real content isn't available locally, either
  pull it from the live synapseksa.tech site (verify it's actually there first) or leave a clear
  placeholder rather than inventing detail.

## Before calling a change "done"

1. Grep for the four brand hex codes (`#01acd3`, `#3b9b9f`, `#7a8f78`, `#b17f5c`) in whatever CSS
   you touched, none should be there outside `CSS/variables.css`.
2. Grep for `:root` in whatever CSS file you touched, there should be exactly one.
3. Check the page's front matter has `title` + `description`.
4. If you added a new page, confirm it's reachable from `_includes/header.html`'s nav or
   deliberately excluded (like the kids bootcamp landing page).
