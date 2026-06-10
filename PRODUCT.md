# Product

## Register

brand

## Users

Wedding guests of Mohammed Haseeb & Jalala Thasneem. They receive the link on WhatsApp, open it on a phone (almost never desktop), often on mid-range Android devices, and spend 30–90 seconds scrolling. Many are family elders; Arabic verses must be rendered respectfully and legibly.

## Product Purpose

A digital wedding invitation that mirrors and elevates the printed card: Bismillah, Surah Al-Furqan 25:74, the couple's names, and the event details (Seethangoli Alliance Hall, Sunday July 12 2026, Nikkah 11:30 AM). Success = guests feel the same warmth as the physical card, screenshot/share it, and know exactly where and when to show up.

## Brand Personality

Gilded, tender, ceremonial. Champagne-cream and antique gold with peach florals, copperplate script names under a mihrab arch. Feels like opening a wax-sealed envelope, not visiting a website.

## Anti-references

- The first HTML draft the user received: flat cream page, generic fade-ins, emoji hearts, system-feeling layout.
- Template wedding-site builders (Zola/WedMe cards-on-white).
- SaaS landing-page grammar: uppercase tracked eyebrows, card grids, gradient text.

## Design Principles

1. The card is canon: every color, ornament, and typeface choice must be traceable to the printed invitation.
2. Motion is the medium: this page is a 60-second cinematic scroll, mobile-only; every section earns a distinct reveal.
3. Reverence first: Quranic text is never decorated past legibility, never animated frivolously.
4. One thumb, one column: designed exclusively for ~390px portrait; desktop just gets a centered phone-width column.
5. Performance is part of elegance: 60fps on mid-range Android; transform/opacity-driven motion, light canvas particles, reduced-motion fallback.

## Accessibility & Inclusion

- prefers-reduced-motion: all choreography collapses to gentle crossfades; content never gated on animation.
- Body text contrast ≥4.5:1 against cream and espresso backgrounds.
- Arabic rendered in a proper naskh face with generous line-height, dir="rtl".
- Tap targets ≥44px (maps link, calendar link, open-invitation gate).
