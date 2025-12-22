# Changelog

All notable changes to this project will be documented in this file.

## 2025-12-22

- Birthday Mode enhancements:
  - Added `BirthdayEffects` (confetti burst + floating balloons) overlay that respects `prefers-reduced-motion` and does not block interaction.
  - Shimmering `birthdayBadge`, subtle celebratory background for `.page.birthday`, and a “✨ Celebrate again” button to replay confetti.
  - Files: `src/app/components/BirthdayEffects.jsx`, `src/app/routes.jsx`, `src/styles/theme.css`.
- Gallery lightbox improvements:
  - Lightbox now renders via a React portal to make it truly full-screen and independent of the gallery container.
  - Close button fixed to the viewport’s top-right; increased image bounds to better use the screen.
  - Files: `src/app/components/Gallery.jsx`, `src/styles/theme.css`.

## Earlier (2025-12)

- Implemented vertical timeline with centered markers and connector arms.
- Added Gallery with lightbox and Videos section.
- Introduced Birthday Mode activation via date or URL param.
- Various layout refinements (e.g., x-axis overflow clamp).
