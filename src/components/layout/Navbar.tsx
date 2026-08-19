"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ctaNav, mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className="sticky top-0 z-50 border-b border-navy/8 bg-white/90 backdrop-blur-md">
            <Container className="flex h-16 items-center justify-between gap-4 lg:h-18">
                <Link
                    href="/"
                    className="group flex shrink-0 items-center gap-2.5"
                    aria-label={`${site.name} home`}
                >
                    <Image
                        src="/images/site-logo.svg"
                        alt={`${site.name} logo`}
                        width={42}
                        height={42}
                        className="h-10 w-10 object-contain"
                        priority
                    />

                    <span className="hidden font-bold text-navy sm:block">
                        {site.name}
                    </span>
                </Link>

                <nav
                    className="hidden items-center gap-1 lg:flex"
                    aria-label="Main navigation"
                >
                    {mainNav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive(item.href)
                                    ? "bg-water/10 text-water-dark"
                                    : "text-navy/70 hover:bg-navy/5 hover:text-navy"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden items-center gap-2 lg:flex">
                    {ctaNav.map((item, i) => (
                        <Button
                            key={item.href}
                            href={item.href}
                            variant={i === 0 ? "secondary" : "outline"}
                            size="sm"
                        >
                            {item.label}
                        </Button>
                    ))}
                </div>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg p-2 text-navy lg:hidden"
                    aria-expanded={open}
                    aria-label="Toggle menu"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <span className="sr-only">Menu</span>

                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        {open ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        )}
                    </svg>
                </button>
            </Container>

            {open && (
                <div className="border-t border-navy/8 bg-white lg:hidden">
                    <Container className="flex flex-col gap-1 py-4">
                        {mainNav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${isActive(item.href)
                                        ? "bg-water/10 text-water-dark"
                                        : "text-navy/70 hover:bg-navy/5"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div className="mt-3 flex flex-col gap-2 border-t border-navy/8 pt-4">
                            {ctaNav.map((item, i) => (
                                <Button
                                    key={item.href}
                                    href={item.href}
                                    variant={i === 0 ? "secondary" : "outline"}
                                    size="sm"
                                    className="w-full"
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}