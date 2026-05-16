import { useState } from 'react';
import { CheckCircle2, Headphones, MessageSquareText } from 'lucide-react';
import toast from 'react-hot-toast';
import Page from '../../components/ui/Page';
import Card from '../../components/ui/Card';
import SpeechPracticeCard from '../../components/speech/SpeechPracticeCard';
import { FillBlank, Flashcards, MatchWord } from '../../components/learning/InteractiveExercises';
import { sampleLesson } from '../../data/mockData';
import { api } from '../../services/api';

export default function LessonPlayer({ quizOnly = false }) {
  const [lesson] = useState(sampleLesson);
  async function complete() {
    try {
      await api.post('/progress/complete', { lessonId: lesson._id });
    } catch {}
    toast.success('Lesson completed. XP awarded.');
  }
  return (
    <Page className="space-y-6">
      <Card className="bg-ink text-white dark:bg-slate-900">
        <p className="font-bold uppercase tracking-widest text-teal-200">Lesson player</p>
        <h2 className="mt-2 text-3xl font-black">{quizOnly ? 'Quiz Section' : lesson.title}</h2>
        <div className="mt-4 flex flex-wrap gap-2">{lesson.objectives.map((item) => <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-sm font-bold">{item}</span>)}</div>
      </Card>
      {!quizOnly && <div className="grid gap-6 xl:grid-cols-[1fr_.7fr]"><Flashcards items={lesson.vocabulary} /><Card><h3 className="text-lg font-black">Grammar focus</h3>{lesson.grammar.map((item) => <div key={item.title} className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-800"><p className="font-black">{item.title}</p><p className="mt-1 text-slate-600 dark:text-slate-300">{item.body}</p></div>)}</Card></div>}
      <div className="grid gap-6 xl:grid-cols-2"><FillBlank exercise={lesson.exercises.find((item) => item.type === 'fill-blank')} /><MatchWord /></div>
      {!quizOnly && <SpeechPracticeCard sentence={lesson.speakingSentences[0]} />}
      <Card>
        <h3 className="text-lg font-black">Listening comprehension</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Listen to the prompt, then repeat the key phrase with natural rhythm.</p>
        <div className="mt-4 flex gap-3"><button onClick={() => window.speechSynthesis.speak(new SpeechSynthesisUtterance(lesson.speakingSentences[1]))} className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-3 font-bold dark:bg-slate-800"><Headphones size={18} /> Play</button><button onClick={complete} className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-3 font-black text-white"><CheckCircle2 size={18} /> Complete lesson</button></div>
      </Card>
      <Card><h3 className="flex items-center gap-2 text-lg font-black"><MessageSquareText size={18} /> Recent activity</h3><p className="mt-2 text-slate-500">You practiced polite requests, completed one fill-in exercise, and unlocked a speaking challenge.</p></Card>
    </Page>
  );
}
