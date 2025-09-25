import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface Question {
  image: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onNext: () => void;
}

export const QuestionScreen = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onNext 
}: QuestionScreenProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = () => {
    const answerIndex = parseInt(selectedAnswer);
    if (answerIndex === question.correctAnswer) {
      onNext();
    } else {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className={`min-h-screen quiz-gradient flex items-center justify-center p-8 transition-all duration-300 ${isShaking ? 'shake' : ''}`}>
      <div className="text-center text-white max-w-4xl animate-fade-in">
        <div className="mb-6">
          <span className="text-white/70 text-lg">
            {questionNumber} de {totalQuestions}
          </span>
        </div>
        
        <div className="mb-8">
          <img
            src={question.image}
            alt={`Pergunta ${questionNumber}`}
            className="mx-auto rounded-lg shadow-lg max-w-md max-h-80 object-cover"
          />
        </div>

        <h2 className="text-2xl mb-8 font-medium">
          {question.question}
        </h2>

        <RadioGroup
          value={selectedAnswer}
          onValueChange={setSelectedAnswer}
          className="mb-8 space-y-4"
        >
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-3 justify-center glassmorphism p-3 rounded-lg hover:bg-white/20 transition-all cursor-pointer">
              <RadioGroupItem
                value={index.toString()}
                id={`option-${index}`}
                className="border-2 border-white text-white data-[state=checked]:bg-white data-[state=checked]:text-primary"
              />
              <Label
                htmlFor={`option-${index}`}
                className="text-white text-lg cursor-pointer flex-1 text-left"
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <Button
          onClick={handleSubmit}
          disabled={!selectedAnswer}
          className="glassmorphism text-white text-xl px-8 py-4 hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
          size="lg"
        >
          Responder
        </Button>
      </div>
    </div>
  );
};