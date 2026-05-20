import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { BarChart3, BookOpen, Bot, GraduationCap, LayoutDashboard, LogOut, Mic, Settings, Shield, Users } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const studentLinks = [
  ['Dashboard', '/dashboard', LayoutDashboard],
  ['Courses', '/courses', BookOpen],
  ['Speaking', '/speaking', Mic],
  ['Progress', '/progress', BarChart3],
  ['Tutor', '/tutor', Bot],
  ['Profile', '/profile', Settings]
];
const adminLinks = [
  ['Admin', '/admin', Shield],
  ['Users', '/admin/users', Users],
  ['Courses', '/admin/courses', GraduationCap],
  ['Analytics', '/admin/analytics', BarChart3]
];

export default function AppShell({ admin = false }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const links = admin ? adminLinks : studentLinks;
  return (
    <div className="min-h-screen bg-slate-100 text-slate-950 dark:bg-[#07111f] dark:text-white">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-slate-200 bg-white/85 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70 lg:block">
        <div className="mb-8 text-2xl font-black">Accentra</div>
        <nav className="space-y-2">
          {links.map(([label, to, Icon]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `flex items-center gap-3 rounded-lg px-4 py-3 font-semibold ${isActive ? 'bg-ink text-white dark:bg-teal-300 dark:text-ink' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10'}`}>
              <Icon size={18} /> {label}
            </NavLink>
          ))}
        </nav>
        <button onClick={() => { logout(); navigate('/'); }} className="absolute bottom-5 flex items-center gap-3 rounded-lg px-4 py-3 font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10">
          <LogOut size={18} /> Logout
        </button>
      </aside>
      <main className="lg:pl-72">
        <div className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-teal-600">AI language studio</p>
            <h1 className="text-lg font-black">Welcome, {user?.name?.split(' ')[0] || 'Learner'}</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">{user?.streak || 0} day streak</span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-black text-teal-200">{user?.name?.[0] || 'A'}</span>
          </div>
        </div>
        <div className="p-4 pb-24 lg:p-8"><Outlet /></div>
        <nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-5 gap-1 rounded-2xl bg-white p-2 shadow-2xl dark:bg-slate-900 lg:hidden">
          {links.slice(0, 5).map(([label, to, Icon]) => <NavLink key={to} to={to} className="grid place-items-center rounded-xl p-2 text-xs font-bold"><Icon size={18} />{label}</NavLink>)}
        </nav>
      </main>
    </div>
  );
}
