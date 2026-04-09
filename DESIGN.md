# Design Brief

## Direction

Professional Services Platform — Modern, accessible grid-based interface for digital services with integrated payment section.

## Tone

Clean corporate minimalism with purposeful blue accents — crafted for trust, clarity, and mobile-first service discovery.

## Differentiation

Service cards with intelligent highlight states (Aadhaar/PAN/Xerox) and soft elevation shadows create tactile hierarchy; hover-scale interactions + integrated QR payment section combine usability with modern SaaS aesthetics.

## Color Palette

| Token      | OKLCH         | Role                           |
| ---------- | ------------- | ------------------------------ |
| background | 0.98 0.008230 | Off-white page base            |
| foreground | 0.18 0.015230 | Primary text, deep cool grey   |
| card       | 1.0 0.004230  | Service cards, popover         |
| primary    | 0.42 0.14 240 | Ocean blue CTA, accent borders |
| accent     | 0.6 0.15 170  | Teal highlights, secondary     |
| muted      | 0.94 0.01 230 | Subtle backgrounds, dividers   |
| border     | 0.9 0.008 230 | Input, card edges              |

## Typography

- Display: Space Grotesk — bold section headings, feature titles
- Body: Figtree — service descriptions, labels, body text
- Scale: Hero `text-5xl md:text-6xl font-bold`, h2 `text-3xl md:text-4xl font-bold`, body `text-base leading-relaxed`

## Elevation & Depth

Soft shadow hierarchy (shadow-soft on base cards, shadow-elevated on hover) creates perceived depth without visual noise; accent borders on featured services replace heavy backgrounds for restraint.

## Structural Zones

| Zone     | Background       | Border         | Notes                               |
| -------- | ---------------- | -------------- | ----------------------------------- |
| Header   | card (white)     | border-b soft  | Sticky, minimal depth               |
| Content  | background       | —              | Clean off-white base                |
| Services | card shadow-soft | border (soft)  | 3-col desktop, 2-col tablet, 1 mobile |
| Payment  | muted/10 tint    | border-primary | QR section with soft background     |
| Footer   | muted/20 tint    | border-t soft  | Low contrast divider                |

## Spacing & Rhythm

Section gaps 4rem desktop / 2rem mobile, card padding 1.5rem, micro-spacing 0.5rem—1rem; tight tracking on headings (tracking-tight) creates hierarchy without size alone.

## Component Patterns

- Buttons: primary bg-primary text-white rounded-md shadow-soft hover:shadow-elevated transition-smooth
- Cards: bg-card border border-border shadow-soft rounded-lg hover:shadow-elevated hover:scale-105 (card-hover)
- Highlighted cards: border-2 border-primary bg-gradient-to-br from-primary/5 to-transparent
- Icons: text-primary icon-hover (scale-110 on hover)
- QR section: bg-muted/10 border border-muted-foreground/20 rounded-lg padding-4

## Motion

- Entrance: Staggered fade-in on card load (0.2s per card)
- Hover: Scale 1.05 + shadow elevation on service cards, scale 1.1 on icons (transition-smooth)
- Decorative: Float animation (±12px, 3s) on QR code icon

## Constraints

- Always use semantic tokens (no hex/rgb literals in components)
- Maximum 3 shadow intensities (soft, elevated, none)
- Accent color (teal) used sparingly — only for secondary actions and status
- Mobile-first: 1-col baseline, tablet 2-col, desktop 3-col grid
- WCAG AA contrast maintained on all text/background pairs

## Signature Detail

Soft highlight borders on Aadhaar/PAN/Xerox services with faint gradient background create visual distinction without garish highlighting — professional yet friendly.
