import { useState } from 'react';
import toast from 'react-hot-toast';
import Card from '../../components/ui/Card';
import Page from '../../components/ui/Page';
import { sampleCourses } from '../../data/mockData';

export default function CourseManagement() {
  const [courses, setCourses] = useState(sampleCourses.slice(0, 6));
  const [title, setTitle] = useState('');
  function addCourse() {
    if (!title.trim()) return;
    setCourses([{ _id: title, title, language: 'English', level: 'Beginner', estimatedHours: 12, description: 'New admin-created course', accentColor: '#14b8a6' }, ...courses]);
    setTitle('');
    toast.success('Course added');
  }
  return (
    <Page className="space-y-6">
      <Card>
        <h2 className="text-3xl font-black">Course management</h2>
        <div className="mt-5 flex gap-2"><input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New course title" className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-950" /><button onClick={addCourse} className="rounded-lg bg-ink px-4 py-3 font-black text-white dark:bg-teal-300 dark:text-ink">Add</button></div>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{courses.map((course) => <Card key={course._id}><p className="text-sm font-bold text-teal-600">{course.language} • {course.level}</p><h3 className="mt-2 text-xl font-black">{course.title}</h3><p className="mt-2 text-sm text-slate-500">{course.estimatedHours} hours</p><div className="mt-4 flex gap-2"><button className="rounded-lg bg-slate-100 px-3 py-2 font-bold dark:bg-slate-800">Edit</button><button onClick={() => setCourses(courses.filter((item) => item._id !== course._id))} className="rounded-lg bg-rose-100 px-3 py-2 font-bold text-rose-700">Delete</button></div></Card>)}</div>
    </Page>
  );
}
