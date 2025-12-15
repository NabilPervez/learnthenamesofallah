"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Home, Loader2, RotateCw, XCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface QuizResult {
  score: number;
  total: number;
  answers: {
    question: string;
    yourAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
  }[];
  mode: string;
}

export default function SummaryPage() {
  const router = useRouter();
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    const savedResult = sessionStorage.getItem('quizResult');
    if (savedResult) {
      const parsedResult = JSON.parse(savedResult);
      // a bit of a hack to get the correct score on this page
      const correctAnswers = parsedResult.answers.filter((a: any) => a.isCorrect).length;
      parsedResult.score = correctAnswers;
      setResult(parsedResult);
    } else {
      router.push('/quiz');
    }
  }, [router]);

  if (!result) {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">Loading results...</p>
        </div>
    );
  }
  
  const scorePercentage = (result.score / result.total) * 100;

  return (
    <div className="container mx-auto max-w-3xl p-4 py-12">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-4xl">Quiz Complete!</CardTitle>
          <CardDescription className="text-lg">Here's how you did.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="flex flex-col items-center justify-center rounded-lg bg-secondary p-8">
            <p className="text-muted-foreground">Your Score</p>
            <p className="text-6xl font-bold text-primary">{scorePercentage.toFixed(0)}%</p>
            <p className="text-lg text-muted-foreground">You answered {result.score} out of {result.total} questions correctly.</p>
          </div>

          <div>
            <h3 className="font-headline text-2xl mb-4 text-center">Review Your Answers</h3>
            <div className="space-y-4">
              {result.answers.map((answer, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <p className="font-bold mb-2 pr-4">{answer.question}</p>
                    {answer.isCorrect ? (
                       <CheckCircle2 className="h-6 w-6 text-accent-foreground flex-shrink-0" />
                    ) : (
                       <XCircle className="h-6 w-6 text-destructive flex-shrink-0" />
                    )}
                  </div>
                  <p className={cn(
                    "text-sm",
                    answer.isCorrect ? "text-muted-foreground" : "text-destructive"
                  )}>
                    Your answer: {answer.yourAnswer}
                  </p>
                  {!answer.isCorrect && (
                    <p className="text-sm text-accent-foreground">
                      Correct answer: {answer.correctAnswer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button asChild size="lg">
                <Link href={`/quiz/${result.mode}`}>
                    <RotateCw className="mr-2 h-4 w-4" /> Retake Quiz
                </Link>
             </Button>
             <Button asChild variant="outline" size="lg">
                <Link href="/">
                    <Home className="mr-2 h-4 w-4" /> Go to Home
                </Link>
             </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
