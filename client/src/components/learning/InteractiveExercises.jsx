import { useState } from 'react';
import toast from 'react-hot-toast';
import { Brain, CheckCircle2, RotateCcw } from 'lucide-react';
import Card from '../ui/Card';

export function Flashcards({ items }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const item = items[index % items.length];
  return (
    <Card>
      <div className="flex items-center justify-between"><h3 className="text-lg font-black">Flashcards</h3><Brain className="text-teal-500" /></div>
      <button onClick={() => setFlipped((v) => !v)} className="mt-4 min-h-40 w-full rounded-lg bg-slate-100 p-6 text-center dark:bg-slate-800">
        <p className="text-3xl font-black">{flipped ? item.translation : item.term}</p>
        <p className="mt-2 text-slate-500">{flipped ? item.example : 'Tap to reveal'}</p>
      </button>
      <button onClick={() => { setIndex(index + 1); setFlipped(false); }} className="mt-3 inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2 font-bold text-white dark:bg-teal-300 dark:text-ink"><RotateCcw size={16} /> Next</button>
    </Card>
  );
}

export function FillBlank({ exercise }) {
  const [selected, setSelected] = useState('');
  return (
    <Card>
      <h3 className="text-lg font-black">Fill in the blank</h3>
      <p className="mt-3 text-xl font-bold">{exercise.prompt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {exercise.options.map((option) => <button key={option} onClick={() => setSelected(option)} className={`rounded-lg px-4 py-2 font-bold ${selected === option ? 'bg-teal-500 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>{option}</button>)}
      </div>
      <button onClick={() => toast[selected === exercise.answer ? 'success' : 'error'](selected === exercise.answer ? 'Correct' : 'Try again')} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2 font-bold text-white dark:bg-teal-300 dark:text-ink"><CheckCircle2 size={16} /> Check</button>
    </Card>
  );
}

export function MatchWord() {
  const pairs = [['bonjour', 'hello'], ['merci', 'thank you'], ['livre', 'book']];
  const [matches, setMatches] = useState({});
  return (
    <Card>
      <h3 className="text-lg font-black">Match the word</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">{pairs.map(([word]) => <div key={word} className="rounded-lg bg-slate-100 p-3 font-bold dark:bg-slate-800">{word}</div>)}</div>
        <div className="space-y-2">{pairs.map(([, meaning]) => <button key={meaning} onClick={() => setMatches({ ...matches, [meaning]: true })} className="block w-full rounded-lg bg-white p-3 text-left font-bold shadow-sm dark:bg-slate-950">{meaning}</button>)}</div>
      </div>
      <p className="mt-3 text-sm text-slate-500">{Object.keys(matches).length}/3 matched</p>
    </Card>
  );
}
