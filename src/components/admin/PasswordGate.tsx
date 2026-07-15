"use client";
import { useState, FormEvent } from 'react';
import { Lock } from 'lucide-react';

// NOTE: This is intentionally simple, client-side, unencrypted access
// control — a screen, not real security. The password is bundled into
// the JS shipped to the browser (visible via devtools), and anyone with
// dev access to this repo/environment can see it. Do not put anything
// truly sensitive behind this gate. Set NEXT_PUBLIC_ADMIN_PASSWORD in
// your environment; falls back to "changeme" if unset.
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'changeme';
const SESSION_KEY = 'admin-dashboard-auth';

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  });
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (authed) return <>{children}</>;

  return (
    // Offsets for a fixed/sticky site navbar. Set --nav-height in your
    // global CSS (e.g. :root { --nav-height: 4rem; }) to match its real
    // height — 4rem is just the fallback if that variable isn't defined.
    <div className="min-h-[calc(100dvh-var(--nav-height,4rem))] flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f7c9d8]/30 mx-auto mb-4">
          <Lock size={20} className="text-[#b76e79]" />
        </div>
        <h1 className="text-xl text-center text-gray-900 mb-1">Admin Dashboard</h1>
        <p className="text-sm text-gray-500 text-center mb-6">Enter the password to continue</p>

        <input
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b76e79] mb-3"
          autoFocus
        />
        {error && <p className="text-sm text-red-500 mb-3">Incorrect password. Try again.</p>}

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] text-white hover:shadow-lg transition-all duration-300"
        >
          Unlock Dashboard
        </button>
      </form>
    </div>
  );
}
