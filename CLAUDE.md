# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fashion e-commerce landing page for the brand **"PLAIMANAS"**, built from a Figma design mockup.

- **Figma:** `https://www.figma.com/design/ku9ERu3OAY4kXmahJqzRZ7/Frontend-test?node-id=1-2`
- **Design references:** `doc/` folder contains `Web page.jpg` (desktop), `Web page-mb.png` (mobile), `Dropdown.jpg`, `Sub Menu.png`, and component variant screenshots

## Tech Stack

Pure HTML/CSS/JS — no framework, no bundler, no package manager. Open `index.html` directly or serve with any static server (e.g. `npx serve .` or VS Code Live Server).

## Architecture

**Single-page layout** in `index.html` with sections rendered top-to-bottom: header → hero → new-arrival → bestseller → collections → marquee → features → faq → inquiry → footer.

### CSS

- **Entry point:** `styles/styles.css` — imports all section stylesheets via `@import`
- **One file per section:** `base.css`, `้header.css`, `hero.css`, `new-arrival.css`, `bestseller.css`, `collections.css`, `marquee.css`, `features.css`, `faq.css`, `inquiry.css`, `footer.css`
- **Note:** The header CSS file has a Thai character prefix (`้header.css`) — this is intentional, preserve this filename
- **CSS nesting:** Uses native CSS nesting throughout (no preprocessor). Selectors are scoped by nesting inside the section's root class (e.g. `.header { .nav { ... } }`)
- **Custom properties** defined in `:root` in `base.css`: `--color-black`, `--color-white`, `--color-gray-*`, `--font-sans`, `--font-display`, `--font-arial`, `--nav-height`, `--page-max` (1440px), `--page-px` (40px desktop / 20px mobile)
- **Responsive breakpoint:** Single breakpoint at `max-width: 768px` for mobile, handled within each section file via `@media` queries
- **Fonts:** "Hanken Grotesk" (Google Fonts, display/headings) + "Arial Custom" (local woff in `assets/fonts/`, body/nav text)

### JavaScript

Minimal vanilla JS, no modules:
- `scripts/faq.js` — FAQ tab switching (data-tab ↔ data-panel, toggling `hidden` attribute)
- `scripts/mobile-menu.js` — Hamburger toggle + mobile dropdown accordion (toggling `is-open`/`is-active` classes)

Both scripts are loaded at the bottom of `<body>`.

### Assets

- `assets/images/` — Product images (jpg)
- `assets/videos/` — Hero video (`mockup_video576.mp4`), bestseller video, collection images (stored in videos/ despite being jpg)
- `assets/fonts/` — Arial Custom woff files

## Naming Conventions

- Section classes match their CSS filename (`.hero`, `.bestseller`, `.faq`, etc.)
- Child elements use simple descriptive names nested under the section (`.hero .title`, `.faq .tab`)
- BEM-style naming only for mobile menu components (`.mobile-menu__links`, `.mobile-menu__dropdown-toggle`)
- State classes: `is-open`, `is-active`, `tab--active`, modifier: `card--wide`, `col--newsletter`

## Figma MCP

The `.claude/settings.local.json` grants access to Figma MCP tools for reading design context. The Figma file is owned by the FTL team — ensure the file is shared with the authenticated Figma account before using MCP tools.
