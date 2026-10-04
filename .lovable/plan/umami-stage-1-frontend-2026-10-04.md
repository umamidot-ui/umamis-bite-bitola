# UMAMI Stage 1 Frontend

## Goal
Build a polished, mobile-first Macedonian ordering experience for UMAMI'S SUSHI & BURRITO, using the selected frosted-glass fusion direction and generated food photography.

## What will be built
- Shared responsive header, mobile menu, footer, buttons, modal, product cards, category cards, cart items, and product customization controls.
- Home page with food-led hero, categories, eight popular products, ordering benefits, and restaurant contact details.
- Full menu plus dedicated Burritos, Sushi, Salads, and Bowls pages with category filtering and realistic temporary MKD pricing.
- Product detail pages with ingredients, add-ons, quantity controls, and add-to-cart behavior.
- Functional cart with quantity editing, removal, subtotals, total, and session-only persistence.
- Checkout placeholder that summarizes the cart and clearly marks ordering completion for Stage 2.
- Responsive layouts for the requested mobile, tablet, and desktop widths, with Macedonian interface copy throughout.

## Technical details
- Keep all temporary catalog data in one typed frontend data module so it can later be replaced by cloud data.
- Use a React context with `sessionStorage` for the Stage 1 cart; no database, authentication, payments, or admin features.
- Create a route file for every requested URL and unique metadata for every page.
- Use semantic design tokens in the global stylesheet, generated image assets, and the project’s existing TanStack routing setup.
- Add a small UMAMI favicon and record the frontend architecture decision in `AGENTS.md`.

## Verification
- Check the current build status after implementation.
- Exercise menu, product customization, cart updates, persistence, and checkout navigation in the browser.
- Visually inspect both 390px mobile and desktop layouts for clipping, overlap, and readability.
