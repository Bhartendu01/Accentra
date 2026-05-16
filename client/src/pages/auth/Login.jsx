import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Chrome } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Page from '../../components/ui/Page';

export default function Login() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: 'maya@student.com', password: 'Password123!' });
  async function submit(event) {
    event.preventDefault();
    await login(form.email, form.password);
    navigate(form.email.includes('admin') ? '/admin' : '/dashboard');
  }
  return (
    <Page className="grid min-h-screen place-items-center px-5 pt-24">
      <form onSubmit={submit} className="glass w-full max-w-md rounded-lg p-6 shadow-glow">
        <h1 className="text-3xl font-black">Welcome back</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Use the demo account or your API-backed account.</p>
        <label className="mt-6 block text-sm font-bold">Email</label>
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-950" />
        <label className="mt-4 block text-sm font-bold">Password</label>
        <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-950" />
        <button disabled={loading} className="mt-6 w-full rounded-lg bg-ink px-4 py-3 font-black text-white dark:bg-teal-300 dark:text-ink">{loading ? 'Signing in...' : 'Login'}</button>
        <a href={`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/auth/google`} className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 font-black shadow-sm dark:bg-white/10"><Chrome size={18} /> Continue with Google</a>
        <p className="mt-4 text-center text-sm">New here? <Link className="font-black text-teal-600" to="/register">Create account</Link></p>
      </form>
    </Page>
  );
}
