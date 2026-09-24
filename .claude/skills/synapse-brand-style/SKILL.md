---
name: synapse-brand-style
description: Synapse (سِنابس) brand style guide, distilled from the live synapseksa.tech site. Use whenever adding or redesigning a page, component, or piece of visual content on this site, so it matches the org's real brand instead of default choices.
---

# Synapse brand style

Synapse (سِنابس) is a Saudi non-profit (NGO) for data and AI, founded 2024-07-29 in Jeddah,
licensed under SDAIA (license #1000623900). The site is Arabic-only, RTL (`dir="rtl" lang="ar"`).
This guide is grounded in the actual live production site (synapseksa.tech, currently WordPress),
not invented.

## Design tokens

All colors, spacing, radius, and shared gradients live in one file: `CSS/variables.css`.
Never hardcode a hex value that already has a token. Never add a second `:root` block to any
CSS file, that's the exact duplication bug this codebase had before cleanup, see
`clean-code-static-site`.

Brand colors (from the live theme CSS):
- `--color-primary: #01acd3` (main brand blue)
- `--color-primary-dark: #3b9b9f`
- `--color-accent-teal: #1dbfc1`
- `--color-accent-blue: #6ec1e4`
- `--color-accent-green: #7a8f78`
- `--color-accent-tan: #b17f5c`
- Tints: `--color-tint-light: #edfaff`, `--color-tint-soft: #d8f2fb`

## Fonts

- **Primary UI font**: Cairo (Google Fonts, weights 300-900). Already loaded once in
  `_includes/head.html`, sitewide. Don't re-load it per page.
- **Display/brand font, `synapse`, sitewide**: a custom self-hosted font
  (`Assets/fonts/synapse-brand.woff2/.woff`, `@font-face` in `variables.css`, class `.synapse`
  or `var(--font-display)`). `--font-display` is set to `"synapse"` and applied sitewide to all
  `h1` to `h4` elements via a global rule in `variables.css` (loads on every page). Body/paragraph/
  nav text stays on `--font-primary` (Cairo).
  - **Confirmed against the live source (2026-09-24)**: pulled synapseksa.tech's WordPress admin
    source and found the live site's only custom font is this exact one, served via the "Use Any
    Font" plugin (`/wp-content/uploads/useanyfont/uaf.css`, `font-family: 'synapse'`, `.synapse`
    class) and applied sitewide there too, matches this repo's setup exactly. Downloaded the
    live `.woff2` and checksummed it against `Assets/fonts/synapse-brand.woff2`: byte-identical
    (77,160 bytes, same hash). Nothing to fetch or change here, this was already correct.
- **Thmanyah font**: not shipped. The org owner tried it (2026-09-24) and it is unused. Its license
  (font.thmanyah.com/licenses) prohibits hosting the raw font files or making them extractable via web
  embedding, and this repo is public, so the `.woff2` files and `@font-face` rules were kept out. If it
  is requested again, point back to this note; it would need a local-only copy or explicit approval.

## Logo assets

Use the current live logo files, not the older local exports:
- `Assets/logos/synapse-logo-live.png`: full horizontal lockup (name + mark), use in nav/header.
- `Assets/logos/synapse-mark-live.webp`: the neural-network mark alone on a cream circle, use for
  favicon and as a generic/neutral blog thumbnail when no real topical photo exists.

## Real photography over stock/abstract art

This org runs real in-person events (workshops, camps, board meetings). When a page or blog post
needs an image, prefer a real photo from `Assets/images/` (or pulled fresh from synapseksa.tech)
over an abstract gradient or a fabricated stock-style image. Never invent a photo of an event that
didn't happen, or attribute a quote/bio to a person not confirmed in real site content.

## Layout patterns already established

- Full-bleed photo hero with a `rgba(0,0,0,0.78)` dark overlay, centered white text, single
  primary CTA button. See `.hero-section` in `CSS/style.css` and `index.html`.
- `.service-card` grid (`.services-wrapper`) for any "3-4 items" feature/offering list.
- `.cta-button.primary` / `.cta-button.secondary` for all calls to action, inside a
  `.cta-container`.

## Content facts to get right

- Org founded: 29 يوليو 2024, license 1000623900, under SDAIA (سدايا).
- Three service pillars: أكاديمية Synapse (education), ابتكار الحلول الذكية (consulting),
  استقطاب المواهب (talent).
- Location: جدة، المملكة العربية السعودية.
- Contact: SynapseAdmin@synapseksa.com, @synapseksa on X and LinkedIn.

When in doubt about current live content (new events, new team members, updated copy), it's
worth re-checking synapseksa.tech rather than assuming this guide is still current, the org
publishes new events/photos regularly.
