import { useState, useEffect } from 'react';
import { SEED_PRODUCTS } from '../data/products';

const KEY = 'carecounter-products-v1';

const load = () => {
  try {
    const saved = localStorage.getItem(KEY);
    return saved ? JSON.parse(saved) : SEED_PRODUCTS;
  } catch {
    return SEED_PRODUCTS;
  }
};

// Holds the product list and every way the app changes it.
// Data is kept in localStorage (this browser only). Swap for API calls when you add a backend.
export default function useProducts() {
  const [products, setProducts] = useState(load);

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(products)); } catch { /* storage blocked */ }
  }, [products]);

  const updateProduct = (id, patch) =>
    setProducts((list) => list.map((p) => (p.id === id ? { ...p, ...patch } : p)));

  const addProduct = (data) =>
    setProducts((list) => [
      ...list,
      { ...data, id: Date.now(), price: Number(data.price), stock: Number(data.stock), cat: data.cat.trim() || 'Other' },
    ]);

  const removeProduct = (id) => setProducts((list) => list.filter((p) => p.id !== id));

  // cart is an object like { [productId]: quantity }
  const reduceStock = (cart) =>
    setProducts((list) =>
      list.map((p) => (cart[p.id] ? { ...p, stock: Math.max(0, p.stock - cart[p.id]) } : p))
    );

  return { products, updateProduct, addProduct, removeProduct, reduceStock };
}
