import QuizClient from "@/components/QuizClient";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const VALID_MODES = [
    "name-to-meaning",
    "meaning-to-name",
    "name-to-meaning-99",
    "meaning-to-name-99",
];

export default function QuizModePage({ params }: { params: { mode: string } }) {
  const { mode } = params;

  if (!VALID_MODES.includes(mode)) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold">Invalid Quiz Mode</h1>
        <p className="my-4">Please select a valid quiz mode from the options below.</p>
        <Button asChild>
            <Link href="/quiz">Choose Quiz</Link>
        </Button>
      </div>
    );
  }

  return <QuizClient mode={mode} />;
}