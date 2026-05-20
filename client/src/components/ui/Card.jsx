export default function Card({ children, className = '' }) {
  return <section className={`rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900 ${className}`}>{children}</section>;
}
