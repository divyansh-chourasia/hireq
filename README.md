# Hireq

A one-page Next.js copy of Manage Wise. The page is at https://managewise-clne.netlify.app/. The site it follows is https://managewise.framer.website/.

`app/page.js` is the only route. It stacks a fixed bar, a hero, a features block, a dark “and more” block, an integration block, an FAQ, pricing, testimonials, a closing band, and a footer.

The bar shows the logo and the labels Features, FAQ, Pricing, and Testimonials. Each label points at `/`. Buy Template has no handler. On a small screen the labels sit behind a toggle. The FAQ, pricing, and testimonial sections have ids, and the bar does not use them.

The FAQ questions come from `data/data.js`. A row opens when its header is clicked. Pricing is three cards: Free at $0 a month, Standard at $25, and Business at $42. The plan buttons have no destination. Testimonials are a CSS loop of the four reviews in `data/reviews.js`: Alex, Emily, David, and Sarah. The same four are rendered twice so the loop can repeat. Get Started, Watch Demo, and Try out now are buttons with no destination. The footer repeats the section names as text, prints “© 2022 ManageWise, Inc.”, and shows Instagram, X, and LinkedIn icons that are not links.

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
