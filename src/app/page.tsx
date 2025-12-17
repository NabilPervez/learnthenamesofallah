import NameCard from "@/components/NameCard";
import { namesOfAllah } from "@/data/names";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-8 pb-24">
        <div className="mb-12 space-y-6 text-center">
          <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">Why Learn His Names?</h2>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              Understanding the beautiful names of Allah draws us closer to Him, transforming our relationship with our Creator through knowledge and love.
            </p>
            <div className="relative rounded-xl bg-background/50 p-6 shadow-sm">
              <p className="italic text-foreground/80">
                "Allah has ninety-nine names, i.e. one-hundred minus one, and whoever knows them will go to Paradise."
              </p>
              <p className="mt-2 text-sm font-semibold text-primary">— Prophet Muhammad ﷺ (Sahih Bukhari 2736)</p>
            </div>
          </div>

          <div>
            <h1 className="mb-2 font-headline text-4xl font-bold text-primary md:text-5xl">
              The 99 Names of Allah
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse, learn, and reflect upon the beautiful names of God.
            </p>
          </div>
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
