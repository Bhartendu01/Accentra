import { useState } from 'react';
import { Send } from 'lucide-react';
import Page from '../../components/ui/Page';
import Card from '../../components/ui/Card';
import { api } from '../../services/api';

export default function ChatbotTutor() {
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hi, I am your Accentra tutor. Ask me about grammar, meaning, pronunciation, or conversation practice.' }]);
  const [input, setInput] = useState('');
  async function send() {
    if (!input.trim()) return;
    const next = [...messages, { role: 'user', content: input }];
    setMessages(next);
    setInput('');
    try {
      const { data } = await api.post('/chat', { message: input, language: 'English' });
      setMessages([...next, { role: 'assistant', content: data.reply.content }]);
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Try this: break the sentence into subject, verb, and object. Then speak it slowly once, and naturally once.' }]);
    }
  }
  return (
    <Page className="mx-auto max-w-4xl">
      <Card className="min-h-[70vh]">
        <h2 className="text-3xl font-black">AI chatbot tutor</h2>
        <div className="mt-6 space-y-3">{messages.map((message, i) => <div key={`${message.role}-${i}`} className={`rounded-lg p-4 ${message.role === 'user' ? 'ml-auto bg-ink text-white dark:bg-teal-500' : 'bg-slate-100 dark:bg-slate-800'} max-w-[82%]`}><p>{message.content}</p></div>)}</div>
        <div className="mt-6 flex gap-2"><input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} placeholder="Ask a grammar question..." className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-950" /><button onClick={send} className="rounded-lg bg-ink px-4 py-3 text-white dark:bg-teal-300 dark:text-ink"><Send /></button></div>
      </Card>
    </Page>
  );
}
