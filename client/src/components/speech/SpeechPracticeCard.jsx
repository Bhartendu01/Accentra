import { useMemo, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { Mic, Square, Volume2 } from 'lucide-react';
import { api } from '../../services/api';
import Card from '../ui/Card';

function localAnalyze(expectedText, spokenText) {
  const clean = (text) => text.toLowerCase().replace(/[^\w\s']/g, '').split(/\s+/).filter(Boolean);
  const expected = clean(expectedText);
  const spoken = clean(spokenText);
  const mispronouncedWords = expected.filter((word) => !spoken.includes(word));
  const accuracy = Math.max(0, Math.round(((expected.length - mispronouncedWords.length) / expected.length) * 100));
  return {
    accuracy,
    fluency: Math.min(100, accuracy + 3),
    confidence: Math.min(100, accuracy + (spokenText ? 6 : -10)),
    mispronouncedWords,
    suggestions: mispronouncedWords.length ? mispronouncedWords.map((word) => `Repeat "${word}" slowly, then say the full sentence again.`) : ['Great clarity. Try a more natural conversation speed.']
  };
}

export default function SpeechPracticeCard({ sentence = 'I would like a cup of coffee please.' }) {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [result, setResult] = useState(null);
  const recognitionRef = useRef(null);
  const transcriptRef = useRef('');
  const supported = useMemo(() => typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition), []);

  function speak() {
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  function start() {
    if (!supported) {
      toast.error('Speech recognition is not supported in this browser');
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.onresult = (event) => {
      const text = Array.from(event.results).map((item) => item[0].transcript).join(' ');
      transcriptRef.current = text;
      setTranscript(text);
    };
    recognition.onend = () => {
      setListening(false);
      submit(transcriptRef.current);
    };
    recognitionRef.current = recognition;
    setTranscript('');
    transcriptRef.current = '';
    setResult(null);
    setListening(true);
    recognition.start();
  }

  function stop() {
    recognitionRef.current?.stop();
    setListening(false);
    setTimeout(() => submit(transcriptRef.current), 100);
  }

  async function submit(spokenText) {
    if (!spokenText.trim()) return;
    try {
      const { data } = await api.post('/pronunciation/analyze', { expectedText: sentence, spokenText });
      setResult(data.result);
    } catch {
      setResult(localAnalyze(sentence, spokenText));
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-teal-600">Speaking practice</p>
          <h2 className="mt-2 text-2xl font-black">{sentence}</h2>
        </div>
        <button onClick={speak} className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-3 font-bold dark:bg-white/10"><Volume2 size={18} /> Listen</button>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_240px]">
        <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <p className="text-sm font-semibold text-slate-500">Transcript</p>
          <p className="mt-2 min-h-16 text-lg font-bold">{transcript || 'Your speech will appear here in real time.'}</p>
          {listening && <div className="wave mt-4 flex h-12 items-center gap-1">{Array.from({ length: 32 }).map((_, i) => <span key={i} style={{ animationDelay: `${i * 30}ms` }} className="h-10 w-1 rounded-full bg-teal-500" />)}</div>}
        </div>
        <button onClick={listening ? stop : start} className={`grid place-items-center rounded-lg p-6 text-white ${listening ? 'bg-rose-500' : 'bg-ink dark:bg-teal-500'}`}>
          {listening ? <Square size={42} /> : <Mic size={42} />}
          <span className="mt-3 font-black">{listening ? 'Stop recording' : 'Start speaking'}</span>
        </button>
      </div>
      {result && (
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {['accuracy', 'fluency', 'confidence'].map((key) => <div key={key} className="rounded-lg bg-teal-50 p-4 dark:bg-teal-950/40"><p className="text-sm font-bold capitalize text-teal-700 dark:text-teal-200">{key}</p><p className="text-3xl font-black">{result[key]}%</p></div>)}
          <div className="md:col-span-3 rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-900 dark:bg-orange-950/30">
            <p className="font-black">AI feedback</p>
            <p className="mt-1 text-sm">Difficult words: {result.mispronouncedWords?.length ? result.mispronouncedWords.join(', ') : 'none'}</p>
            <ul className="mt-2 list-disc pl-5 text-sm">{result.suggestions?.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      )}
    </Card>
  );
}
