import Link from "next/link";
import type { NameOfAllah } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface NameCardProps {
  name: NameOfAllah;
}

export default function NameCard({ name }: NameCardProps) {
  return (
    <Link href={`/name/${name.id}`} className="group">
      <Card className="h-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-primary">
        <CardHeader className="p-4">
          <CardTitle className="font-headline text-lg text-center text-primary group-hover:text-primary/90">
            {name.transliteration}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <CardDescription className="text-center text-sm group-hover:text-foreground">
            {name.meaning}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
