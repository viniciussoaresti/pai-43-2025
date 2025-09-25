import { useEffect, useState } from 'react';

export const FinalScreen = () => {
  const [confettiPieces, setConfettiPieces] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Play triumph sound effect
    const audio = new Audio();
    audio.src = '/triumph.mp3'; // You might want to add this sound effect
    audio.play().catch(() => {}); // Handle if audio fails to play

    // Generate confetti
    const pieces = Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className="confetti"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
        }}
      />
    ));
    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="min-h-screen quiz-gradient flex items-center justify-center p-8 relative overflow-hidden">
      {confettiPieces}
      
      <div className="text-center text-white max-w-4xl animate-fade-in">
        <h1 className="text-8xl font-bold mb-12 animate-scale-in">
          Parabéns!
        </h1>
        
        <div className="glassmorphism p-8 rounded-lg">
          <p className="cursive text-lg leading-relaxed">
            Parabéns não só por ter passado por todas as perguntas, mas também por mais um ciclo completo da sua vida! 
            Que esses momentos tenham lembrado ao menos um pouco dos vários e vários espaços de tempos em que aqueles 
            dias de estresse no trabalho, de desânimo, de horas no trânsito durante a semana, fazem tudo valer a pena. 
            <br /><br />
            Desejo apenas tudo de melhor na sua vida, e que Deus continue norteando e abençoando-a com tudo que for 
            lhe fazer crescer como pessoa, pai, filho, irmão, marido, chefe, colega, amigo, enfim. E que também venham 
            bênçãos de perseverança, felicidade, e muito, muito amor. 
            <br /><br />
            <span className="text-2xl">Te amo veião! ❤️</span>
          </p>
        </div>
      </div>
    </div>
  );
};