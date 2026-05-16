import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { api } from '../../services/api';
import { sampleCourses } from '../../data/mockData';
import Page from '../../components/ui/Page';
import Card from '../../components/ui/Card';
import Skeleton from '../../components/ui/Skeleton';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    api.get('/courses').then(({ data }) => setCourses(data.courses)).catch(() => setCourses(sampleCourses)).finally(() => setLoading(false));
  }, []);
  const visible = filter === 'All' ? courses : courses.filter((course) => course.language === filter);
  return (
    <Page>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="font-bold uppercase tracking-widest text-teal-600">Courses</p><h2 className="text-3xl font-black">Choose your learning path</h2></div><select value={filter} onChange={(e) => setFilter(e.target.value)} className="rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-900">{['All', 'English', 'Spanish', 'French', 'German', 'Japanese'].map((item) => <option key={item}>{item}</option>)}</select></div>
      {loading ? <div className="mt-6 grid gap-4 md:grid-cols-3"><Skeleton /><Skeleton /><Skeleton /></div> : <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{visible.map((course) => <Card key={course._id}><div className="flex items-start justify-between"><BookOpen style={{ color: course.accentColor }} /><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black dark:bg-white/10">{course.level}</span></div><h3 className="mt-4 text-2xl font-black">{course.title}</h3><p className="mt-2 text-slate-600 dark:text-slate-300">{course.description}</p><div className="mt-5 h-2 rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-2 w-2/5 rounded-full" style={{ background: course.accentColor }} /></div><Link to={`/lessons/${course._id}`} className="mt-5 inline-block rounded-lg bg-ink px-4 py-3 font-black text-white dark:bg-teal-300 dark:text-ink">Open course</Link></Card>)}</div>}
    </Page>
  );
}
