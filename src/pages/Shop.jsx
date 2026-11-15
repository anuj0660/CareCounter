import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Shelf from '../components/Shelf';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';

export default function Shop({ products, cart, onOrder, onOpenAdmin }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      <Header count={cart.count} onOpenCart={() => setCartOpen(true)} onOpenAdmin={onOpenAdmin} />
      <main id="top">
        <Hero />
        <Shelf products={products} onAdd={cart.add} />
      </main>
      <Footer />
      {cartOpen && (
        <CartDrawer items={cart.items} setQty={cart.setQty} onOrder={onOrder} onClose={() => setCartOpen(false)} />
      )}
    </div>
  );
}
