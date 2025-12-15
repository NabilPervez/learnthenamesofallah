"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const NavLink = ({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon: React.ElementType }) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link href={href}>
      <span className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      )}>
        <Icon className="h-4 w-4" />
        {children}
      </span>
    </Link>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <nav className="flex items-center gap-4">
          <NavLink href="/" icon={BookOpen}>Learn</NavLink>
          <NavLink href="/quiz" icon={HelpCircle}>Quiz</NavLink>
        </nav>
      </div>
    </header>
  );
}
