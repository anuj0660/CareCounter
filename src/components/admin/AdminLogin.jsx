import { useState } from 'react';

// Demo passcode only. It ships inside the JavaScript bundle, so anyone can read it.
// Real admin login needs a backend (see README).
const PASSCODE = import.meta.env.VITE_ADMIN_PASSCODE || 'admin123';

export default function AdminLogin({ onSuccess, onExit }) {
  const [pw, setPw] = useState('');
  const [bad, setBad] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (pw === PASSCODE) onSuccess();
    else setBad(true);
  };

  return (
    <div className="mx-auto max-w-sm px-4 py-20">
      <h1 className="font-head text-3xl font-bold">Admin sign in</h1>
      <form onSubmit={submit} className="mt-5 grid gap-3">
        <input
          type="password"
          value={pw}
          onChange={(e) => { setPw(e.target.value); setBad(false); }}
          placeholder="Passcode"
          aria-label="Passcode"
          className="rounded-md border border-line bg-bg px-3 py-2 text-sm"
        />
        {bad && <p className="text-sm font-medium text-amber">Wrong passcode. Try again.</p>}
        <button className="rounded-md bg-pine py-2 font-semibold text-onpine">Sign in</button>
        <button type="button" onClick={onExit} className="text-sm text-mute underline">Back to shop</button>
      </form>
    </div>
  );
}
