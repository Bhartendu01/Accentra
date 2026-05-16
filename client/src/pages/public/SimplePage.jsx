import Page from '../../components/ui/Page';

const copy = {
  about: 'Accentra helps learners build speaking confidence with structured lessons, pronunciation analysis, AI support, and measurable progress.',
  features: 'Speech recognition, lesson pathways, flashcards, quizzes, conversation practice, admin analytics, certificates, and multi-language learning modules.',
  pricing: 'Choose a free starter plan, premium fluency plan, or team dashboard for schools and organizations.',
  contact: 'Reach the Accentra team for partnerships, school pilots, and product support.'
};

export default function SimplePage({ title, kind }) {
  return <Page className="mx-auto min-h-screen max-w-4xl px-5 pt-36"><h1 className="text-5xl font-black">{title}</h1><p className="mt-6 text-xl leading-9 text-slate-600 dark:text-slate-300">{copy[kind]}</p></Page>;
}
