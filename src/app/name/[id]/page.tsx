import { namesOfAllah } from "@/data/names";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, BookOpen, MessageSquareQuote } from "lucide-react";

export default function NameDetailPage({ params }: { params: { id: string } }) {
  const name = namesOfAllah.find((n) => n.id.toString() === params.id);

  if (!name) {
    notFound();
  }

  const quranicVerse = {
    verse: `He is Allah, the Creator, the Inventor, the Fashioner; to Him belong the best names. Whatever is in the heavens and earth is exalting Him. And He is the Exalted in Might, the Wise.`,
    chapter: `Surah Al-Hashr, 59:24`
  }

  const hadithOrStory = `The Prophet Muhammad (ﷺ) said, "Allah has ninety-nine names, i.e. one-hundred minus one, and whoever knows them will go to Paradise."`;


  return (
    <>
      <Header />
      <main className="container mx-auto max-w-3xl px-4 py-8">
        <div className="mb-6">
            <Button variant="ghost" asChild>
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Names
                </Link>
            </Button>
        </div>
        <Card className="overflow-hidden shadow-lg">
          <CardHeader className="p-6 md:p-8 bg-secondary/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <CardTitle className="font-headline text-3xl md:text-4xl text-primary mb-2">
                        {name.transliteration}
                    </CardTitle>
                    <CardDescription className="text-lg md:text-xl">
                        {name.meaning}
                    </CardDescription>
                </div>
                <div className="text-right">
                    <p className="text-4xl md:text-5xl font-arabic text-primary" style={{fontFamily: "serif"}}>
                        {name.arabic}
                    </p>
                </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-8 space-y-6">
            <div>
              <h3 className="font-headline text-xl font-semibold mb-2">Explanation</h3>
              <p className="text-base md:text-lg leading-relaxed text-foreground/80">
                {name.explanation}
              </p>
            </div>
            <Separator />
            <div className="space-y-6">
              <div>
                <h3 className="font-headline text-xl font-semibold mb-3 flex items-center">
                    <BookOpen className="mr-3 h-5 w-5 text-primary" />
                    In the Quran
                </h3>
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                    <p>"{quranicVerse.verse}"</p>
                    <footer className="mt-2 text-sm text-muted-foreground not-italic">
                        - {quranicVerse.chapter}
                    </footer>
                </blockquote>
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold mb-3 flex items-center">
                    <MessageSquareQuote className="mr-3 h-5 w-5 text-primary" />
                    Hadith & Stories
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-foreground/80">
                    {hadithOrStory}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}

export async function generateStaticParams() {
    return namesOfAllah.map((name) => ({
        id: name.id.toString(),
    }));
}
