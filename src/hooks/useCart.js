import { useState } from 'react';

export default function useCart(products) {
  const [cart, setCart] = useState({}); // { [productId]: quantity }

  const add = (p) =>
    setCart((c) => ({ ...c, [p.id]: Math.min((c[p.id] || 0) + 1, p.stock) }));

  const setQty = (id, n) =>
    setCart((c) => {
      const next = { ...c };
      const stock = products.find((p) => p.id === id)?.stock ?? n;
      if (n <= 0) delete next[id];
      else next[id] = Math.min(n, stock);
      return next;
    });

  const clear = () => setCart({});

  const items = products.filter((p) => cart[p.id]).map((p) => ({ ...p, qty: cart[p.id] }));
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return { cart, items, count, add, setQty, clear };
}
