import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function SocialFollow() {
    return (
        <section className="py-16 sm:py-20">
            <Container>
                <div className="grid items-center gap-10 rounded-3xl bg-navy px-8 py-10 text-white sm:px-12 lg:grid-cols-[1fr_320px] lg:py-12">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky">
                            Follow our journey
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Keep up with TSWP
                        </h2>

                        <p className="mt-5 leading-7 text-white/70">
                            Follow The Student Water Project for project updates, student
                            stories, events, research, and new ways to get involved.
                        </p>

                        <a
                            href="https://www.instagram.com/thestudentwaterproject/"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-7 inline-flex rounded-full bg-white px-6 py-3 font-bold text-navy transition hover:bg-sky hover:text-white"
                        >
                            Follow us on Instagram
                        </a>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <Image
                            src="/images/mascot/camera.png"
                            alt="Student Water Project droplet mascot holding a camera"
                            width={320}
                            height={320}
                            className="h-auto max-h-[290px] w-auto max-w-full object-contain"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}