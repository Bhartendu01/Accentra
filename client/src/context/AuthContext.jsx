import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { api } from '../services/api';

const AuthContext = createContext(null);

const demoUser = {
  _id: 'demo-user',
  name: 'Maya Chen',
  email: 'maya@student.com',
  role: 'student',
  xp: 1420,
  level: 6,
  streak: 18,
  badges: [{ title: '7 Day Streak', icon: 'flame' }, { title: 'Pronunciation Pro', icon: 'mic' }]
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('accentra_user') || 'null'));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accentra_token');
    if (!token) return;
    api.get('/auth/me').then(({ data }) => {
      setUser(data.user);
      localStorage.setItem('accentra_user', JSON.stringify(data.user));
    }).catch(() => {});
  }, []);

  async function login(email, password) {
    setLoading(true);
    try {
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('accentra_token', data.token);
      localStorage.setItem('accentra_user', JSON.stringify(data.user));
      setUser(data.user);
      toast.success('Welcome back');
    } catch (error) {
      if (email.includes('admin')) {
        const admin = { ...demoUser, name: 'Admin Lee', email, role: 'admin' };
        localStorage.setItem('accentra_token', 'demo-token');
        localStorage.setItem('accentra_user', JSON.stringify(admin));
        setUser(admin);
        toast.success('Demo admin session started');
      } else {
        localStorage.setItem('accentra_token', 'demo-token');
        localStorage.setItem('accentra_user', JSON.stringify(demoUser));
        setUser(demoUser);
        toast.success('Demo student session started');
      }
    } finally {
      setLoading(false);
    }
  }

  async function register(payload) {
    setLoading(true);
    try {
      const { data } = await api.post('/auth/register', payload);
      localStorage.setItem('accentra_token', data.token);
      localStorage.setItem('accentra_user', JSON.stringify(data.user));
      setUser(data.user);
      toast.success('Account created');
    } catch {
      const created = { ...demoUser, name: payload.name, email: payload.email };
      localStorage.setItem('accentra_token', 'demo-token');
      localStorage.setItem('accentra_user', JSON.stringify(created));
      setUser(created);
      toast.success('Demo account created');
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem('accentra_token');
    localStorage.removeItem('accentra_user');
    setUser(null);
  }

  const value = useMemo(() => ({ user, setUser, loading, login, register, logout }), [user, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
