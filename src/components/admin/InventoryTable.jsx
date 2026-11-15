
import { useState } from 'react';
import { TYPES } from '../../data/products';
import { LOW_STOCK } from '../../utils/format';

const inp = 'rounded-md border border-line bg-bg px-3 py-2 text-sm';

// Convert image into compressed Base64
const imageToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement('canvas');

        const maxSize = 900;
        const scale = Math.min(
          1,
          maxSize / Math.max(img.width, img.height)
        );

        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);

        const ctx = canvas.getContext('2d');

        ctx.drawImage(
          img,
          0,
          0,
          canvas.width,
          canvas.height
        );

        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };

      img.onerror = reject;
      img.src = reader.result;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export default function InventoryTable({ rows, onUpdate, onRemove }) {
  const [pending, setPending] = useState(null);
  const [uploading, setUploading] = useState(null);

  // Upload or change medicine image
  const handleImage = async (id, file) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Image size must be less than 5MB.');
      return;
    }

    try {
      setUploading(id);

      const image = await imageToBase64(file);

      onUpdate(id, { image });

    } catch (error) {
      console.error('Image upload failed:', error);
      alert('Unable to upload image.');
    } finally {
      setUploading(null);
    }
  };

  return (
    <div className="mt-3 overflow-x-auto rounded-lg border border-line bg-surface">

      <table className="w-full min-w-[1050px] text-left text-sm">

        <thead className="border-b border-line text-mute">
          <tr>
            {[
              'Drug',
              'Image',
              'Type',
              'Composition',
              'Price',
              'Quantity',
              'Rx',
              ''
            ].map((h, i) => (
              <th key={i} className="px-3 py-2 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-line">

          {rows.map((p) => (
            <tr key={p.id} className="align-top">

              {/* Drug Name */}
              <td className="px-3 py-2">
                <p className="font-semibold">{p.name}</p>
                <p className="text-xs text-mute">{p.cat}</p>
              </td>

              {/* Image Upload */}
              <td className="px-3 py-2">
                <div className="flex flex-col gap-2">

                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-16 w-16 rounded-md border border-line object-contain bg-white"
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-md border border-dashed border-line bg-bg">
                      <span className="text-xs text-mute">No Image</span>
                    </div>
                  )}

                  <label className="cursor-pointer rounded-md border border-line px-2 py-2 text-center text-xs hover:bg-bg">

                    {uploading === p.id
                      ? 'Uploading...'
                      : p.image
                        ? 'Change Photo'
                        : 'Add Photo'}

                    <input
                      type="file"
                      accept="image/*"
                      disabled={uploading === p.id}
                      className="hidden"
                      onChange={(e) => {
                        handleImage(p.id, e.target.files[0]);
                        e.target.value = '';
                      }}
                    />

                  </label>

                </div>
              </td>

              {/* Medicine Type */}
              <td className="px-3 py-2">
                <select
                  value={p.type}
                  onChange={(e) =>
                    onUpdate(p.id, { type: e.target.value })
                  }
                  aria-label={'Type of ' + p.name}
                  className={inp + ' w-full'}
                >
                  {TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </td>

              {/* Composition */}
              <td className="px-3 py-2">
                <textarea
                  rows="2"
                  value={p.comp}
                  onChange={(e) =>
                    onUpdate(p.id, { comp: e.target.value })
                  }
                  aria-label={'Composition of ' + p.name}
                  className={inp + ' w-full'}
                />
              </td>

              {/* Price */}
              <td className="px-3 py-2">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={p.price}
                  onChange={(e) =>
                    onUpdate(p.id, {
                      price: Number(e.target.value)
                    })
                  }
                  aria-label={'Price of ' + p.name}
                  className={inp + ' w-24'}
                />
              </td>

              {/* Stock */}
              <td className="px-3 py-2">

                <div className="flex items-center gap-1">

                  <button
                    onClick={() =>
                      onUpdate(p.id, {
                        stock: Math.max(0, p.stock - 10)
                      })
                    }
                    aria-label="Remove 10 units"
                    className="h-9 rounded-md border border-line px-2"
                  >
                    −10
                  </button>

                  <input
                    type="number"
                    min="0"
                    value={p.stock}
                    onChange={(e) =>
                      onUpdate(p.id, {
                        stock: Math.max(0, Number(e.target.value))
                      })
                    }
                    aria-label={'Quantity of ' + p.name}
                    className={
                      inp +
                      ' w-20 ' +
                      (p.stock <= LOW_STOCK
                        ? 'ring-2 ring-amber'
                        : '')
                    }
                  />

                  <button
                    onClick={() =>
                      onUpdate(p.id, {
                        stock: p.stock + 10
                      })
                    }
                    aria-label="Add 10 units"
                    className="h-9 rounded-md border border-line px-2"
                  >
                    +10
                  </button>

                </div>

                {p.stock <= LOW_STOCK && (
                  <p className="mt-1 text-xs font-semibold text-amber">
                    {p.stock === 0
                      ? 'Out of stock'
                      : 'Running low'}
                  </p>
                )}

              </td>

              {/* Prescription */}
              <td className="px-3 py-2">
                <input
                  type="checkbox"
                  checked={p.rx}
                  onChange={(e) =>
                    onUpdate(p.id, { rx: e.target.checked })
                  }
                  aria-label={'Needs prescription: ' + p.name}
                />
              </td>

              {/* Remove Product */}
              <td className="px-3 py-2">

                {pending === p.id ? (

                  <div className="flex flex-col items-start gap-1">

                    <button
                      onClick={() => {
                        onRemove(p.id);
                        setPending(null);
                      }}
                      className="rounded-md bg-amber px-2 py-1 text-xs font-semibold text-[#2b1a00]"
                    >
                      Yes, remove
                    </button>

                    <button
                      onClick={() => setPending(null)}
                      className="text-xs text-mute underline"
                    >
                      Cancel
                    </button>

                  </div>

                ) : (

                  <button
                    onClick={() => setPending(p.id)}
                    className="text-xs text-mute underline"
                  >
                    Remove
                  </button>

                )}

              </td>

            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}
