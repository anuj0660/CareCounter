import { useState } from 'react';
import useProducts from './hooks/useProducts';
import useCart from './hooks/useCart';
import Shop from './pages/Shop';
import Admin from './pages/Admin';

export default function App() {
  const [view, setView] = useState('shop');
  const store = useProducts();
  const cart = useCart(store.products);

  // Called when the customer presses "Place order"
  const placeOrder = () => {
    store.reduceStock(cart.cart);
    cart.clear();
  };

  if (view === 'admin') {
    return <Admin store={store} onExit={() => setView('shop')} />;
  }
  return (
    <Shop
      products={store.products}
      cart={cart}
      onOrder={placeOrder}
      onOpenAdmin={() => setView('admin')}
    />
  );
}
