import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function QuizPage() {
  return (
    <div className="container mx-auto flex max-w-2xl flex-col items-center justify-center p-4 py-16 text-center">
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
        Test Your Knowledge
      </h1>
      <p className="mb-12 text-lg text-muted-foreground">
        Choose a quiz mode to begin.
      </p>

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        <Link href="/quiz/name-to-meaning">
          <Card className="h-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-primary">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Name to Meaning</CardTitle>
              <CardDescription>
                10 questions. Given an Arabic name, select the correct English meaning.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full text-primary">
                Start Quiz <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>
        <Link href="/quiz/meaning-to-name">
          <Card className="h-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-primary">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Meaning to Name</CardTitle>
              <CardDescription>
                10 questions. Given an English meaning, select the correct Arabic name.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full text-primary">
                Start Quiz <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="mt-16 w-full">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
          <Star className="h-8 w-8" /> Full 99-Name Challenge
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Think you know them all? Test your knowledge with all 99 names.
        </p>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <Link href="/quiz/name-to-meaning-99">
            <Card className="h-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-primary">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Name to Meaning (99)</CardTitle>
                <CardDescription>
                  Given an Arabic name, select the correct English meaning.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full text-primary">
                  Start Quiz <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>
          <Link href="/quiz/meaning-to-name-99">
            <Card className="h-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-primary">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Meaning to Name (99)</CardTitle>
                <CardDescription>
                  Given an English meaning, select the correct Arabic name.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full text-primary">
                  Start Quiz <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}