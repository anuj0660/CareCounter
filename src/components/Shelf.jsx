import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';

export default function Shelf({ products, onAdd }) {
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');

  const categories = ['All', ...new Set(products.map((p) => p.cat))];
  const shown = useMemo(
    () =>
      products.filter(
        (p) => (cat === 'All' || p.cat === cat) && p.name.toLowerCase().includes(q.trim().toLowerCase())
      ),
    [products, cat, q]
  );

  return (
    <section id="shelf" className="mx-auto max-w-6xl px-4 pb-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-head text-3xl font-bold">The shelf</h2>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by medicine name"
          aria-label="Search medicines"
          className="w-full rounded-md border border-line bg-surface px-4 py-2 sm:w-72"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
            className={
              'rounded-full border px-4 py-1.5 text-sm font-medium transition ' +
              (cat === c ? 'border-pine bg-pine text-onpine' : 'border-line bg-surface')
            }
          >
            {c}
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="mt-8 text-mute">No medicine matches your search. Check the spelling or pick another category.</p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((p) => <ProductCard key={p.id} product={p} onAdd={onAdd} />)}
        </div>
      )}
    </section>
  );
}
