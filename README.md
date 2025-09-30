# vineyards

A static website for JK Farms vineyards with scroll-based and interactive animations.

## View locally

Open `index.html` in your browser directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

No build step is required. Assets use CDN and local files in `assets/`.

## Animations

- AOS (Animate On Scroll) powers scroll-triggered fades and zooms.
- Subtle CSS keyframes animate the hero title and background.
- Buttons, cards, and gallery items include hover transitions.

You can tweak timings in `assets/js/main.js` (AOS.init) and edit styles in `assets/css/styles.css`.
