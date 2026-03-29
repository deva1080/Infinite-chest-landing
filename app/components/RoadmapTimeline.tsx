"use client";

import { useEffect, useRef } from "react";

const phases = [
  {
    label: "Phase 1 — Summon",
    title: "Ape In or Stay Poor",
    color: "#8B5CF6",
    items: [
      { done: true, text: "Landing page goes live" },
      { done: true, text: "Smart contracts deployed" },
      { done: true, text: "Community Discord opens" },
      { done: false, text: "First 1000 degens onboarded" },
    ],
  },
  {
    label: "Phase 2 — Loot",
    title: "Chests Go Brrrr",
    color: "#22D3EE",
    items: [
      { done: false, text: "Public chest opening launch" },
      { done: false, text: "Rarity system live" },
      { done: false, text: "Leaderboard for top pullers" },
      { done: false, text: '"GM I pulled a legendary" tweets' },
    ],
  },
  {
    label: "Phase 3 — Flex",
    title: "Touch Grass? Never Heard of It",
    color: "#EC4899",
    items: [
      { done: false, text: "Inventory & collection showcase" },
      { done: false, text: "Trading between degens" },
      { done: false, text: "Seasonal limited drops" },
      { done: false, text: "Collabs with other degen projects" },
    ],
  },
  {
    label: "Phase 4 — Moon",
    title: "Wagmi or Ngmi, No In Between",
    color: "#F59E0B",
    items: [
      { done: false, text: "Token launch (wen moon ser?)" },
      { done: false, text: "Staking rewards for diamond hands" },
      { done: false, text: "DAO governance (degens run the show)" },
      { done: false, text: "Multichain expansion" },
    ],
  },
];

export default function RoadmapTimeline() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = itemsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("roadmap-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="roadmap" className="w-full py-10">
      <h2 className="font-heading mb-14 text-center text-3xl font-bold sm:text-4xl">
        Roadmap
      </h2>

      <div className="relative mx-auto max-w-4xl">
        {/* Vertical line */}
        <div
          className="absolute top-0 bottom-0 left-4 w-px bg-white/[0.08] md:left-1/2 md:-translate-x-px"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-24">
          {phases.map((phase, i) => {
            const isRight = i % 2 !== 0;

            return (
              <div
                key={i}
                ref={(el) => { itemsRef.current[i] = el; }}
                className={`roadmap-item relative grid items-start gap-6 md:grid-cols-[1fr_auto_1fr] ${
                  isRight ? "md-roadmap-right" : ""
                }`}
              >
                {/* Left column */}
                <div
                  className={`pl-12 md:pl-0 ${
                    isRight
                      ? "md:col-start-3 md:pl-8"
                      : "md:col-start-1 md:pr-8 md:text-right"
                  }`}
                >
                  <p
                    className="mb-2 text-sm font-bold tracking-[0.2em] uppercase sm:text-base"
                    style={{ color: phase.color }}
                  >
                    {phase.label}
                  </p>
                  <h3 className="font-heading mb-4 text-xl font-bold sm:text-2xl">
                    {phase.title}
                  </h3>
                  <ul
                    className={`space-y-2.5 text-base text-[#C4CAE6] ${
                      !isRight ? "md:text-right" : ""
                    }`}
                  >
                    {phase.items.map((item, j) => (
                      <li
                        key={j}
                        className={`roadmap-bullet ${
                          !isRight ? "md:flex md:flex-row-reverse md:items-center md:gap-1.5" : ""
                        }`}
                      >
                        <span
                          className={`mr-1.5 ${!isRight ? "md:mr-0 md:ml-1.5" : ""} ${
                            item.done
                              ? `drop-shadow-[0_0_4px_${phase.color}80]`
                              : "text-[#A3A8C2]"
                          }`}
                          style={item.done ? { color: phase.color } : undefined}
                        >
                          {item.done ? "◆" : "◇"}
                        </span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Node (center) */}
                <div
                  className="absolute left-4 top-1 flex -translate-x-1/2 items-center justify-center md:static md:col-start-2 md:row-start-1 md:translate-x-0 md:self-start"
                >
                  <div
                    className="roadmap-node relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-[#0a0a0f] transition-all duration-500"
                    style={{ borderColor: `${phase.color}60` }}
                  >
                    <div
                      className="h-3 w-3 rounded-full transition-all duration-500"
                      style={{ backgroundColor: `${phase.color}50` }}
                    />
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div
                  className={`hidden md:block ${
                    isRight ? "md:col-start-1 md:row-start-1" : "md:col-start-3"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
