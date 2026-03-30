import Image from "next/image";
import HowItWorks from "./components/HowItWorks";
import RoadmapTimeline from "./components/RoadmapTimeline";

export default function Home() {
  return (
    <main className="relative flex w-full flex-col gap-10 px-6 py-6 text-[#F5F7FF] sm:px-10 sm:py-8 md:px-16 lg:px-24 xl:px-32">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="spotlight-1 absolute -top-20 left-[15%] h-[28rem] w-[28rem] rounded-full bg-[#8B5CF6]/20 blur-[120px]" />
        <div className="spotlight-2 absolute top-[30%] -right-[5%] h-[22rem] w-[22rem] rounded-full bg-[#22D3EE]/15 blur-[100px]" />
        <div className="spotlight-3 absolute top-[55%] left-[5%] h-[20rem] w-[20rem] rounded-full bg-[#EC4899]/12 blur-[110px]" />
        <div className="spotlight-4 absolute top-[75%] right-[20%] h-[26rem] w-[26rem] rounded-full bg-[#8B5CF6]/14 blur-[130px]" />
        <div className="spotlight-5 absolute top-[10%] right-[30%] h-[18rem] w-[18rem] rounded-full bg-[#22D3EE]/10 blur-[90px]" />
      </div>

      <header className="sticky top-2 z-40 w-full rounded-xl border border-white/[0.06] bg-[#0F1020]/70 px-5 py-3 shadow-[0_6px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs font-semibold uppercase text-[#A3A8C2] sm:gap-5 sm:text-sm">
            <a href="#gameplay" className="px-1 py-1 transition-colors hover:text-[#F5F7FF]">
              Gameplay
            </a>
            <a href="#gameplay-loop" className="px-1 py-1 transition-colors hover:text-[#F5F7FF]">
              How it Works
            </a>
            <a href="#drops" className="px-1 py-1 transition-colors hover:text-[#F5F7FF]">
              Loot
            </a>
            <a href="#roadmap" className="px-1 py-1 transition-colors hover:text-[#F5F7FF]">
              Roadmap
            </a>
            <a href="#tokenomics" className="px-1 py-1 transition-colors hover:text-[#F5F7FF]">
              Tokenomics
            </a>
            <a
              href="https://infinite-chest.gitbook.io/infinite-chest"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 py-1 transition-colors hover:text-[#F5F7FF]"
            >
              Docs
            </a>
          </div>
          <a
            href="https://infinite-chest-app.vercel.app/"
            className="group relative isolate overflow-hidden border border-[#8B5CF6] bg-[#8B5CF6] px-5 py-2 text-xs font-bold text-[#F5F7FF] shadow-[0_0_18px_rgba(139,92,246,0.5)] transition-transform hover:-translate-y-0.5 [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)] sm:text-sm"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-[-60%] left-[-28%] z-10 w-[28%] -skew-x-[22deg] bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.88),rgba(255,255,255,0))] opacity-0 group-hover:opacity-100 group-hover:animate-[cta-beam-sweep_460ms_ease-out]"
            />
            <span className="relative z-20 block transition-all duration-150 group-hover:-translate-y-1 group-hover:opacity-0">PLAY NOW</span>
            <span className="pointer-events-none absolute inset-0 z-20 flex translate-y-1 items-center justify-center opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100" aria-hidden="true">
              GO
            </span>
          </a>
        </nav>
      </header>

      <section
        id="gameplay"
        className="relative grid w-full items-center gap-8 py-10 md:grid-cols-[1.3fr_1fr]"
      >
        <div className="pointer-events-none absolute -right-16 -bottom-8 h-40 w-40 rounded-full bg-[#EC4899]/10 blur-3xl" />

        <div className="relative">
          <Image
            src="/Main Box.png"
            alt="Infinite Chest"
            width={1200}
            height={900}
            priority
            className="h-auto w-full drop-shadow-[0_0_80px_rgba(139,92,246,0.4)]"
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="mb-1 text-xs font-semibold tracking-[0.24em] text-[#22D3EE] uppercase">
            Degen Loot Loop
          </p>
          <h1 className="font-heading text-4xl leading-none font-extrabold sm:text-5xl">
            Open Chests. Pull Rares. Flex Hard.
          </h1>
          <p className="max-w-md text-base text-[#C4CAE6] sm:text-lg">
            This is pure degen energy: connect wallet, spam open, chase that
            legendary hit and show the timeline who got blessed.
          </p>
          <a
            href="https://infinite-chest-app.vercel.app/"
            className="group relative isolate mt-2 w-fit overflow-hidden border border-[#8B5CF6] bg-[#8B5CF6] px-6 py-3 text-sm font-bold text-[#F5F7FF] shadow-[0_0_24px_rgba(139,92,246,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(139,92,246,0.6)] [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-[-60%] left-[-28%] z-10 w-[28%] -skew-x-[22deg] bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.88),rgba(255,255,255,0))] opacity-0 group-hover:opacity-100 group-hover:animate-[cta-beam-sweep_460ms_ease-out]"
            />
            <span className="relative z-20 block transition-all duration-150 group-hover:-translate-y-1 group-hover:opacity-0">Launch App</span>
            <span className="pointer-events-none absolute inset-0 z-20 flex translate-y-1 items-center justify-center opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100" aria-hidden="true">
              GO
            </span>
          </a>
        </div>
      </section>

      <HowItWorks />

      <section id="drops" className="w-full py-10 text-center">
        <h2 className="font-heading mb-8 text-3xl font-bold sm:text-4xl">Drops &amp; Rarity</h2>
        <div className="grid grid-cols-1 items-end gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-[0.92fr_1.08fr_1.18fr_1fr]">
          <article className="group relative mx-auto w-full max-w-[15rem] sm:max-w-[16rem] lg:max-w-none">
            <div className="absolute inset-x-[18%] bottom-5 h-12 rounded-full bg-[#D18A5C]/18 blur-3xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-[42px]" />
            <div className="drop-float drop-float-fast relative h-[15rem] sm:h-[17rem] lg:h-[18rem]">
              <Image
                src="/drops/key card full.webp"
                alt="Rust Key common drop"
                fill
                sizes="(min-width: 1024px) 18vw, (min-width: 640px) 38vw, 78vw"
                className="object-bottom object-contain drop-shadow-[0_10px_26px_rgba(255,200,120,0.2)] transition-transform duration-700 ease-out group-hover:scale-[1.3]"
              />
            </div>
          </article>

          <article className="group relative mx-auto w-full max-w-[16rem] sm:max-w-[17rem] lg:max-w-none">
            <div className="absolute inset-x-[14%] bottom-6 h-14 rounded-full bg-[#C14CFF]/18 blur-3xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-[46px]" />
            <div className="relative h-[18rem] sm:h-[20rem] lg:h-[22rem] transition-transform duration-500 group-hover:-translate-y-2">
              <Image
                src="/drops/Epic bg.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 42vw, 82vw"
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.15]"
              />
              <div className="drop-float absolute inset-0">
                <Image
                  src="/drops/Sword.webp"
                  alt="Void Blade epic drop"
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 42vw, 82vw"
                  className="object-contain drop-shadow-[0_12px_34px_rgba(193,76,255,0.32)] transition-transform duration-700 ease-out scale-[0.85] group-hover:-translate-y-3 group-hover:scale-[1.105]"
                />
              </div>
            </div>
          </article>

          <article className="group relative mx-auto w-full max-w-[17rem] sm:max-w-[18rem] lg:max-w-none">
            <div className="absolute inset-x-[10%] bottom-6 h-16 rounded-full bg-[#F6B13F]/18 blur-3xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-[50px]" />
            <div className="relative h-[20rem] sm:h-[22rem] lg:h-[24rem] transition-transform duration-500 group-hover:-translate-y-2">
              <Image
                src="/drops/leyendari place older.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 44vw, 84vw"
                className="object-contain transition-transform duration-700 ease-out scale-[1.15] group-hover:scale-[1.3225]"
              />
              <div className="drop-float drop-float-slow absolute inset-0">
                <Image
                  src="/drops/fenix leyend.webp"
                  alt="Phoenix Relic legendary drop"
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 44vw, 84vw"
                  className="object-contain drop-shadow-[0_12px_34px_rgba(246,177,63,0.34)] transition-transform duration-700 ease-out scale-[1.15] group-hover:-translate-y-3 group-hover:scale-[1.495]"
                />
              </div>
            </div>
          </article>

          <article className="group relative mx-auto w-full max-w-[16rem] sm:max-w-[17rem] lg:max-w-none">
            <div className="absolute inset-x-[15%] bottom-5 h-14 rounded-full bg-[#4DE5D6]/16 blur-3xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-[46px]" />
            <div className="relative h-[17rem] sm:h-[19rem] lg:h-[20.5rem] transition-transform duration-500 group-hover:-translate-y-2">
              <div className="absolute inset-0 origin-bottom transition-transform duration-700 ease-out scale-[1.05] group-hover:scale-[1.3125]">
                <Image
                  src="/drops/Rare base.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 21vw, (min-width: 640px) 40vw, 80vw"
                  className="object-bottom object-contain"
                />
                <Image
                  src="/drops/Rare full text.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 21vw, (min-width: 640px) 40vw, 80vw"
                  className="object-bottom object-contain"
                />
              </div>
              <div className="drop-float drop-float-delay absolute inset-x-0 top-0 bottom-[35%]">
                <Image
                  src="/drops/Rare nft.webp"
                  alt="Neon Gem rare drop"
                  fill
                  sizes="(min-width: 1024px) 21vw, (min-width: 640px) 40vw, 80vw"
                  className="object-contain drop-shadow-[0_10px_28px_rgba(77,229,214,0.28)] transition-transform duration-700 ease-out scale-[1.3] group-hover:-translate-y-4 group-hover:scale-[1.69]"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      <RoadmapTimeline />

      <section id="tokenomics" className="w-full py-10">
        <h2 className="font-heading mb-4 text-center text-3xl font-bold sm:text-4xl">Tokenomics</h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-sm text-[#C4CAE6] sm:text-base">
          $CHEST — the currency of degens, dreamers, and people who click buttons for a living.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-sm border border-[#8B5CF6]/35 bg-[#FFFFFF]/[0.02] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
            <p className="mb-1 text-xs font-semibold tracking-[0.15em] text-[#8B5CF6] uppercase">Total Supply</p>
            <p className="font-heading text-2xl font-bold">69,420,000,000</p>
            <p className="mt-1 text-xs text-[#A3A8C2]">nice.</p>
          </div>
          <div className="rounded-sm border border-[#22D3EE]/35 bg-[#FFFFFF]/[0.02] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
            <p className="mb-1 text-xs font-semibold tracking-[0.15em] text-[#22D3EE] uppercase">Circulating Supply</p>
            <p className="font-heading text-2xl font-bold">Depends on vibes</p>
            <p className="mt-1 text-xs text-[#A3A8C2]">we burn when we feel like it</p>
          </div>
          <div className="rounded-sm border border-[#EC4899]/35 bg-[#FFFFFF]/[0.02] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
            <p className="mb-1 text-xs font-semibold tracking-[0.15em] text-[#EC4899] uppercase">Market Cap</p>
            <p className="font-heading text-2xl font-bold">Yes.</p>
            <p className="mt-1 text-xs text-[#A3A8C2]">trust the process ser</p>
          </div>
          <div className="rounded-sm border border-[#F59E0B]/35 bg-[#FFFFFF]/[0.02] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
            <p className="mb-1 text-xs font-semibold tracking-[0.15em] text-[#F59E0B] uppercase">Liquidity</p>
            <p className="font-heading text-2xl font-bold">Locked forever</p>
            <p className="mt-1 text-xs text-[#A3A8C2]">like your ex blocked you</p>
          </div>
          <div className="rounded-sm border border-[#34D399]/35 bg-[#FFFFFF]/[0.02] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
            <p className="mb-1 text-xs font-semibold tracking-[0.15em] text-[#34D399] uppercase">Tax</p>
            <p className="font-heading text-2xl font-bold">0 / 0</p>
            <p className="mt-1 text-xs text-[#A3A8C2]">we&apos;re not the government</p>
          </div>
          <div className="rounded-sm border border-[#A78BFA]/35 bg-[#FFFFFF]/[0.02] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
            <p className="mb-1 text-xs font-semibold tracking-[0.15em] text-[#A78BFA] uppercase">Team Allocation</p>
            <p className="font-heading text-2xl font-bold">Enough to eat ramen</p>
            <p className="mt-1 text-xs text-[#A3A8C2]">but not enough for wagyu</p>
          </div>
        </div>
      </section>

      <section className="w-full p-6 text-center sm:p-8">
        <h2 className="font-heading mb-4 text-3xl font-bold sm:text-4xl">Community / Degen Hub</h2>
        <p className="mx-auto mb-5 max-w-2xl text-[#C4CAE6]">
          Tap into the latest drops, share your pulls, and flex the rare finds.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 bg-[#FFFFFF]/[0.05] px-5 py-3 text-sm font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-0.5 hover:text-[#8B5CF6] [clip-path:polygon(8px_0,100%_0,calc(100%-8px)_100%,0_100%)]"
          >
            Join Discord
          </a>
          <a
            href="https://x.com/infinite_chests"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 bg-[#FFFFFF]/[0.05] px-5 py-3 text-sm font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-0.5 hover:text-[#22D3EE] [clip-path:polygon(8px_0,100%_0,calc(100%-8px)_100%,0_100%)]"
          >
            Follow on X
          </a>
        </div>
      </section>

      <section className="w-full bg-[#FFFFFF]/[0.02] p-8 text-center shadow-[0_0_34px_rgba(139,92,246,0.2)] [clip-path:polygon(16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0_100%,0_16px)] sm:p-10">
        <p className="mb-4 text-lg sm:text-xl">
          Ready to test your luck? Open your first chest now.
        </p>
        <a
          href="https://infinite-chest-app.vercel.app/"
          className="group relative isolate inline-block overflow-hidden border border-[#8B5CF6] bg-[#8B5CF6] px-8 py-3 text-sm font-semibold text-[#F5F7FF] shadow-[0_0_26px_rgba(139,92,246,0.45)] transition-transform hover:-translate-y-0.5 [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-[-60%] left-[-28%] z-10 w-[28%] -skew-x-[22deg] bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.88),rgba(255,255,255,0))] opacity-0 group-hover:opacity-100 group-hover:animate-[cta-beam-sweep_460ms_ease-out]"
          />
          <span className="relative z-20 block transition-all duration-150 group-hover:-translate-y-1 group-hover:opacity-0">Launch App</span>
          <span className="pointer-events-none absolute inset-0 z-20 flex translate-y-1 items-center justify-center opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100" aria-hidden="true">
            GO
          </span>
        </a>
      </section>

      <footer className="w-full px-5 py-6">
        <nav className="flex flex-wrap items-center justify-center gap-3 text-sm text-[#A3A8C2]">
          <a href="https://infinite-chest-app.vercel.app/" className="transition-colors hover:text-[#F5F7FF]">
            App
          </a>
          <a href="#" className="transition-colors hover:text-[#F5F7FF]">
            Docs
          </a>
          <a href="#" className="transition-colors hover:text-[#F5F7FF]">
            Terms
          </a>
          <a href="#" className="transition-colors hover:text-[#F5F7FF]">
            Privacy
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#F5F7FF]"
          >
            Discord
          </a>
          <a
            href="https://x.com/infinite_chests"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#F5F7FF]"
          >
            X
          </a>
        </nav>
      </footer>
    </main>
  );
}
