import { Activity, BookOpen, CheckCircle2, Users } from 'lucide-react';
import Page from '../../components/ui/Page';
import Card from '../../components/ui/Card';
import { AdminBars, AccuracyChart } from '../../components/charts/ProgressCharts';

export default function AdminDashboard() {
  const stats = [['Users', '12,480', Users], ['Active learners', '3,920', Activity], ['Courses', 15, BookOpen], ['Completion', '72%', CheckCircle2]];
  return (
    <Page className="space-y-6">
      <div><p className="font-bold uppercase tracking-widest text-teal-600">Admin analytics</p><h2 className="text-3xl font-black">Platform overview</h2></div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map(([label, value, Icon]) => <Card key={label}><Icon className="text-teal-500" /><p className="mt-3 text-sm font-bold text-slate-500">{label}</p><p className="text-3xl font-black">{value}</p></Card>)}</div>
      <div className="grid gap-6 xl:grid-cols-2"><AdminBars /><AccuracyChart /></div>
    </Page>
  );
}
