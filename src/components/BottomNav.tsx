"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BottomNav() {
    const pathname = usePathname();

    const navItems = [
        {
            label: "Learn",
            href: "/",
            icon: BookOpen,
            active: pathname === "/" || pathname.startsWith("/name"),
        },
        {
            label: "Quiz",
            href: "/quiz",
            icon: HelpCircle,
            active: pathname.startsWith("/quiz"),
        },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 items-center justify-around pb-2">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex flex-col items-center justify-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                            item.active ? "text-primary" : "text-muted-foreground"
                        )}
                    >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
