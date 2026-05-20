import { Outlet, Link, NavLink } from 'react-router-dom';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function PublicLayout() {
  const { dark, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-[#07111f] dark:text-white">
      <header className="fixed inset-x-0 top-3 z-50 mx-auto w-[94%] max-w-7xl rounded-full glass">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2 font-extrabold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-teal-200 dark:bg-white dark:text-ink"><Sparkles size={18} /></span>
            Accentra
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300 md:flex">
            {['About', 'Features', 'Pricing', 'Contact'].map((item) => <NavLink key={item} to={`/${item.toLowerCase()}`}>{item}</NavLink>)}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-white/10" aria-label="Toggle theme">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
            <Link to="/login" className="hidden rounded-full px-4 py-2 text-sm font-bold hover:bg-slate-100 dark:hover:bg-white/10 sm:block">Login</Link>
            <Link to="/register" className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-white shadow-glow dark:bg-teal-300 dark:text-ink">Start free</Link>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
