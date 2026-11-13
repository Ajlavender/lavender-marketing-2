# Reposition the platform video on the homepage

Following the advice in your notes: keep the white-label video, but take it out of the opening section and give it a clear label as an optional platform tour.

## What changes

1. **Opening section ends at the button and trust points.** The large video under the hero goes. The headline and free-design button get all the attention.
2. **New "platform overview" section** placed right after the three problem cards (before the before-and-after slider):
   - Small label: POWERED BY LAVENDER SUITE PRO
   - Headline: See how everything works together.
   - Text: Your website, customer conversations, follow-ups and reviews shouldn't run separately. See how Lavender Suite Pro brings them together to help your business run more smoothly.
   - Small line: Platform overview · 2 min 45 sec
   - Note under the video: Features shown are available across different Lavender Suite Pro plans. Some need an upgraded plan or extra setup. With a "Compare plans" link to the pricing page.
3. **Click to play, not autoplay.** The video shows its cover image with a play button. It loads only when someone presses play, and it plays with sound. No more auto-starting muted video or "Tap to unmute".
4. Both Canada and US pages get the change (spelling handled automatically).

## Not changing
- The video file itself, all other homepage sections, prices and buttons.
- No new video is made now; a short Lavender-branded one can come later.

## Technical notes
- Extract the player into `src/components/site/PlatformVideo.tsx` (poster + play button; on click attach the source and `play()` unmuted, native controls after start). Remove the IntersectionObserver/autoplay/mute logic from `src/routes/index.tsx`.
- Insert the section between `<HomeProblem />` and `<TransformationsIntro />`.
- Check desktop and phone with Playwright: hero has no video, section renders, play starts the video.
