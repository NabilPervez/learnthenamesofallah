"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavLink = ({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon: React.ElementType }) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Button
      asChild
      variant={isActive ? "default" : "secondary"}
      size="sm"
      className="shadow-lg"
    >
      <Link href={href} className="flex items-center gap-2">
        <Icon className="h-4 w-4" />
        {children}
      </Link>
    </Button>
  );
};

export default function Header() {
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <NavLink href="/" icon={BookOpen}>Learn</NavLink>
      <NavLink href="/quiz" icon={HelpCircle}>Quiz</NavLink>
    </div>
  );
}
