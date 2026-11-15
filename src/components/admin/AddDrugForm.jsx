import { useState } from 'react';
import { TYPES } from '../../data/products';

const BLANK = { name: '', note: '', cat: '', type: 'Tablet', comp: '', price: '', stock: '', rx: false };
const inp = 'rounded-md border border-line bg-bg px-3 py-2 text-sm';

export default function AddDrugForm({ onAdd }) {
  const [f, setF] = useState(BLANK);
  const set = (key) => (e) => setF({ ...f, [key]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    onAdd(f);
    setF(BLANK);
  };

  return (
    <form onSubmit={submit} className="mt-6 grid gap-3 rounded-lg border border-line bg-surface p-4 sm:grid-cols-2 lg:grid-cols-4">
      <h2 className="font-head text-lg font-bold sm:col-span-2 lg:col-span-4">Add a drug</h2>
      <input required value={f.name} onChange={set('name')} placeholder="Drug name and strength" aria-label="Drug name" className={inp} />
      <select value={f.type} onChange={set('type')} aria-label="Type of medicine" className={inp}>
        {TYPES.map((t) => <option key={t}>{t}</option>)}
      </select>
      <input value={f.cat} onChange={set('cat')} placeholder="Category, e.g. Cold & Cough" aria-label="Category" className={inp} />
      <input value={f.note} onChange={set('note')} placeholder="Pack size, e.g. Strip of 10" aria-label="Pack size" className={inp} />
      <input required value={f.comp} onChange={set('comp')} placeholder="Composition (active ingredients)" aria-label="Composition" className={inp + ' lg:col-span-2'} />
      <input required type="number" min="0" step="0.01" value={f.price} onChange={set('price')} placeholder="Price" aria-label="Price" className={inp} />
      <input required type="number" min="0" value={f.stock} onChange={set('stock')} placeholder="Quantity in stock" aria-label="Quantity" className={inp} />
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={f.rx} onChange={(e) => setF({ ...f, rx: e.target.checked })} /> Needs prescription
      </label>
      <button className="rounded-md bg-pine py-2 font-semibold text-onpine lg:col-span-3">Add drug</button>
    </form>
  );
}
