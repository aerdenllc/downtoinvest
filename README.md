# downtoinvest v2

The redesigned site, separate from the live one. All five pages from the original site rebuilt in the new design.

## Files

```
downtoinvest-v2/
├── index.html                ← homepage (Linktree style with personality)
├── investing-guide.html      ← sales page
├── etfinsight.html           ← ETF Insight marketing page (94.63% overlap demo)
├── brands.html               ← media kit for brand partnerships
├── welcome-dti9k2x.html      ← post-purchase thank-you + PDF download
├── api/
│   └── subscribe.js          ← Kit/ConvertKit waitlist signup endpoint
├── assets/
│   ├── styles.css            ← all shared styles
│   ├── mallory-hero.png      ← cutout (unused; kept for future use)
│   └── polaroid-*.jpg.png    ← Amsterdam, chess, tulips (unused)
└── README.md                 ← this file
```

## One thing you still need to copy in by hand

`guide-dti-7m4kx.pdf` couldn't be copied programmatically from the original folder. iCloud had a lock on it that the sandbox couldn't get past. To fix:

1. Open `downtoinvestLandingPage` in Finder.
2. Drag `guide-dti-7m4kx.pdf` into `downtoinvest-v2/`.

That's the file the welcome page hands to buyers after Stripe checkout.

## How to preview

The fastest way: double-click `index.html`, it'll open in your default browser.

The better way: install the **Live Server** extension in VS Code, then right-click `index.html` and pick "Open with Live Server." Changes auto-reload as you edit.

## Where your real photos go

Four photo slots in total. Convert your HEICs in Preview first
(File → Export As → JPEG for the polaroids, or PNG for the cutout),
then drop them into `assets/` with these exact filenames:

| File                          | Where it goes              | Source                |
| ----------------------------- | -------------------------- | --------------------- |
| `assets/mallory-hero.png`     | hero, top right            | the cutout (no bg)    |
| `assets/polaroid-canal.jpg`   | polaroid 1, "amsterdam"    | the canal photo       |
| `assets/polaroid-chess.jpg`   | polaroid 2, "weekend hobby"| the chess photo       |
| `assets/polaroid-tulips.jpg`  | polaroid 3, "tulip season" | the daffodil/tulip    |

**For the cutout (mallory-hero.png):**
On macOS Ventura or newer you can lift the subject straight from
Preview: open the HEIC, right-click the subject, "Copy Subject,"
then File → New from Clipboard → File → Export As → Format: PNG.
Save into `assets/`.

**For the three polaroids:**
Open each HEIC in Preview, File → Export As → Format: JPEG,
Quality around 85%. Save with the filenames in the table above.

**Then swap the placeholders for real images.**
In `index.html`:

1. Search for `HERO PHOTO`. Delete the `<div class="hero-figure placeholder">…</div>` block and uncomment the `<figure>` block right after it.
2. Search for `POLAROIDS`. In each `<figure class="polaroid …">`, replace `<div class="photo-area" aria-hidden="true">…</div>` with:
   ```html
   <div class="photo-area">
     <img src="assets/polaroid-canal.jpg" alt="" />
   </div>
   ```
   (Use the right filename per polaroid.)

That's it. The layout is already wired up for the swap.

## What you'll probably want to tweak

A few things in the copy that are placeholders or worth a once-over:

- **Testimonials on the sales page** are placeholder quotes. Swap in real ones from buyers (first name, optional photo). They live in `investing-guide.html` under the `TESTIMONIALS` section.
- **"Currently into" cards** on the homepage have generic picks. Update them to real things you're into. They're meant to feel like a living section, refreshed weekly or monthly.
- **Polaroid captions** ("monday in nyc", "desk things") are placeholders. Replace with whatever the actual photos are of.
- **YouTube count** says "Soon" since it's not launched. Update when you do.

## Deploy

Whenever you're ready to go live, the entire `downtoinvest-v2/` folder can replace your current site root. Static HTML, no build step, no dependencies beyond the Google Fonts and Tabler icons loaded from public CDNs.

If you want to preview at a real URL before swapping the live site, the easiest move is Netlify Drop ([app.netlify.com/drop](https://app.netlify.com/drop)) — drag the folder onto the page, get a preview URL in seconds, share it with anyone for feedback.

## What's still to do

The ETF Insight page (`etfinsight.html`) and Brands page (`brands.html`) on your current site haven't been redesigned yet. They still live on the existing site. When you're ready, I can do the same treatment on those.

A favicon would be a nice touch — drop a square PNG at `assets/favicon.png` and add `<link rel="icon" href="assets/favicon.png" />` inside the `<head>` of each page.

## Quick CSS reference

The design lives in `assets/styles.css`. The variables at the top control everything:

```css
--red:           #E63946;   /* the warm tomato red */
--cream-bg:      #EFE6CE;   /* outer page background */
--cream-surface: #F6EFD9;   /* main content surface */
--ink:           #1A1817;   /* near-black */
--font-sans:     'Inter';   /* body and headings */
--font-script:   'Caveat';  /* signature & captions */
```

If you ever want to dial the red warmer, cooler, or brighter, change just `--red` and it propagates everywhere.
