import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Globe2, Mic, Trophy } from 'lucide-react';
import { languages } from '../../data/mockData';

const features = [
  ['Real-time pronunciation', Mic, 'Speak into the browser and get accuracy, fluency, confidence, and word-level coaching.'],
  ['AI tutor conversations', Bot, 'Ask grammar questions, translate phrases, and simulate realistic conversations.'],
  ['Gamified progress', Trophy, 'Daily goals, XP, streaks, certificates, leaderboards, and achievement badges.']
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950" />
        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 pb-20 lg:grid-cols-[1fr_.8fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-4 inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-teal-700 shadow-sm dark:bg-white/10 dark:text-teal-200">AI speech coach for global learners</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .05 }} className="max-w-4xl text-5xl font-black leading-tight sm:text-7xl">Accentra</motion.h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-600 dark:text-slate-300">A premium language learning platform combining interactive lessons, speech recognition, pronunciation scoring, AI tutor support, and progress analytics.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/register" className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-6 py-4 font-black text-white shadow-glow dark:bg-teal-300 dark:text-ink">Start learning <ArrowRight size={18} /></Link>
              <Link to="/features" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-4 font-black shadow-sm dark:bg-white/10">Explore features</Link>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} className="glass relative rounded-lg p-6 shadow-glow">
            <div className="grid aspect-square place-items-center rounded-lg bg-ink text-white dark:bg-slate-950">
              <Globe2 size={150} className="animate-pulse text-teal-300" />
              <div className="absolute grid h-56 w-56 place-items-center rounded-full border border-teal-300/40" />
              {languages.map((lang, i) => <span key={lang.name} style={{ transform: `rotate(${i * 72}deg) translateY(-140px) rotate(-${i * 72}deg)` }} className="absolute rounded-full px-3 py-2 text-xs font-black" >{lang.flag}</span>)}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {['94% accuracy', '18 day streak', '1,420 XP'].map((item) => <div key={item} className="rounded-lg bg-white p-3 text-center text-sm font-black dark:bg-white/10">{item}</div>)}
            </div>
          </motion.div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-4 md:grid-cols-3">{features.map(([title, Icon, body]) => <div key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900"><Icon className="text-teal-500" /><h3 className="mt-4 text-xl font-black">{title}</h3><p className="mt-2 text-slate-600 dark:text-slate-300">{body}</p></div>)}</div>
      </section>
      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-black">Popular languages</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{languages.map((lang) => <div key={lang.name} className="rounded-lg p-5 text-white" style={{ background: lang.color }}><p className="text-2xl font-black">{lang.name}</p><p>{lang.learners} learners</p></div>)}</div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-3">
        {['Starter', 'Fluent', 'Teams'].map((plan, i) => <div key={plan} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900"><h3 className="text-2xl font-black">{plan}</h3><p className="mt-3 text-4xl font-black">${[0, 12, 29][i]}<span className="text-base font-semibold text-slate-500">/mo</span></p><p className="mt-3 text-slate-600 dark:text-slate-300">Lessons, AI speech checks, progress analytics, and certificates.</p></div>)}
      </section>
      <footer className="border-t border-slate-200 px-5 py-10 text-center text-sm text-slate-500 dark:border-white/10">Accentra © 2026. Learn with clarity, confidence, and momentum.</footer>
    </main>
  );
}
