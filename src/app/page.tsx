import NameCard from "@/components/NameCard";
import { namesOfAllah } from "@/data/names";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2">
            The 99 Names of Allah
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse, learn, and reflect upon the beautiful names of God.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {namesOfAllah.map((name) => (
            <NameCard key={name.id} name={name} />
          ))}
        </div>
      </main>
    </>
  );
}
