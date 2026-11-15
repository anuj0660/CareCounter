import { useState } from 'react';
import AdminLogin from '../components/admin/AdminLogin';
import AddDrugForm from '../components/admin/AddDrugForm';
import InventoryTable from '../components/admin/InventoryTable';
import { LOW_STOCK } from '../utils/format';

export default function Admin({ store, onExit }) {
  const [signedIn, setSignedIn] = useState(false);
  const [q, setQ] = useState('');
  const { products, addProduct, updateProduct, removeProduct } = store;

  if (!signedIn) return <AdminLogin onSuccess={() => setSignedIn(true)} onExit={onExit} />;

  const rows = products.filter((p) =>
    (p.name + ' ' + p.comp + ' ' + p.type + ' ' + p.cat).toLowerCase().includes(q.trim().toLowerCase())
  );
  const units = products.reduce((sum, p) => sum + p.stock, 0);
  const low = products.filter((p) => p.stock <= LOW_STOCK).length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="font-head text-3xl font-bold">Drug inventory</h1>
        <button onClick={onExit} className="rounded-md border border-line px-4 py-2 text-sm font-semibold">Back to shop</button>
      </div>
      <p className="mt-2 text-mute">
        {products.length} drugs, {units} units in stock, {low} running low ({LOW_STOCK} or fewer).
      </p>

      <AddDrugForm onAdd={addProduct} />

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search by name, composition or type"
        aria-label="Search inventory"
        className="mt-6 w-full rounded-md border border-line bg-bg px-3 py-2 text-sm sm:w-96"
      />
      <InventoryTable rows={rows} onUpdate={updateProduct} onRemove={removeProduct} />
      {rows.length === 0 && <p className="mt-4 text-mute">No drug matches that search.</p>}
    </div>
  );
}
