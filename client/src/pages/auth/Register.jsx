import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Page from '../../components/ui/Page';

export default function Register() {
  const { register, loading } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', nativeLanguage: 'English', targetLanguages: ['Spanish'] });
  async function submit(event) {
    event.preventDefault();
    await register(form);
    navigate('/dashboard');
  }
  return (
    <Page className="grid min-h-screen place-items-center px-5 pt-24">
      <form onSubmit={submit} className="glass w-full max-w-lg rounded-lg p-6 shadow-glow">
        <h1 className="text-3xl font-black">Create your learning profile</h1>
        {['name', 'email', 'password'].map((field) => <div key={field}><label className="mt-5 block text-sm font-bold capitalize">{field}</label><input type={field === 'password' ? 'password' : 'text'} value={form[field]} onChange={(e) => setForm({ ...form, [field]: e.target.value })} required className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-950" /></div>)}
        <label className="mt-5 block text-sm font-bold">Target language</label>
        <select value={form.targetLanguages[0]} onChange={(e) => setForm({ ...form, targetLanguages: [e.target.value] })} className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-950">
          {['English', 'Spanish', 'French', 'German', 'Japanese'].map((lang) => <option key={lang}>{lang}</option>)}
        </select>
        <button disabled={loading} className="mt-6 w-full rounded-lg bg-ink px-4 py-3 font-black text-white dark:bg-teal-300 dark:text-ink">{loading ? 'Creating...' : 'Start learning'}</button>
      </form>
    </Page>
  );
}
