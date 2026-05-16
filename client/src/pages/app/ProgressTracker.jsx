import { AccuracyChart, WeeklyProgressChart } from '../../components/charts/ProgressCharts';
import Card from '../../components/ui/Card';
import Page from '../../components/ui/Page';

export default function ProgressTracker() {
  return (
    <Page className="space-y-6">
      <div><p className="font-bold uppercase tracking-widest text-teal-600">Progress tracker</p><h2 className="text-3xl font-black">Learning consistency and outcomes</h2></div>
      <div className="grid gap-6 xl:grid-cols-2"><WeeklyProgressChart /><AccuracyChart /></div>
      <Card><h3 className="text-lg font-black">Certificates</h3><p className="mt-2 text-slate-600 dark:text-slate-300">Complete every lesson and score above 80% on speaking and quizzes to unlock a verifiable certificate.</p><div className="mt-4 rounded-lg border border-dashed border-teal-400 p-6 text-center font-black">Spanish Beginner Certificate • 68% complete</div></Card>
    </Page>
  );
}
