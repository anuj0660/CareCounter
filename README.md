<<<<<<< HEAD
# CareCounter Pharmacy

Medical shop website built with React 18, Vite and Tailwind CSS 3.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Folder guide

| Path | What it does |
| --- | --- |
| `src/App.jsx` | Switches between the shop and the admin page; places orders |
| `src/pages/Shop.jsx` | Customer page: header, hero, shelf, footer, cart |
| `src/pages/Admin.jsx` | Admin page: stats, add form, inventory table |
| `src/components/` | Header, Hero, Shelf, ProductCard, CartDrawer, Footer, PrescriptionBadge |
| `src/components/admin/` | AdminLogin, AddDrugForm, InventoryTable |
| `src/hooks/useProducts.js` | Product list + add / update / remove / reduce stock (saved in localStorage) |
| `src/hooks/useCart.js` | Cart state, capped by stock |
| `src/data/products.js` | Starting drug list and medicine types |
| `src/utils/format.js` | `money()` helper and low-stock limit |
| `tailwind.config.js` | Colours and fonts used as Tailwind classes |
| `src/index.css` | Tailwind directives and light/dark colour variables |

## Before going live

- The admin passcode (`admin123`, or `VITE_ADMIN_PASSCODE` in a `.env` file) is visible in the browser bundle. Use a real backend login.
- Products are saved in this browser only. Move `useProducts.js` to API calls plus a database.
- Orders only reduce local stock. Add order storage, payment and prescription upload on the server.
=======
# CareCounter
>>>>>>> dff42476e996d0ce9248e1f4a9b99a4a6f5b5ee3
