import { useState } from 'react';
import { money } from '../utils/format';

export default function CartDrawer({ items, setQty, onOrder, onClose }) {
  const [placed, setPlaced] = useState(false);
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const needsRx = items.some((i) => i.rx);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40" onClick={onClose}>
      <aside
        role="dialog"
        aria-label="Your cart"
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-full max-w-md flex-col bg-bg p-5"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-head text-2xl font-bold">Your cart</h2>
          <button onClick={onClose} className="rounded-md border border-line px-3 py-1 text-sm">Close</button>
        </div>

        {placed ? (
          <div className="mt-10">
            <p className="font-head text-xl font-bold">Order placed</p>
            <p className="mt-2 text-mute">We’ll confirm by phone before packing. Keep your prescription ready for any items that need one.</p>
          </div>
        ) : items.length === 0 ? (
          <p className="mt-10 text-mute">Your cart is empty. Add a medicine or device from the shelf.</p>
        ) : (
          <>
            <ul className="mt-5 flex-1 divide-y divide-line overflow-y-auto">
              {items.map((i) => (
                <li key={i.id} className="flex items-center justify-between gap-3 py-3">
                  <div>
                    <p className="font-semibold">{i.name}</p>
                    <p className="text-sm text-mute">{money(i.price)} each</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button aria-label="Decrease" onClick={() => setQty(i.id, i.qty - 1)} className="h-8 w-8 rounded-md border border-line">−</button>
                    <span className="w-6 text-center">{i.qty}</span>
                    <button aria-label="Increase" onClick={() => setQty(i.id, i.qty + 1)} className="h-8 w-8 rounded-md border border-line">+</button>
                  </div>
                </li>
              ))}
            </ul>
            {needsRx && (
              <p className="mb-3 rounded-md bg-amber p-3 text-sm font-medium text-[#2b1a00]">
                Your cart has prescription items. Show the prescription when you collect.
              </p>
            )}
            <div className="flex items-center justify-between border-t border-line pt-4">
              <span className="text-mute">Total</span>
              <span className="font-head text-2xl font-bold">{money(total)}</span>
            </div>
            <button
              onClick={() => { onOrder(); setPlaced(true); }}
              className="mt-4 rounded-md bg-pine py-3 font-semibold text-onpine"
            >
              Place order
            </button>
          </>
        )}
      </aside>
    </div>
  );
}
