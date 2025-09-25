import { useState } from 'react';
import { PasswordScreen } from './PasswordScreen';
import { WelcomeScreen } from './WelcomeScreen';
import { QuestionScreen } from './QuestionScreen';
import { FinalScreen } from './FinalScreen';
import { BackgroundMusic } from './BackgroundMusic';

enum GameState {
  PASSWORD,
  WELCOME, 
  QUESTIONS,
  FINAL
}

const questions = [
  {
    image: '/images/p2.jpeg',
    question: 'Qual o nome desse evento que você visitou?',
    options: ['showrrasco', 'fogo de chão fest', 'torresmo fest', 'olinda bbq'],
    correctAnswer: 2
  },
  {
    image: '/images/p3.jpeg',
    question: 'Onde foi tirada essa foto?',
    options: ['campina grande', 'joão pessoa', 'recife', 'garanhuns'],
    correctAnswer: 3
  },
  {
    image: '/images/p4.jpeg',
    question: 'Onde você meteu pra dentro essa pizza?',
    options: ['campina grande', 'joão pessoa', 'recife', 'garanhuns'],
    correctAnswer: 0
  },
  {
    image: '/images/p5.jpeg',
    question: 'Qual cidade você estava turistando quando tirou essa foto?',
    options: ['curitiba', 'fortaleza', 'natal', 'buenos aires'],
    correctAnswer: 1
  },
  {
    image: '/images/p6.jpeg',
    question: 'Qual o nome desse simpático humorista?',
    options: ['joão', 'júnior', 'jamilleumanoites', 'jader'],
    correctAnswer: 3
  },
  {
    image: '/images/p7.jpeg',
    question: 'Qual o nome desse rapaz que você considera um segundo pai?',
    options: ['bezerra', 'breno', 'bento', 'bartolomeu'],
    correctAnswer: 0
  },
  {
    image: '/images/p8.jpeg',
    question: 'Onde foi tirada essa foto?',
    options: ['toritama', 'arcoverde', 'taquaritinga do norte', 'bonito'],
    correctAnswer: 2
  },
  {
    image: '/images/p9.jpeg',
    question: 'Qual o nome do barbeiro que sempre te dá um trato (lá ele)?',
    options: ['dorgival', 'erivan', 'max', 'jaciel'],
    correctAnswer: 1
  },
  {
    image: '/images/p10.jpeg',
    question: 'Em que posição estão os pais da sua afilhada?',
    options: ['no fundo', 'na direita', 'na esquerda', 'não estão aí'],
    correctAnswer: 2
  }
];

export const Quiz = () => {
  const [gameState, setGameState] = useState(GameState.PASSWORD);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showMusic, setShowMusic] = useState(false);

  const handlePasswordCorrect = () => {
    setShowMusic(true);
    setGameState(GameState.WELCOME);
  };

  const handleStart = () => {
    setGameState(GameState.QUESTIONS);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameState(GameState.FINAL);
    }
  };

  return (
    <>
      {showMusic && <BackgroundMusic />}
      
      {gameState === GameState.PASSWORD && (
        <PasswordScreen onCorrectPassword={handlePasswordCorrect} />
      )}
      
      {gameState === GameState.WELCOME && (
        <WelcomeScreen onStart={handleStart} />
      )}
      
      {gameState === GameState.QUESTIONS && (
        <QuestionScreen
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onNext={handleNextQuestion}
        />
      )}
      
      {gameState === GameState.FINAL && (
        <FinalScreen />
      )}
    </>
  );
};