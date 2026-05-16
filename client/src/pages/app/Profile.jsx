import { useState } from 'react';
import toast from 'react-hot-toast';
import Card from '../../components/ui/Card';
import Page from '../../components/ui/Page';
import { useAuth } from '../../context/AuthContext';

export default function Profile() {
  const { user, setUser } = useAuth();
  const [form, setForm] = useState({ name: user?.name || '', dailyGoalMinutes: user?.dailyGoalMinutes || 20, nativeLanguage: user?.nativeLanguage || 'English' });
  function save() {
    const updated = { ...user, ...form };
    setUser(updated);
    localStorage.setItem('accentra_user', JSON.stringify(updated));
    toast.success('Profile updated');
  }
  return (
    <Page className="max-w-3xl">
      <Card>
        <h2 className="text-3xl font-black">Profile settings</h2>
        <div className="mt-6 grid gap-4">
          <label className="font-bold">Name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-950" /></label>
          <label className="font-bold">Daily goal minutes<input type="number" value={form.dailyGoalMinutes} onChange={(e) => setForm({ ...form, dailyGoalMinutes: Number(e.target.value) })} className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-950" /></label>
          <label className="font-bold">Native language<input value={form.nativeLanguage} onChange={(e) => setForm({ ...form, nativeLanguage: e.target.value })} className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-950" /></label>
          <button onClick={save} className="rounded-lg bg-ink px-4 py-3 font-black text-white dark:bg-teal-300 dark:text-ink">Save changes</button>
        </div>
      </Card>
    </Page>
  );
}
