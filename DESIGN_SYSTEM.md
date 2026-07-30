# Design System: Sunset & Slate — v3 (Merged Final)

## Changelog / Lineage
This merges three sources — nothing here is arbitrary, every choice traces back to a specific decision:

| Element | Source | Why |
|---|---|---|
| Radius scale (4/8/12/16/24/full) | Stitch "final" file | More systematic than flat 8-12px, genuinely better |
| Neutral-derived-from-base color philosophy | Stitch "final" file | Avoids muddy greys, good practice — kept |
| Snappy transition spec (`cubic-bezier(0.4,0,0.2,1)`, no squishy easing) | Stitch "final" file | Concrete, non-generic detail — kept |
| Hard-offset shadow depth | Stitch "final" file | Kept but scoped to ONE use (primary CTA hover only) — used everywhere it becomes a recognizable neo-brutalist template pattern |
| Two-hue accent (Terracotta + Deep Teal) | v2 (this chat) | Restores the color variety you asked for — Stitch's "final" collapsed to one hue family |
| General Sans (headline/body) + IBM Plex Mono (labels/tags/metrics) | v2 (this chat) | Restores font distinctiveness + the engineering/technical signal a CS portfolio benefits from — Stitch's "final" used one font for everything |

---

## Philosophy
Engineered for a Gen Z professional: authentic, direct, high-utility aesthetic. "Analog-Digital" — bridges tactile print media with high-performance software. Confident, no-nonsense, avoids over-processed AI visual tropes.

## Anti-AI-Slop Manifesto
- **No Gradients**: Colors are solid and decisive.
- **No Glassmorphism**: No background blurs or faux-transparency.
- **No Glows/Blooms**: Lighting is flat or hard-edged.
- **No Squishy Animations**: Transitions are snappy — `cubic-bezier(0.4, 0, 0.2, 1)`, never spring/bounce.
- **One signature depth trick, not five**: hard-offset shadow is reserved for primary CTAs only (see §Elevation) — everything else stays flat with borders.

## Color Palette

### Light Mode
- **Background**: `#FBF6F1` (Warm Ivory)
- **Text Primary**: `#1A1C1E` (Deep Slate)
- **Text Secondary**: `#5A5E63` (Muted Slate)
- **Accent — Terracotta** (primary actions, CTAs, emphasis): `#C1592D`
- **Accent — Deep Teal** (categories, secondary info, tags): `#2A6F6F`
- **Border**: `#E4DFDA`

### Dark Mode
- **Background**: `#17130F` (Warm Charcoal)
- **Text Primary**: `#FBF6F1` (Warm Ivory)
- **Text Secondary**: `#B0B3B8` (Soft Slate)
- **Accent — Terracotta**: `#E07A4C`
- **Accent — Deep Teal**: `#4FA69E`
- **Border**: `#2D2A26`

**Rule for using two accents without it looking messy**: assign each hue a fixed job. Terracotta = action (buttons, links, active states, CTAs). Deep Teal = information (category tags, project-type labels, metadata). Never mix them on the same element.

## Typography
- **Primary typeface (headline + body)**: General Sans
- **Monospace (labels, tags, metrics, tech stack chips)**: IBM Plex Mono
- **Headline weights**: ExtraBold/Bold, tight tracking (-0.02em) for large sizes
- **Body**: 16–18px, line-height 1.6
- **Labels**: IBM Plex Mono, uppercase, 0.05em tracking

## Shapes & Radius
| Token | Value | Use |
|---|---|---|
| `sm` | 4px | Checkboxes, small controls |
| `DEFAULT` | 8px | Buttons, input fields |
| `md` | 12px | Cards, modals, feature images |
| `lg` | 16px | Large containers (hero media) |
| `full` | 9999px | Tags/pills, avatars ONLY — never structural blocks |

Never 0px (reads too aggressive for this brand), never full-round on structural blocks (reads bubbly).

## Elevation & Depth
Rejects ambient shadows. Hierarchy from tonal layering + hard outlines:

1. **Level 0 (Base)**: Background color, no border.
2. **Level 1 (Cards)**: 1px solid border, text color at 15% opacity. No shadow.
3. **Level 2 (Primary CTA hover only)**: Hard offset — shift −4px X/−4px Y, solid Terracotta block behind it. **This is the one and only place this technique appears.** Applying it to every card/button is what turns a signature move into a template cliché.

## Layout & Spacing
- Base unit: 8px, internal component padding in 12px increments
- Desktop (1280px+): 12-column grid, 24px gutter, 64px margin
- Tablet: 8-column grid, 20px gutter, 40px margin
- Mobile: 4-column grid, 16px gutter, 20px margin

## Components
- **Buttons — Primary**: Solid Terracotta fill, `DEFAULT` radius (8px). Hover = hard-offset (§Elevation Level 2).
- **Buttons — Secondary**: 1px border, no fill, no hard-offset.
- **Input fields**: 1px border, label above field (never placeholder-only), mono label style.
- **Cards**: `md` radius (12px), 1px border, no shadow, no hard-offset.
- **Tags/Chips (category labels)**: `full` radius, Deep Teal — 10% opacity inactive, 100% active. Mono uppercase text.
- **Lists**: 1px dividers at 10% opacity, no bullets — small Terracotta square as indicator if needed.
- **Checkboxes**: `sm` radius (4px), Terracotta fill + surface checkmark when checked.
