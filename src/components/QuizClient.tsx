"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { namesOfAllah } from "@/data/names";
import type { NameOfAllah, QuizQuestion } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

const generateQuestions = (mode: string): QuizQuestion[] => {
  const is99Questions = mode.endsWith("-99");
  const baseMode = is99Questions ? mode.slice(0, -3) : mode;
  const totalQuestions = is99Questions ? 99 : 10;
  
  const shuffledNames = shuffleArray([...namesOfAllah]);
  const questions: QuizQuestion[] = [];

  for (let i = 0; i < totalQuestions; i++) {
    const correctName = shuffledNames[i];
    let options: string[] = [];
    
    const questionProperty = baseMode === 'name-to-meaning' ? 'transliteration' : 'meaning';
    const answerProperty = baseMode === 'name-to-meaning' ? 'meaning' : 'transliteration';

    const correctAnswer = correctName[answerProperty];
    options.push(correctAnswer);

    const otherNames = namesOfAllah.filter(n => n.id !== correctName.id);
    const shuffledOthers = shuffleArray(otherNames);

    for (let j = 0; j < 3; j++) {
      options.push(shuffledOthers[j][answerProperty]);
    }

    questions.push({
      name: correctName,
      options: shuffleArray(options),
      questionProperty,
      answerProperty
    });
  }

  return questions;
};

export default function QuizClient({ mode }: { mode: string }) {
  const router = useRouter();
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);

  const totalQuestions = questions.length;

  useEffect(() => {
    setQuestions(generateQuestions(mode));
  }, [mode]);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;

    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.name[currentQuestion.answerProperty];
    const correct = answer === correctAnswer;
    
    setSelectedAnswer(answer);
    setIsCorrect(correct);
    if (correct) {
      setScore(s => s + 1);
    }
    setUserAnswers(prev => [...prev, {
      question: currentQuestion.name[currentQuestion.questionProperty],
      yourAnswer: answer,
      correctAnswer: correctAnswer,
      isCorrect: correct
    }])

    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(i => i + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        // End of quiz
        const quizResult = {
          score,
          total: totalQuestions,
          answers: [...userAnswers, {
            question: currentQuestion.name[currentQuestion.questionProperty],
            yourAnswer: answer,
            correctAnswer: correctAnswer,
            isCorrect: correct
          }],
          mode
        };
        sessionStorage.setItem('quizResult', JSON.stringify(quizResult));
        router.push(`/quiz/${mode}/summary`);
      }
    }, 1500);
  };

  if (questions.length === 0) {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">Loading Quiz...</p>
        </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="container mx-auto flex max-w-2xl flex-col items-center justify-center p-4 py-12">
      <Card className="w-full">
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="font-headline text-xl">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </CardTitle>
            <p className="font-bold text-lg text-primary">Score: {score}</p>
          </div>
          <Progress value={progress} className="w-full" />
        </CardHeader>
        <CardContent>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="my-8 text-center">
                <CardDescription className="mb-2 text-lg">
                  {currentQuestion.questionProperty === 'transliteration' ? 'What is the meaning of:' : 'Which name means:'}
                </CardDescription>
                <p className={cn(
                    "text-3xl md:text-4xl font-bold text-primary",
                    currentQuestion.questionProperty === 'transliteration' && 'font-headline'
                  )}>
                  {currentQuestion.name[currentQuestion.questionProperty]}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {currentQuestion.options.map((option, i) => {
                  const isSelected = selectedAnswer === option;
                  const isTheCorrectAnswer = option === currentQuestion.name[currentQuestion.answerProperty];
                  
                  return (
                    <Button
                      key={i}
                      variant="outline"
                      className={cn(
                        "h-auto min-h-[4rem] whitespace-normal justify-start p-4 text-left text-base",
                        isSelected && isCorrect && "bg-accent/50 border-accent text-accent-foreground",
                        isSelected && !isCorrect && "bg-destructive/50 border-destructive",
                        !isSelected && selectedAnswer && isTheCorrectAnswer && "bg-accent/50 border-accent",
                        selectedAnswer && "pointer-events-none"
                      )}
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </Button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}