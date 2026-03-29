"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    label: "Connect",
    labelColor: "#22D3EE",
    desc: "Link your wallet and get ready to start your pull run.",
    borderColor: "rgba(68,216,255,0.6)",
    bg: "radial-gradient(circle,rgba(34,211,238,0.28),rgba(15,18,38,0.95))",
    shadow: "0 0 25px rgba(34,211,238,0.35)",
    flashColor: "rgba(34,211,238,0.6)",
  },
  {
    num: "02",
    label: "Open Chests",
    labelColor: "#A78BFA",
    desc: "Burn your key, open the chest, and roll the loot table.",
    borderColor: "rgba(168,138,255,0.65)",
    bg: "radial-gradient(circle,rgba(139,92,246,0.3),rgba(20,16,45,0.96))",
    shadow: "0 0 25px rgba(139,92,246,0.38)",
    flashColor: "rgba(139,92,246,0.6)",
  },
  {
    num: "03",
    label: "Flex Rares",
    labelColor: "#34D399",
    desc: "Pull a rare, build your collection, and flex it in community.",
    borderColor: "rgba(101,242,195,0.65)",
    bg: "radial-gradient(circle,rgba(52,211,153,0.24),rgba(11,28,28,0.96))",
    shadow: "0 0 25px rgba(52,211,153,0.28)",
    flashColor: "rgba(52,211,153,0.6)",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed.current) {
          hasPlayed.current = true;
          section.classList.add("hiw-animate");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gameplay-loop"
      className="relative w-full px-6 py-10 text-center sm:px-8"
    >
      <div className="relative mx-auto mb-7 inline-block border border-[#4D5D95] bg-[#141B36]/75 px-8 py-3 [clip-path:polygon(20px_0,100%_0,calc(100%-20px)_100%,0_100%)]">
        <h2 className="font-heading text-3xl font-extrabold tracking-wide uppercase sm:text-4xl">
          How it Works
        </h2>
      </div>

      <p className="relative mx-auto mb-8 max-w-2xl text-sm text-[#D0D5EB] sm:text-base">
        Connect, pull, and flex. One clean loop designed for fast degen play.
      </p>

      <ol className="relative mx-auto grid max-w-4xl gap-6 text-center md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-start">
        {steps.flatMap((step, i) => {
          const els: React.ReactNode[] = [];
          if (i > 0) {
            els.push(
              <li
                key={`arrow-${i}`}
                className={`hiw-arrow hiw-arrow-${i} hidden pt-10 md:block`}
                aria-hidden="true"
              >
                <div className="flex items-center gap-2">
                  <span className="block h-[2px] w-12 bg-[#4EDBF8]/70" />
                  <span className="block h-0 w-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-[#4EDBF8]" />
                </div>
              </li>
            );
          }
          els.push(
            <li
              key={`step-${step.num}`}
              className={`hiw-step hiw-step-${i} flex flex-col items-center`}
            >
              <div
                className="hiw-circle mb-4 flex h-24 w-24 items-center justify-center rounded-full border"
                style={{
                  borderColor: step.borderColor,
                  background: step.bg,
                  boxShadow: step.shadow,
                  ["--flash-color" as string]: step.flashColor,
                }}
              >
                <span className="font-heading text-3xl">{step.num}</span>
              </div>
              <p
                className="text-xs font-semibold tracking-[0.16em] uppercase"
                style={{ color: step.labelColor }}
              >
                {step.label}
              </p>
              <p className="mt-2 max-w-[16rem] text-sm text-[#D0D5EB]">
                {step.desc}
              </p>
            </li>
          );
          return els;
        })}
      </ol>
    </section>
  );
}
