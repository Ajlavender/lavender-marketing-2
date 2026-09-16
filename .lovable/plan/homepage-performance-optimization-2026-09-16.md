# Homepage Performance Optimization

## Goal
Raise mobile and desktop performance while preserving the current design, forms, video behavior, and conversion flow.

## Confirmed findings
- The header loads a 544 KB PNG logo even though it displays at roughly 120 × 32 pixels. This is the clearest image-delivery waste and also contributes to the small header movement while loading.
- The external hero video is about 88 MB. Its source is delayed until the video approaches the viewport, but it still becomes a major mobile download very early because the video sits directly below the opening area.
- The Google font stylesheet is render-blocking. The page requests multiple font families and weights before text reaches its final measurements.
- A measured layout shift occurs in the opening area when fonts and responsive layout settle; the shift moves the opening copy, form, video, and following logo section.
- Several homepage sections are split into separate files, but all of their code is proactively downloaded during browser idle time. This weakens the benefit of splitting and contributes to the unused-JavaScript finding.
- The services, projects, and before/after showcase load many large images on one long page. Lazy loading is present in several places, but the browser is not given smaller mobile-specific image choices.
- Some cache warnings come from third-party resources. Their cache rules cannot be changed from this site, so the plan removes avoidable third-party image requests and improves the files controlled by Lavender.

## Changes

### 1. Fix image delivery
- Replace the oversized navigation logo payload with an optimized transparent WebP/AVIF-sized asset while keeping the same visible branding and sharpness on high-density screens.
- Generate responsive image variants for the before/after showcase, service cards, and project previews, then serve the correct size through `srcset` and `sizes`.
- Keep explicit dimensions or aspect ratios on every image so the browser reserves space before download.
- Replace the externally hosted Google review icon with a tiny local asset to avoid an unnecessary third-party request.

### 2. Reduce the video cost
- Keep the lightweight poster as the initial visual and retain automatic floating playback and swipe-to-hide behavior.
- Attach the video only after stronger user intent: the video is near the viewport and the main page work has settled.
- Provide a compressed web-friendly video source rather than downloading the current 88 MB file on mobile.
- Respect data-saver and slower-network signals by leaving the poster in place until the visitor taps play.

### 3. Remove render-blocking font work
- Replace the render-blocking Google Fonts stylesheet with locally served, subsetted font files and preload only the one face needed for the first screen.
- Use `font-display: swap` plus metric-compatible fallbacks so the opening copy does not resize when the custom font arrives.
- Keep secondary font weights out of the critical loading path.

### 4. Reduce unused JavaScript
- Stop preloading every lower-page section during idle time.
- Load each lower section only as it approaches the viewport, with layout-matched reserved space.
- Move the before/after interaction and report preview out of the initial page code where practical, while preserving server-rendered text for search visibility.
- Keep booking/report popups out of the first download until a visitor opens one.

### 5. Eliminate the measured mobile layout shift
- Reserve stable dimensions for the header wordmark, opening copy/form columns, video frame, and announcement bar.
- Prevent font replacement from changing line breaks and section height.
- Make the opening entrance animation transform/opacity-only so it never changes document layout.
- Recheck the sticky mobile button and floating video together at the current 796 × 721 tablet viewport and common phone widths.

### 6. Cache and delivery cleanup
- Apply long-lived immutable caching to versioned local images, fonts, and media where the hosting configuration allows it.
- Remove or localize avoidable third-party assets whose cache policy is outside Lavender’s control.
- Keep only page-critical connections in the homepage head; unrelated pages will not pay for homepage-only resources.

## Verification
- Test desktop at 1280 × 1800, tablet at 796 × 721, and mobile at 393 × 852.
- Measure layout-shift entries and confirm the opening section no longer produces a visible shift.
- Inspect the network waterfall to confirm smaller responsive images, no initial video download, fewer initial scripts, and no render-blocking external font stylesheet.
- Run the production checks and confirm the forms, booking window, video controls, floating player, sliders, and sticky button still work.
- Re-run the performance report after publishing; cache scores must be judged on the published domain because preview hosting and third-party servers can report differently.
