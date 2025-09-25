import { Button } from '@/components/ui/button';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen quiz-gradient flex items-center justify-center p-8">
      <div className="text-center text-white max-w-2xl animate-fade-in">
        <h1 className="text-6xl font-bold mb-8">Quiz dos 43</h1>
        <p className="text-xl mb-12 leading-relaxed">
          a cada ano que passa, a memória vai junto com a falta de dor nas costas, 
          facilidade pra emagrecer, e por aí vai... será que você tem o que é 
          necessário para vencer o Quiz dos 43?
        </p>
        <Button
          onClick={onStart}
          className="glassmorphism text-white text-xl px-8 py-4 hover:bg-white/20 transition-all duration-300"
          size="lg"
        >
          Jogar
        </Button>
      </div>
    </div>
  );
};