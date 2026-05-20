import Page from '../../components/ui/Page';
import SpeechPracticeCard from '../../components/speech/SpeechPracticeCard';

export default function SpeakingPractice() {
  return (
    <Page className="space-y-6">
      <div><p className="font-bold uppercase tracking-widest text-teal-600">Pronunciation lab</p><h2 className="text-3xl font-black">Real-time speech recognition</h2></div>
      <SpeechPracticeCard sentence="Could you recommend a quiet table near the window?" />
      <SpeechPracticeCard sentence="I am learning a new language every day." />
    </Page>
  );
}
