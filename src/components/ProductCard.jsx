
import PrescriptionBadge from './PrescriptionBadge';
import { money } from '../utils/format';

export default function ProductCard({ product: p, onAdd }) {
  const out = p.stock <= 0;

  return (
    <article className="flex flex-col rounded-lg border border-line bg-surface p-4">

      {/* Product Image */}
      <div className="mb-3 flex h-40 items-center justify-center overflow-hidden rounded-md bg-mint">

        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            className="h-30 w-100 object-contain "
          />
        ) : (
          <span className="font-head text-2xl font-extrabold leading-none text-pine">
            {p.name.split(' ')[0]}
          </span>
        )}

      </div>

      {/* Prescription Badge */}
      <PrescriptionBadge rx={p.rx} />

      {/* Product Name */}
      <h3 className="mt-2 font-head text-lg font-bold leading-snug">
        {p.name}
      </h3>

      {/* Product Details */}
      <p className="text-sm text-mute">
        {p.note}, {p.type}
      </p>

      {/* Composition */}
      {p.comp && p.comp !== '—' && (
        <p className="mt-1 text-xs text-mute">
          Contains: {p.comp}
        </p>
      )}

      {/* Stock Status */}
      <p
        className={
          'mt-1 text-xs font-semibold ' +
          (out ? 'text-amber' : 'text-pine')
        }
      >
        {out ? 'Out of stock' : p.stock + ' in stock'}
      </p>

      {/* Price and Cart */}
      <div className="mt-auto flex items-center justify-between pt-4">

        <span className="font-head text-xl font-bold">
          {money(p.price)}
        </span>

        <button
          disabled={out}
          onClick={() => onAdd(p)}
          className="rounded-md bg-pine px-3 py-2 text-sm font-semibold text-onpine transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Add to cart
        </button>

      </div>

    </article>
  );
}
