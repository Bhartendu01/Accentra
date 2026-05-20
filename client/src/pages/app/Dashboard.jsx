import { Award, BookOpen, Flame, Star, Target } from 'lucide-react';
import Page from '../../components/ui/Page';
import Card from '../../components/ui/Card';
import { AccuracyChart, WeeklyProgressChart } from '../../components/charts/ProgressCharts';
import { leaderboard, sampleCourses } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  const stats = [['Daily streak', user?.streak || 18, Flame], ['XP points', user?.xp || 1420, Star], ['Completed lessons', 37, BookOpen], ['Goal', '20 min', Target]];
  return (
    <Page className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map(([label, value, Icon]) => <Card key={label}><Icon className="text-teal-500" /><p className="mt-3 text-sm font-bold text-slate-500">{label}</p><p className="text-3xl font-black">{value}</p></Card>)}</div>
      <div className="grid gap-6 xl:grid-cols-[1fr_.8fr]"><WeeklyProgressChart /><AccuracyChart /></div>
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <Card><h3 className="text-lg font-black">Recommended lessons</h3><div className="mt-4 grid gap-3">{sampleCourses.slice(0, 3).map((course) => <div key={course._id} className="flex items-center justify-between rounded-lg bg-slate-100 p-4 dark:bg-slate-800"><div><p className="font-black">{course.title}</p><p className="text-sm text-slate-500">{course.estimatedHours} hours • {course.level}</p></div><Award style={{ color: course.accentColor }} /></div>)}</div></Card>
        <Card><h3 className="text-lg font-black">Leaderboard</h3><div className="mt-4 space-y-3">{leaderboard.map((person, i) => <div key={person.name} className="flex items-center justify-between"><span className="font-bold">{i + 1}. {person.name}</span><span className="text-sm font-black text-teal-600">{person.xp} XP</span></div>)}</div></Card>
      </div>
    </Page>
  );
}
